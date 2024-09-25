import { insertPositionToIndex, } from '@lumensuite/affine-shared/utils';
import { createUniComponentFromWebComponent, DataSourceBase, uniMap, ViewManagerBase, } from '@lumensuite/data-view';
import { columnPresets } from '@lumensuite/data-view/column-presets';
import { assertExists } from '@lumensuite/global/utils';
import { Text } from '@lumensuite/store';
import { computed } from '@lit-labs/preact-signals';
import { getIcon } from './block-icons.js';
import { databaseBlockAllColumnMap, databaseBlockColumnList, databaseColumnConverts, } from './columns/index.js';
import { HostContextKey } from './context/host-context.js';
import { BlockRenderer } from './detail-panel/block-renderer.js';
import { NoteRenderer } from './detail-panel/note-renderer.js';
import { addColumn, applyCellsUpdate, applyColumnUpdate, copyCellsByColumn, databaseViewAddView, deleteRows, deleteView, duplicateView, findColumnIndex, getCell, getColumn, moveViewTo, updateCell, updateCells, updateColumn, updateView, } from './utils.js';
import { databaseBlockViewMap, databaseBlockViews } from './views/models.js';
export class DatabaseBlockDataSource extends DataSourceBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get addPropertyConfigList() {
        return databaseBlockColumnList;
    }
    get detailSlots() {
        return {
            ...super.detailSlots,
            header: uniMap(createUniComponentFromWebComponent(BlockRenderer), props => ({
                ...props,
                host: this.host,
            })),
            note: uniMap(createUniComponentFromWebComponent(NoteRenderer), props => ({
                ...props,
                model: this._model,
                host: this.host,
            })),
        };
    }
    get doc() {
        return this._model.doc;
    }
    constructor(host, config) {
        super();
        this.host = host;
        this._batch = 0;
        this.featureFlags$ = computed(() => {
            return {
                enable_number_formatting: this.doc.awarenessStore.getFlag('enable_database_number_formatting') ??
                    false,
            };
        });
        this.properties$ = computed(() => {
            return this._model.columns$.value.map(column => column.id);
        });
        this.readonly$ = computed(() => {
            return this._model.doc.awarenessStore.isReadonly(this._model.doc.blockCollection);
        });
        this.rows$ = computed(() => {
            return this._model.children.map(v => v.id);
        });
        this.viewDataList$ = computed(() => {
            return this._model.views$.value;
        });
        this.viewManager = new ViewManagerBase(this);
        this.viewMetas = databaseBlockViews;
        this._model = host.doc.collection
            .getDoc(config.pageId)
            ?.getBlockById(config.blockId);
        this.setContext(HostContextKey, host);
    }
    _runCapture() {
        if (this._batch) {
            return;
        }
        this._batch = requestAnimationFrame(() => {
            this.doc.captureSync();
            this._batch = 0;
        });
    }
    getModelById(rowId) {
        return this._model.children[this._model.childMap.value.get(rowId) ?? -1];
    }
    newColumnName() {
        let i = 1;
        while (this._model.columns$.value.some(column => column.name === `Column ${i}`)) {
            i++;
        }
        return `Column ${i}`;
    }
    cellChangeValue(rowId, propertyId, value) {
        this._runCapture();
        const type = this.propertyGetType(propertyId);
        const update = this.getPropertyMeta(type).config.valueUpdate;
        let newValue = value;
        if (update) {
            const old = this.cellGetValue(rowId, propertyId);
            newValue = update(old, this.propertyGetData(propertyId), value);
        }
        if (type === 'title' && newValue instanceof Text) {
            this._model.doc.transact(() => {
                this._model.text?.clear();
                this._model.text?.join(newValue);
            });
            return;
        }
        if (this._model.columns$.value.some(v => v.id === propertyId)) {
            updateCell(this._model, rowId, {
                columnId: propertyId,
                value: newValue,
            });
            applyCellsUpdate(this._model);
        }
    }
    cellGetValue(rowId, propertyId) {
        if (propertyId === 'type') {
            const model = this.getModelById(rowId);
            if (!model) {
                return;
            }
            return getIcon(model);
        }
        const type = this.propertyGetType(propertyId);
        if (type === 'title') {
            const model = this.getModelById(rowId);
            return model?.text;
        }
        return getCell(this._model, rowId, propertyId)?.value;
    }
    getPropertyMeta(type) {
        return databaseBlockAllColumnMap[type];
    }
    propertyAdd(insertToPosition, type) {
        this.doc.captureSync();
        const result = addColumn(this._model, insertToPosition, databaseBlockAllColumnMap[type ?? columnPresets.multiSelectColumnConfig.type].create(this.newColumnName()));
        applyColumnUpdate(this._model);
        return result;
    }
    propertyChangeData(propertyId, data) {
        this._runCapture();
        updateColumn(this._model, propertyId, () => ({ data }));
        applyColumnUpdate(this._model);
    }
    propertyChangeName(propertyId, name) {
        this.doc.captureSync();
        updateColumn(this._model, propertyId, () => ({ name }));
        applyColumnUpdate(this._model);
    }
    propertyChangeType(propertyId, toType) {
        const currentType = this.propertyGetType(propertyId);
        const currentData = this.propertyGetData(propertyId);
        const rows = this.rows$.value;
        const currentCells = rows.map(rowId => this.cellGetValue(rowId, propertyId));
        const convertFunction = databaseColumnConverts.find(v => v.from === currentType && v.to === toType)?.convert;
        const result = convertFunction?.(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        currentData, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        currentCells) ?? {
            column: databaseBlockAllColumnMap[toType].config.defaultData(),
            cells: currentCells.map(() => undefined),
        };
        this.doc.captureSync();
        updateColumn(this._model, propertyId, () => ({
            type: toType,
            data: result.column,
        }));
        const cells = {};
        currentCells.forEach((value, i) => {
            if (value != null || result.cells[i] != null) {
                cells[rows[i]] = result.cells[i];
            }
        });
        updateCells(this._model, propertyId, cells);
        applyColumnUpdate(this._model);
    }
    propertyDelete(id) {
        this.doc.captureSync();
        const index = findColumnIndex(this._model, id);
        if (index < 0)
            return;
        this.doc.transact(() => {
            this._model.columns = this._model.columns.filter((_, i) => i !== index);
        });
    }
    propertyDuplicate(columnId) {
        this.doc.captureSync();
        const currentSchema = getColumn(this._model, columnId);
        assertExists(currentSchema);
        const { id: copyId, ...nonIdProps } = currentSchema;
        const names = new Set(this._model.columns$.value.map(v => v.name));
        let index = 1;
        while (names.has(`${nonIdProps.name}(${index})`)) {
            index++;
        }
        const schema = { ...nonIdProps, name: `${nonIdProps.name}(${index})` };
        const id = addColumn(this._model, {
            before: false,
            id: columnId,
        }, schema);
        copyCellsByColumn(this._model, copyId, id);
        applyColumnUpdate(this._model);
        return id;
    }
    propertyGetData(propertyId) {
        return (this._model.columns$.value.find(v => v.id === propertyId)?.data ?? {});
    }
    propertyGetDefaultWidth(propertyId) {
        if (this.propertyGetType(propertyId) === 'title') {
            return 260;
        }
        return super.propertyGetDefaultWidth(propertyId);
    }
    propertyGetName(propertyId) {
        if (propertyId === 'type') {
            return 'Block Type';
        }
        return (this._model.columns$.value.find(v => v.id === propertyId)?.name ?? '');
    }
    propertyGetReadonly(propertyId) {
        if (propertyId === 'type')
            return true;
        return false;
    }
    propertyGetType(propertyId) {
        if (propertyId === 'type') {
            return 'image';
        }
        return (this._model.columns$.value.find(v => v.id === propertyId)?.type ?? '');
    }
    rowAdd(insertPosition) {
        this.doc.captureSync();
        const index = typeof insertPosition === 'number'
            ? insertPosition
            : insertPositionToIndex(insertPosition, this._model.children);
        return this.doc.addBlock('affine:paragraph', {}, this._model.id, index);
    }
    rowDelete(ids) {
        this.doc.captureSync();
        this.doc.updateBlock(this._model, {
            children: this._model.children.filter(v => !ids.includes(v.id)),
        });
        deleteRows(this._model, ids);
    }
    rowMove(rowId, position) {
        const model = this.doc.getBlockById(rowId);
        if (model) {
            const index = insertPositionToIndex(position, this._model.children);
            const target = this._model.children[index];
            if (target?.id === rowId) {
                return;
            }
            this.doc.moveBlocks([model], this._model, target);
        }
    }
    viewDataAdd(viewType) {
        this._model.doc.captureSync();
        const view = databaseViewAddView(this._model, databaseBlockViewMap[viewType]);
        return view.id;
    }
    viewDataDelete(viewId) {
        this._model.doc.captureSync();
        deleteView(this._model, viewId);
    }
    viewDataDuplicate(id) {
        return duplicateView(this._model, id);
    }
    viewDataGet(viewId) {
        return this.viewDataList$.value.find(data => data.id === viewId);
    }
    viewDataMoveTo(id, position) {
        moveViewTo(this._model, id, position);
    }
    viewDataUpdate(id, updater) {
        updateView(this._model, id, updater);
    }
    viewMetaGet(type) {
        return databaseBlockViewMap[type];
    }
    viewMetaGetById(viewId) {
        const view = this.viewDataGet(viewId);
        return this.viewMetaGet(view.mode);
    }
}
//# sourceMappingURL=data-source.js.map