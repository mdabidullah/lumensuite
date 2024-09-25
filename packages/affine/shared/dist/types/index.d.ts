import type { EmbedCardStyle } from '@lumensuite/affine-model';
import type { BlockComponent } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
export interface EditingState {
    element: BlockComponent;
    model: BlockModel;
    rect: DOMRect;
}
export declare enum LassoMode {
    FreeHand = 0,
    Polygonal = 1
}
export type NoteChildrenFlavour = 'affine:paragraph' | 'affine:list' | 'affine:code' | 'affine:divider' | 'affine:database' | 'affine:data-view' | 'affine:image' | 'affine:bookmark' | 'affine:attachment' | 'affine:surface-ref';
export interface Viewport {
    left: number;
    top: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    scrollHeight: number;
    clientWidth: number;
    clientHeight: number;
}
export type ExtendedModel = BlockModel & Record<string, any>;
export type EmbedOptions = {
    flavour: string;
    urlRegex: RegExp;
    styles: EmbedCardStyle[];
    viewType: 'card' | 'embed';
};
//# sourceMappingURL=index.d.ts.map