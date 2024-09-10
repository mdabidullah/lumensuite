import type { ExtensionType } from '@blocksuite/block-std';
import { SpecBuilder } from './spec-builder.js';
export declare class SpecProvider {
    static instance: SpecProvider;
    private specMap;
    private constructor();
    static getInstance(): SpecProvider;
    addSpec(id: string, spec: ExtensionType[]): void;
    clearSpec(id: string): void;
    extendSpec(id: string, newSpec: ExtensionType[]): void;
    getSpec(id: string): SpecBuilder;
    hasSpec(id: string): boolean;
}
//# sourceMappingURL=spec-provider.d.ts.map