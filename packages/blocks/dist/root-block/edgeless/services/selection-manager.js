import { MindmapElementModel } from '@blocksuite/affine-block-surface';
import { GroupElementModel } from '@blocksuite/affine-model';
import { assertType, DisposableGroup, groupBy, Slot, } from '@blocksuite/global/utils';
import { edgelessElementsBound } from '../utils/bound-utils.js';
export class EdgelessSelectionManager {
    get activeGroup() {
        return this._activeGroup;
    }
    get cursorSelection() {
        return this._cursorSelection;
    }
    get editing() {
        return this.surfaceSelections.some(sel => sel.editing);
    }
    get empty() {
        return this.surfaceSelections.every(sel => sel.elements.length === 0);
    }
    get firstElement() {
        return this.selectedElements[0];
    }
    get inoperable() {
        return this.surfaceSelections.some(sel => sel.inoperable);
    }
    get lastSurfaceSelections() {
        return this._lastSurfaceSelections;
    }
    get remoteCursorSelectionMap() {
        return this._remoteCursorSelectionMap;
    }
    get remoteSelectedSet() {
        return this._remoteSelectedSet;
    }
    get remoteSurfaceSelectionsMap() {
        return this._remoteSurfaceSelectionsMap;
    }
    get selectedBound() {
        return edgelessElementsBound(this.selectedElements);
    }
    get selectedElements() {
        const elements = [];
        this.selectedIds.forEach(id => {
            const el = this.service.getElementById(id);
            el && elements.push(el);
        });
        return elements;
    }
    get selectedIds() {
        return [...this._selectedSet];
    }
    get selectedSet() {
        return this._selectedSet;
    }
    get stdSelectionManager() {
        return this.service.std.selection;
    }
    get surfaceSelections() {
        return this._surfaceSelections;
    }
    constructor(service) {
        this._activeGroup = null;
        this._cursorSelection = null;
        this._lastSurfaceSelections = [];
        this._remoteCursorSelectionMap = new Map();
        this._remoteSelectedSet = new Set();
        this._remoteSurfaceSelectionsMap = new Map();
        this._selectedSet = new Set();
        this._surfaceSelections = [];
        this.disposable = new DisposableGroup();
        this.slots = {
            updated: new Slot(),
            remoteUpdated: new Slot(),
            cursorUpdated: new Slot(),
            remoteCursorUpdated: new Slot(),
        };
        this.service = service;
        this.surfaceModel = service.surface;
        this.mount();
    }
    clear() {
        this.stdSelectionManager.clear();
        this.set({
            elements: [],
            editing: false,
        });
    }
    clearLast() {
        this._lastSurfaceSelections = [];
    }
    dispose() {
        this.disposable.dispose();
    }
    equals(selection) {
        let count = 0;
        let editing = false;
        const exist = selection.every(sel => {
            const exist = sel.elements.every(id => this._selectedSet.has(id));
            if (exist) {
                count += sel.elements.length;
            }
            if (sel.editing)
                editing = true;
            return exist;
        });
        return (exist && count === this._selectedSet.size && editing === this.editing);
    }
    /**
     * check if the element is selected in local
     * @param element
     */
    has(element) {
        return this._selectedSet.has(element);
    }
    /**
     * check if element is selected by remote peers
     * @param element
     */
    hasRemote(element) {
        return this._remoteSelectedSet.has(element);
    }
    isEmpty(selections) {
        return selections.every(sel => sel.elements.length === 0);
    }
    isInSelectedRect(viewX, viewY) {
        const selected = this.selectedElements;
        if (!selected.length)
            return false;
        const commonBound = edgelessElementsBound(selected);
        const [modelX, modelY] = this.service.viewport.toModelCoord(viewX, viewY);
        if (commonBound && commonBound.isPointInBound([modelX, modelY])) {
            return true;
        }
        return false;
    }
    mount() {
        this.disposable.add(this.stdSelectionManager.slots.changed.on(selections => {
            const { cursor = [], surface = [] } = groupBy(selections, sel => {
                if (sel.is('surface')) {
                    return 'surface';
                }
                else if (sel.is('cursor')) {
                    return 'cursor';
                }
                return 'none';
            });
            assertType(cursor);
            assertType(surface);
            if (cursor[0] && !this.cursorSelection?.equals(cursor[0])) {
                this._cursorSelection = cursor[0];
                this.slots.cursorUpdated.emit(cursor[0]);
            }
            if ((surface.length === 0 && this.empty) || this.equals(surface)) {
                return;
            }
            this._lastSurfaceSelections = this.surfaceSelections;
            this._surfaceSelections = surface;
            this._selectedSet = new Set();
            surface.forEach(sel => sel.elements.forEach(id => {
                this._selectedSet.add(id);
            }));
            this.slots.updated.emit(this.surfaceSelections);
        }));
        this.disposable.add(this.stdSelectionManager.slots.remoteChanged.on(states => {
            const surfaceMap = new Map();
            const cursorMap = new Map();
            const selectedSet = new Set();
            states.forEach((selections, id) => {
                let hasTextSelection = false;
                let hasBlockSelection = false;
                selections.forEach(selection => {
                    if (selection.is('text')) {
                        hasTextSelection = true;
                    }
                    if (selection.is('block')) {
                        hasBlockSelection = true;
                    }
                    if (selection.is('surface')) {
                        const surfaceSelections = surfaceMap.get(id) ?? [];
                        surfaceSelections.push(selection);
                        surfaceMap.set(id, surfaceSelections);
                        selection.elements.forEach(id => selectedSet.add(id));
                    }
                    if (selection.is('cursor')) {
                        cursorMap.set(id, selection);
                    }
                });
                if (hasBlockSelection || hasTextSelection) {
                    surfaceMap.delete(id);
                }
                if (hasTextSelection) {
                    cursorMap.delete(id);
                }
            });
            this._remoteCursorSelectionMap = cursorMap;
            this._remoteSurfaceSelectionsMap = surfaceMap;
            this._remoteSelectedSet = selectedSet;
            this.slots.remoteUpdated.emit();
            this.slots.remoteCursorUpdated.emit();
        }));
    }
    set(selection) {
        if (Array.isArray(selection)) {
            this.stdSelectionManager.setGroup('gfx', this.cursorSelection ? [...selection, this.cursorSelection] : selection);
            return;
        }
        const { blocks = [], elements = [] } = groupBy(selection.elements, id => {
            return this.service.doc.getBlockById(id) ? 'blocks' : 'elements';
        });
        let instances = [];
        if (elements.length > 0) {
            instances.push(this.stdSelectionManager.create('surface', this.surfaceModel.id, elements, selection.editing, selection.inoperable));
        }
        if (blocks.length > 0) {
            instances = instances.concat(blocks.map(blockId => this.stdSelectionManager.create('surface', blockId, [blockId], selection.editing, selection.inoperable)));
        }
        this.stdSelectionManager.setGroup('gfx', this.cursorSelection
            ? instances.concat([this.cursorSelection])
            : instances);
        if (instances.length > 0) {
            this.stdSelectionManager.setGroup('note', []);
        }
        if (selection.elements.length === 1 &&
            (this.firstElement instanceof GroupElementModel ||
                this.firstElement instanceof MindmapElementModel)) {
            this._activeGroup = this.firstElement;
        }
        else {
            if (this.selectedElements.some(ele => ele.group !== this._activeGroup) ||
                this.selectedElements.length === 0) {
                this._activeGroup = null;
            }
        }
    }
    setCursor(cursor) {
        const instance = this.stdSelectionManager.create('cursor', cursor.x, cursor.y);
        this.stdSelectionManager.setGroup('gfx', [
            ...this.surfaceSelections,
            instance,
        ]);
    }
}
//# sourceMappingURL=selection-manager.js.map