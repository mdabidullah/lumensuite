import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { DisposableGroup, Slot } from '@lumensuite/global/utils';
import { nanoid } from '@lumensuite/store';
import { computed, signal } from '@lit-labs/preact-signals';
import { LifeCycleWatcher } from '../extension/index.js';
import { BlockSelection, CursorSelection, SurfaceSelection, TextSelection, } from './variants/index.js';
export class SelectionManager extends LifeCycleWatcher {
    static { this.key = 'selectionManager'; }
    get _store() {
        return this.std.collection.awarenessStore;
    }
    get id() {
        return this._id;
    }
    get remoteSelections() {
        return this._remoteSelections.value;
    }
    get value() {
        return this._selections.value;
    }
    constructor(std) {
        super(std);
        this._itemAdded = (event) => {
            event.stackItem.meta.set('selection-state', this.value);
        };
        this._itemPopped = (event) => {
            const selection = event.stackItem.meta.get('selection-state');
            if (selection) {
                this.set(selection);
            }
        };
        this._jsonToSelection = (json) => {
            const ctor = this._selectionConstructors[json.type];
            if (!ctor) {
                throw new LumenSuiteError(ErrorCode.SelectionError, `Unknown selection type: ${json.type}`);
            }
            return ctor.fromJSON(json);
        };
        this._remoteSelections = signal(new Map());
        this._selectionConstructors = {};
        this._selections = signal([]);
        this.disposables = new DisposableGroup();
        this.slots = {
            changed: new Slot(),
            remoteChanged: new Slot(),
        };
        this._id = `${this.std.doc.blockCollection.id}:${nanoid()}`;
        this._setupDefaultSelections();
        this._store.awareness.on('change', (change) => {
            const all = change.updated.concat(change.added).concat(change.removed);
            const localClientID = this._store.awareness.clientID;
            const exceptLocal = all.filter(id => id !== localClientID);
            const hasLocal = all.includes(localClientID);
            if (hasLocal) {
                const localSelectionJson = this._store.getLocalSelection(this.id);
                const localSelection = localSelectionJson.map(json => {
                    return this._jsonToSelection(json);
                });
                this._selections.value = localSelection;
            }
            // Only consider remote selections from other clients
            if (exceptLocal.length > 0) {
                const map = new Map();
                this._store.getStates().forEach((state, id) => {
                    if (id === this._store.awareness.clientID)
                        return;
                    // selection id starts with the same block collection id from others clients would be considered as remote selections
                    const selection = Object.entries(state.selectionV2)
                        .filter(([key]) => key.startsWith(this.std.doc.blockCollection.id))
                        .flatMap(([_, selection]) => selection);
                    const selections = selection
                        .map(json => {
                        try {
                            return this._jsonToSelection(json);
                        }
                        catch (error) {
                            console.error('Parse remote selection failed:', id, json, error);
                            return null;
                        }
                    })
                        .filter((sel) => !!sel);
                    map.set(id, selections);
                });
                this._remoteSelections.value = map;
            }
        });
    }
    _setupDefaultSelections() {
        this.register([
            TextSelection,
            BlockSelection,
            SurfaceSelection,
            CursorSelection,
        ]);
    }
    clear(types) {
        if (types) {
            const values = this.value.filter(selection => !types.includes(selection.type));
            this.set(values);
        }
        else {
            this.set([]);
        }
    }
    create(type, ...args) {
        const ctor = this._selectionConstructors[type];
        if (!ctor) {
            throw new LumenSuiteError(ErrorCode.SelectionError, `Unknown selection type: ${type}`);
        }
        return new ctor(...args);
    }
    dispose() {
        Object.values(this.slots).forEach(slot => slot.dispose());
        this.disposables.dispose();
    }
    filter(type) {
        return this.filter$(type).value;
    }
    filter$(type) {
        return computed(() => this.value.filter((sel) => sel.is(type)));
    }
    find(type) {
        return this.find$(type).value;
    }
    find$(type) {
        return computed(() => this.value.find((sel) => sel.is(type)));
    }
    fromJSON(json) {
        const selections = json.map(json => {
            return this._jsonToSelection(json);
        });
        return this.set(selections);
    }
    getGroup(group) {
        return this.value.filter(s => s.group === group);
    }
    mounted() {
        if (this.disposables.disposed) {
            this.disposables = new DisposableGroup();
        }
        this.std.doc.history.on('stack-item-added', this._itemAdded);
        this.std.doc.history.on('stack-item-popped', this._itemPopped);
        this.disposables.add(this._store.slots.update.on(({ id }) => {
            if (id === this._store.awareness.clientID) {
                return;
            }
            this.slots.remoteChanged.emit(this.remoteSelections);
        }));
    }
    register(ctor) {
        [ctor].flat().forEach(ctor => {
            this._selectionConstructors[ctor.type] = ctor;
        });
        return this;
    }
    set(selections) {
        this._store.setLocalSelection(this.id, selections.map(s => s.toJSON()));
        this.slots.changed.emit(selections);
    }
    setGroup(group, selections) {
        const current = this.value.filter(s => s.group !== group);
        this.set([...current, ...selections]);
    }
    unmounted() {
        this.std.doc.history.off('stack-item-added', this._itemAdded);
        this.std.doc.history.off('stack-item-popped', this._itemPopped);
        this.slots.changed.dispose();
        this.disposables.dispose();
        this.clear();
    }
    update(fn) {
        const selections = fn(this.value);
        this.set(selections);
    }
}
//# sourceMappingURL=manager.js.map