import type { BlockStdScope } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
import { FrameBlockModel } from '@blocksuite/affine-model';
import { GfxBlockComponent, ShadowlessElement } from '@blocksuite/block-std';
import type { EdgelessRootService } from '../root-block/index.js';
export declare const frameTitleStyleVars: {
    nestedFrameOffset: number;
    height: number;
    fontSize: number;
};
declare const EdgelessFrameTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameTitle extends EdgelessFrameTitle_base {
    static styles: import("lit").CSSResult;
    private _cachedHeight;
    private _cachedWidth;
    get colors(): {
        background: string;
        text: string;
    };
    get gfx(): import("@blocksuite/block-std/gfx").GfxController;
    get rootService(): EdgelessRootService;
    private _isInsideFrame;
    private _updateFrameTitleSize;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: Map<string, unknown>): void;
    private accessor _editing;
    private accessor _frameTitle;
    private accessor _frameTitleEl;
    private accessor _isNavigator;
    private accessor _nestedFrame;
    private accessor _xywh;
    private accessor _zoom;
    accessor doc: Doc;
    accessor model: FrameBlockModel;
    accessor std: BlockStdScope;
}
export declare class FrameBlockComponent extends GfxBlockComponent<FrameBlockModel> {
    get rootService(): EdgelessRootService;
    connectedCallback(): void;
    firstUpdated(): void;
    renderGfxBlock(): import("lit").TemplateResult<1>;
    toZIndex(): string;
    private accessor _isNavigator;
    accessor showBorder: boolean;
    accessor titleElement: EdgelessFrameTitle | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-frame': FrameBlockComponent;
    }
}
export {};
//# sourceMappingURL=frame-block.d.ts.map