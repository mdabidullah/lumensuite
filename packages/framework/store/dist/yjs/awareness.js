import { Slot } from '@blocksuite/global/utils';
import { signal } from '@preact/signals-core';
import clonedeep from 'lodash.clonedeep';
import merge from 'lodash.merge';
export class AwarenessStore {
    constructor(awareness, defaultFlags) {
        this._onAwarenessChange = (diff) => {
            this._flags.value = this.awareness.getLocalState()?.flags ?? {};
            const { added, removed, updated } = diff;
            const states = this.awareness.getStates();
            added.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'add',
                    state: states.get(id),
                });
            });
            updated.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'update',
                    state: states.get(id),
                });
            });
            removed.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'remove',
                });
            });
        };
        this.slots = {
            update: new Slot(),
        };
        this._flags = signal(defaultFlags);
        this.awareness = awareness;
        this.awareness.on('change', this._onAwarenessChange);
        this.awareness.setLocalStateField('selectionV2', {});
        this._initFlags(defaultFlags);
    }
    _initFlags(defaultFlags) {
        const upstreamFlags = this.awareness.getLocalState()?.flags;
        const flags = clonedeep(defaultFlags);
        if (upstreamFlags) {
            merge(flags, upstreamFlags);
        }
        this.awareness.setLocalStateField('flags', flags);
    }
    destroy() {
        if (this.awareness) {
            this.awareness.off('change', this._onAwarenessChange);
            this.slots.update.dispose();
        }
    }
    getFlag(field) {
        return this._flags.value[field];
    }
    getLocalSelection(selectionManagerId) {
        return ((this.awareness.getLocalState()?.selectionV2 ?? {})[selectionManagerId] ??
            []);
    }
    getStates() {
        return this.awareness.getStates();
    }
    isReadonly(blockCollection) {
        const rd = this.getFlag('readonly');
        if (rd && typeof rd === 'object') {
            return Boolean(rd[blockCollection.id]);
        }
        else {
            return false;
        }
    }
    setFlag(field, value) {
        const oldFlags = this.awareness.getLocalState()?.flags ?? {};
        this.awareness.setLocalStateField('flags', { ...oldFlags, [field]: value });
    }
    setLocalSelection(selectionManagerId, selection) {
        const oldSelection = this.awareness.getLocalState()?.selectionV2 ?? {};
        this.awareness.setLocalStateField('selectionV2', {
            ...oldSelection,
            [selectionManagerId]: selection,
        });
    }
    setReadonly(blockCollection, value) {
        const flags = this.getFlag('readonly') ?? {};
        this.setFlag('readonly', {
            ...flags,
            [blockCollection.id]: value,
        });
    }
}
//# sourceMappingURL=awareness.js.map