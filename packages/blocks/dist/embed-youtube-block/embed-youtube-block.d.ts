import type { EmbedYoutubeModel, EmbedYoutubeStyles } from '@lumensuite/affine-model';
import type { EmbedYoutubeBlockService } from './embed-youtube-service.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/embed-block-element.js';
export declare class EmbedYoutubeBlockComponent extends EmbedBlockComponent<EmbedYoutubeModel, EmbedYoutubeBlockService> {
    static styles: import("lit").CSSResult;
    _cardStyle: (typeof EmbedYoutubeStyles)[number];
    protected _isDragging: boolean;
    protected _isResizing: boolean;
    open: () => void;
    refreshData: () => void;
    private _handleDoubleClick;
    private _selectBlock;
    protected _handleClick(event: MouseEvent): void;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
    protected accessor _isSelected: boolean;
    private accessor _showImage;
    protected accessor _showOverlay: boolean;
    accessor loading: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-youtube-block': EmbedYoutubeBlockComponent;
    }
}
//# sourceMappingURL=embed-youtube-block.d.ts.map