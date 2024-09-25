import type { EdgelessTextBlockModel } from '@lumensuite/affine-model';
import { GfxBlockComponent } from '@lumensuite/block-std';
import type { EdgelessRootBlockComponent, EdgelessRootService } from '../root-block/index.js';
import type { EdgelessTextBlockService } from './edgeless-text-service.js';
export declare const EDGELESS_TEXT_BLOCK_MIN_WIDTH = 50;
export declare const EDGELESS_TEXT_BLOCK_MIN_HEIGHT = 50;
export declare class EdgelessTextBlockComponent extends GfxBlockComponent<EdgelessTextBlockModel, EdgelessTextBlockService> {
    static styles: import("lit").CSSResult;
    private _horizontalResizing;
    private _resizeObserver;
    get dragMoving(): boolean;
    get parentComponent(): EdgelessRootBlockComponent;
    get rootService(): EdgelessRootService;
    private _initDragEffect;
    private _updateH;
    private _updateW;
    checkWidthOverflow(width: number): boolean;
    connectedCallback(): void;
    firstUpdated(props: Map<string, unknown>): void;
    getRenderingRect(): {
        x: number;
        y: number;
        w: number | undefined;
        h: number;
        rotate: number;
        zIndex: string;
    };
    renderGfxBlock(): import("lit").TemplateResult<1>;
    renderPageContent(): import("lit").TemplateResult<1>;
    tryFocusEnd(): void;
    private accessor _editing;
    private accessor _textContainer;
    accessor childrenContainer: HTMLDivElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-text': EdgelessTextBlockComponent;
    }
}
//# sourceMappingURL=edgeless-text-block.d.ts.map