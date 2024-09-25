import type { ExtensionType } from '@lumensuite/block-std';
import { type ServiceIdentifier, type ServiceProvider } from '@lumensuite/global/di';
import type { AffineTextAttributes, InlineSpecs } from './type.js';
export declare const InlineSpecIdentifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>> & ((variant: import("@lumensuite/global/di").ServiceVariant) => ServiceIdentifier<InlineSpecs<AffineTextAttributes>>);
export declare function InlineSpecExtension(name: string, getSpec: (provider: ServiceProvider) => InlineSpecs<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>>;
};
export declare function InlineSpecExtension(spec: InlineSpecs<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineSpecs<AffineTextAttributes>>;
};
//# sourceMappingURL=inline-spec.d.ts.map