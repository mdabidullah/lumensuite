import * as Y from 'yjs';
import { NATIVE_UNIQ_IDENTIFIER } from '../consts.js';
export class Boxed {
    static { this.from = (map, onChange) => {
        return new Boxed(map.get('value'), onChange);
    }; }
    static { this.is = (value) => {
        return (value instanceof Y.Map && value.get('type') === NATIVE_UNIQ_IDENTIFIER);
    }; }
    get yMap() {
        return this._map;
    }
    constructor(value, onChange) {
        this.getValue = () => {
            return this._map.get('value');
        };
        this.setValue = (value) => {
            return this._map.set('value', value);
        };
        this._onChange = onChange;
        if (value instanceof Y.Map &&
            value.get('type') === NATIVE_UNIQ_IDENTIFIER) {
            this._map = value;
        }
        else {
            this._map = new Y.Map();
            this._map.set('type', NATIVE_UNIQ_IDENTIFIER);
            this._map.set('value', value);
        }
        this._map.observeDeep(() => {
            this._onChange?.(this.getValue());
        });
    }
    bind(onChange) {
        this._onChange = onChange;
    }
}
//# sourceMappingURL=boxed.js.map