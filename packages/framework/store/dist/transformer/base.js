import { internalPrimitives } from '../schema/index.js';
import { fromJSON, toJSON } from './json.js';
export class BaseBlockTransformer {
    constructor() {
        this._internal = internalPrimitives;
    }
    _propsFromSnapshot(propsJson) {
        return Object.fromEntries(Object.entries(propsJson).map(([key, value]) => {
            return [key, fromJSON(value)];
        }));
    }
    _propsToSnapshot(model) {
        return Object.fromEntries(model.keys.map(key => {
            const value = model[key];
            return [key, toJSON(value)];
        }));
    }
    fromSnapshot({ json, }) {
        const { flavour, id, version, props: _props } = json;
        const props = this._propsFromSnapshot(_props);
        return {
            id,
            flavour,
            version: version ?? -1,
            props,
        };
    }
    toSnapshot({ model, }) {
        const { id, flavour, version } = model;
        const props = this._propsToSnapshot(model);
        return {
            id,
            flavour,
            version,
            props,
        };
    }
}
//# sourceMappingURL=base.js.map