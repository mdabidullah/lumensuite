import { assertExists } from '@lumensuite/global/utils';
import { SpecBuilder } from './spec-builder.js';
export class SpecProvider {
    constructor() {
        this.specMap = new Map();
    }
    static getInstance() {
        if (!SpecProvider.instance) {
            SpecProvider.instance = new SpecProvider();
        }
        return SpecProvider.instance;
    }
    addSpec(id, spec) {
        if (!this.specMap.has(id)) {
            this.specMap.set(id, spec);
        }
    }
    clearSpec(id) {
        this.specMap.delete(id);
    }
    extendSpec(id, newSpec) {
        const existingSpec = this.specMap.get(id);
        if (!existingSpec) {
            console.error(`Spec not found for ${id}`);
            return;
        }
        this.specMap.set(id, [...existingSpec, ...newSpec]);
    }
    getSpec(id) {
        const spec = this.specMap.get(id);
        assertExists(spec, `Spec not found for ${id}`);
        return new SpecBuilder(spec);
    }
    hasSpec(id) {
        return this.specMap.has(id);
    }
}
//# sourceMappingURL=spec-provider.js.map