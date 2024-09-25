import type { ImageBlockModel } from '@lumensuite/affine-model';
import { ShadowlessElement } from '@lumensuite/block-std';
export declare const SURFACE_IMAGE_CARD_WIDTH = 220;
export declare const SURFACE_IMAGE_CARD_HEIGHT = 122;
export declare const NOTE_IMAGE_CARD_WIDTH = 752;
export declare const NOTE_IMAGE_CARD_HEIGHT = 78;
declare const ImageBlockFallbackCard_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class ImageBlockFallbackCard extends ImageBlockFallbackCard_base {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor error: boolean;
    accessor loading: boolean;
    accessor mode: 'page' | 'edgeless';
    accessor model: ImageBlockModel;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-image-fallback-card': ImageBlockFallbackCard;
    }
}
export {};
//# sourceMappingURL=image-block-fallback.d.ts.map