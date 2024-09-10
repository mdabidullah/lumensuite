import { DEFAULT_COLUMN_WIDTH } from '../../../view-presets/table/consts.js';
export class DataSourceBase {
    constructor() {
        this.context = new Map();
    }
    get detailSlots() {
        return {};
    }
    getContext(key) {
        return this.context.get(key);
    }
    propertyGetDefaultWidth(_propertyId) {
        return DEFAULT_COLUMN_WIDTH;
    }
    propertyGetReadonly(_propertyId) {
        return false;
    }
    setContext(key, value) {
        this.context.set(key, value);
    }
}
//# sourceMappingURL=base.js.map