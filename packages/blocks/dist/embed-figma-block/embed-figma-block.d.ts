import type { EmbedFigmaModel, EmbedFigmaStyles } from '@blocksuite/affine-model';
import type { EmbedFigmaBlockService } from './embed-figma-service.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/embed-block-element.js';
export declare class EmbedFigmaBlockComponent extends EmbedBlockComponent<EmbedFigmaModel, EmbedFigmaBlockService> {
    static styles: import("lit").CSSResult;
    _cardStyle: (typeof EmbedFigmaStyles)[number];
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
    protected accessor _showOverlay: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-figma-block': EmbedFigmaBlockComponent;
    }
}
//# sourceMappingURL=embed-figma-block.d.ts.map