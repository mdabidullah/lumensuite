import { Slot } from '@lumensuite/global/utils';
import { BlockModel, DocCollection, nanoid } from '@lumensuite/store';
import { createDecoratorState } from './decorators/common.js';
import { initializeObservers, initializeWatchers } from './decorators/index.js';
import { syncElementFromY } from './element-model.js';
import { GfxGroupLikeElementModel, GfxPrimitiveElementModel, } from './element-model.js';
export class SurfaceBlockModel extends BlockModel {
    get elementModels() {
        const models = [];
        this._elementModels.forEach(model => models.push(model.model));
        return models;
    }
    get registeredElementTypes() {
        return Object.keys(this._elementCtorMap);
    }
    constructor() {
        super();
        this._decoratorState = createDecoratorState();
        this._elementCtorMap = Object.create(null);
        this._elementModels = new Map();
        this._elementToGroup = new Map();
        this._elementTypeMap = new Map();
        this._groupToElements = new Map();
        this._surfaceBlockModel = true;
        this.elementAdded = new Slot();
        this.elementRemoved = new Slot();
        this.elementUpdated = new Slot();
        /**
         * Hooks is used to attach extra logic when calling `addElement`、`updateElement`(or assign property directly) and `removeElement`.
         * It's useful when dealing with relation between different model.
         */
        this.hooks = {
            update: new Slot(),
            remove: new Slot(),
        };
        this.created.once(() => this._init());
    }
    _createElementFromProps(props, options) {
        const { type, id, ...rest } = props;
        if (!id) {
            throw new Error('Cannot find id in props');
        }
        const yMap = new DocCollection.Y.Map();
        const elementModel = this._createElementFromYMap(type, id, yMap, {
            ...options,
            newCreate: true,
        });
        props = this._propsToY(type, props);
        yMap.set('type', type);
        yMap.set('id', id);
        Object.keys(rest).forEach(key => {
            if (props[key] !== undefined) {
                // @ts-ignore
                elementModel.model[key] = props[key];
            }
        });
        return elementModel;
    }
    _createElementFromYMap(type, id, yMap, options) {
        const stashed = new Map();
        const Ctor = this._elementCtorMap[type];
        if (!Ctor) {
            throw new Error(`Invalid element type: ${yMap.get('type')}`);
        }
        const state = this._decoratorState;
        state.creating = true;
        state.skipField = options.skipFieldInit ?? false;
        let mounted = false;
        // @ts-ignore
        Ctor['_decoratorState'] = state;
        const elementModel = new Ctor({
            id,
            yMap,
            model: this,
            stashedStore: stashed,
            onChange: payload => mounted && options.onChange({ id, ...payload }),
        });
        // @ts-ignore
        delete Ctor['_decoratorState'];
        state.creating = false;
        state.skipField = false;
        const unmount = () => {
            mounted = false;
            elementModel['_disposable'].dispose();
        };
        const mount = () => {
            initializeObservers(Ctor.prototype, elementModel);
            initializeWatchers(Ctor.prototype, elementModel);
            elementModel['_disposable'].add(syncElementFromY(elementModel, payload => {
                mounted &&
                    options.onChange({
                        id,
                        ...payload,
                    });
            }));
            mounted = true;
            elementModel.onCreated();
        };
        return {
            model: elementModel,
            mount,
            unmount,
        };
    }
    _initElementModels() {
        const elementsYMap = this.elements.getValue();
        const addToType = (type, model) => {
            const sameTypeElements = this._elementTypeMap.get(type) || [];
            if (sameTypeElements.indexOf(model) === -1) {
                sameTypeElements.push(model);
            }
            this._elementTypeMap.set(type, sameTypeElements);
        };
        const removeFromType = (type, model) => {
            const sameTypeElements = this._elementTypeMap.get(type) || [];
            const index = sameTypeElements.indexOf(model);
            if (index !== -1) {
                sameTypeElements.splice(index, 1);
            }
        };
        const onElementsMapChange = (event, transaction) => {
            const { changes, keysChanged } = event;
            const addedElements = [];
            const deletedElements = [];
            keysChanged.forEach(id => {
                const change = changes.keys.get(id);
                const element = this.elements.getValue().get(id);
                switch (change?.action) {
                    case 'add':
                        if (element) {
                            const hasModel = this._elementModels.has(id);
                            const model = hasModel
                                ? this._elementModels.get(id)
                                : this._createElementFromYMap(element.get('type'), element.get('id'), element, {
                                    onChange: payload => this.elementUpdated.emit(payload),
                                    skipFieldInit: true,
                                });
                            !hasModel && this._elementModels.set(id, model);
                            addToType(model.model.type, model.model);
                            addedElements.push(model);
                        }
                        break;
                    case 'delete':
                        if (this._elementModels.has(id)) {
                            const { model, unmount } = this._elementModels.get(id);
                            this._elementToGroup.delete(id);
                            removeFromType(model.type, model);
                            this._elementModels.delete(id);
                            deletedElements.push({ model, unmount });
                        }
                        break;
                }
            });
            addedElements.forEach(({ mount, model }) => {
                mount();
                this.elementAdded.emit({ id: model.id, local: transaction.local });
            });
            deletedElements.forEach(({ unmount, model }) => {
                unmount();
                this.elementRemoved.emit({
                    id: model.id,
                    type: model.type,
                    model,
                    local: transaction.local,
                });
            });
        };
        elementsYMap.forEach((val, key) => {
            const model = this._createElementFromYMap(val.get('type'), val.get('id'), val, {
                onChange: payload => this.elementUpdated.emit(payload),
                skipFieldInit: true,
            });
            this._elementModels.set(key, model);
        });
        this._elementModels.forEach(({ mount, model }) => {
            addToType(model.type, model);
            mount();
        });
        elementsYMap.observe(onElementsMapChange);
        this.deleted.on(() => {
            elementsYMap.unobserve(onElementsMapChange);
        });
    }
    _propsToY(type, props) {
        const ctor = this._elementCtorMap[type];
        if (!ctor) {
            throw new Error(`Invalid element type: ${type}`);
        }
        // @ts-ignore
        return (ctor.propsToY ?? GfxPrimitiveElementModel.propsToY)(props);
    }
    _watchGroupRelationChange() {
        const addToGroup = (elementId, groupId) => {
            this._elementToGroup.set(elementId, groupId);
            this._groupToElements.set(groupId, (this._groupToElements.get(groupId) || []).concat(elementId));
        };
        const removeFromGroup = (elementId, groupId) => {
            if (this._elementToGroup.has(elementId)) {
                const group = this._elementToGroup.get(elementId);
                if (group === groupId) {
                    this._elementToGroup.delete(elementId);
                }
            }
            if (this._groupToElements.has(groupId)) {
                const elements = this._groupToElements.get(groupId);
                const index = elements.indexOf(elementId);
                if (index !== -1) {
                    elements.splice(index, 1);
                    elements.length === 0 && this._groupToElements.delete(groupId);
                }
            }
        };
        const isGroup = (element) => element instanceof GfxGroupLikeElementModel;
        this.elementModels.forEach(model => {
            if (isGroup(model)) {
                model.childIds.forEach(childId => {
                    addToGroup(childId, model.id);
                });
            }
        });
        this.elementUpdated.on(({ id, oldValues }) => {
            const element = this.getElementById(id);
            if (isGroup(element) && oldValues['childIds']) {
                oldValues['childIds'].forEach(childId => {
                    removeFromGroup(childId, id);
                });
                element.childIds.forEach(childId => {
                    addToGroup(childId, id);
                });
                if (element.childIds.length === 0) {
                    this.removeElement(id);
                }
            }
        });
        this.elementAdded.on(({ id }) => {
            const element = this.getElementById(id);
            if (isGroup(element)) {
                element.childIds.forEach(childId => {
                    addToGroup(childId, id);
                });
            }
        });
        this.elementRemoved.on(({ id, model }) => {
            if (isGroup(model)) {
                const children = [...(this._groupToElements.get(id) || [])];
                children.forEach(childId => removeFromGroup(childId, id));
            }
        });
        const disposeGroup = this.doc.slots.blockUpdated.on(({ type, id }) => {
            switch (type) {
                case 'delete': {
                    const group = this.getGroup(id);
                    if (group) {
                        // eslint-disable-next-line unicorn/prefer-dom-node-remove
                        group.removeChild(id);
                    }
                }
            }
        });
        this.deleted.on(() => {
            disposeGroup.dispose();
        });
    }
    _extendElement(ctorMap) {
        Object.assign(this._elementCtorMap, ctorMap);
    }
    _init() {
        this._initElementModels();
        this._watchGroupRelationChange();
        this.applyMiddlewares();
    }
    addElement(props) {
        if (this.doc.readonly) {
            throw new Error('Cannot add element in readonly mode');
        }
        const id = nanoid();
        // @ts-ignore
        props.id = id;
        const elementModel = this._createElementFromProps(props, {
            onChange: payload => this.elementUpdated.emit(payload),
        });
        this._elementModels.set(id, elementModel);
        this.doc.transact(() => {
            this.elements.getValue().set(id, elementModel.model.yMap);
        });
        return id;
    }
    applyMiddlewares() { }
    dispose() {
        super.dispose();
        this.elementAdded.dispose();
        this.elementRemoved.dispose();
        this.elementUpdated.dispose();
        this._elementModels.forEach(({ unmount }) => unmount());
        this._elementModels.clear();
        this.hooks.update.dispose();
        this.hooks.remove.dispose();
    }
    getElementById(id) {
        return this._elementModels.get(id)?.model ?? null;
    }
    getElementsByType(type) {
        return this._elementTypeMap.get(type) || [];
    }
    getGroup(id) {
        return this._elementToGroup.has(id)
            ? this.getElementById(this._elementToGroup.get(id))
            : null;
    }
    getGroups(id) {
        const groups = [];
        let group = this.getGroup(id);
        while (group) {
            groups.push(group);
            group = this.getGroup(group.id);
        }
        return groups;
    }
    hasElementById(id) {
        return this._elementModels.has(id);
    }
    isInMindmap(id) {
        const group = this.getGroup(id);
        return group?.type === 'mindmap';
    }
    removeElement(id) {
        if (this.doc.readonly) {
            throw new Error('Cannot remove element in readonly mode');
        }
        if (!this.hasElementById(id)) {
            return;
        }
        this.doc.transact(() => {
            const element = this.getElementById(id);
            const group = this.getGroup(id);
            if (element instanceof GfxGroupLikeElementModel) {
                element.childIds.forEach(childId => {
                    if (this.hasElementById(childId)) {
                        this.removeElement(childId);
                    }
                    else if (this.doc.hasBlock(childId)) {
                        this.doc.deleteBlock(this.doc.getBlock(childId).model);
                    }
                });
            }
            if (group) {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                group.removeChild(id);
            }
            this.elements.getValue().delete(id);
            this.hooks.remove.emit({
                id,
                model: element,
                type: element.type,
            });
        });
    }
    updateElement(id, props) {
        if (this.doc.readonly) {
            throw new Error('Cannot update element in readonly mode');
        }
        const elementModel = this.getElementById(id);
        if (!elementModel) {
            throw new Error(`Element ${id} is not found`);
        }
        this.doc.transact(() => {
            props = this._propsToY(elementModel.type, props);
            Object.entries(props).forEach(([key, value]) => {
                // @ts-ignore
                elementModel[key] = value;
            });
        });
    }
}
//# sourceMappingURL=surface-model.js.map