import { type ExtensionType, LifeCycleWatcher } from '@lumensuite/block-std';
import type { FontConfig } from './config.js';
export declare class FontLoaderService extends LifeCycleWatcher {
    static readonly key = "font-loader";
    readonly fontFaces: FontFace[];
    get ready(): Promise<FontFace[]>;
    load(fonts: FontConfig[]): void;
    mounted(): void;
    unmounted(): void;
}
export declare const FontConfigIdentifier: import("@lumensuite/global/di").ServiceIdentifier<FontConfig[]> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<FontConfig[]>);
export declare const FontConfigExtension: (fontConfig: FontConfig[]) => ExtensionType;
//# sourceMappingURL=font-loader-service.d.ts.map