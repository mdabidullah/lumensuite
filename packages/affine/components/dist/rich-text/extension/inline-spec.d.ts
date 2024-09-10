import type { ExtensionType } from '@blocksuite/block-std';
import { type ServiceIdentifier, type ServiceProvider } from '@blocksuite/global/di';
import type { AffineTextAttributes, InlineSpecs } from './type.js';
export declare const InlineSpecIdentifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>> & ((variant: import("@blocksuite/global/di").ServiceVariant) => ServiceIdentifier<InlineSpecs<AffineTextAttributes>>);
export declare function InlineSpecExtension(name: string, getSpec: (provider: ServiceProvider) => InlineSpecs<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>>;
};
export declare function InlineSpecExtension(spec: InlineSpecs<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>>;
};
//# sourceMappingURL=inline-spec.d.ts.map