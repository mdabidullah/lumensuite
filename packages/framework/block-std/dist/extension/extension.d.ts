import type { Container } from '@lumensuite/global/di';
/**
 * Generic extension.
 * Extensions are used to set up the dependency injection container.
 * In most cases, you won't need to use this class directly.
 * We provide helper classes like `CommandExtension` and `BlockViewExtension` to make it easier to create extensions.
 */
export declare abstract class Extension {
    static setup(_di: Container): void;
}
export interface ExtensionType {
    setup(di: Container): void;
}
//# sourceMappingURL=extension.d.ts.map