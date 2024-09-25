import type { AffineFormatBarWidget } from './format-bar.js';
import { MenuContext } from '../../configs/toolbar.js';
export declare class FormatBarContext extends MenuContext {
    toolbar: AffineFormatBarWidget;
    get doc(): import("@lumensuite/store").Doc;
    get host(): import("@lumensuite/block-std").EditorHost;
    get selectedBlockModels(): import("@lumensuite/store").BlockModel<object, object & {}>[];
    get std(): import("@lumensuite/block-std").BlockStdScope;
    constructor(toolbar: AffineFormatBarWidget);
    isEmpty(): boolean;
    isMultiple(): boolean;
    isSingle(): boolean;
}
//# sourceMappingURL=context.d.ts.map