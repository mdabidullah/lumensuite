import type { EmbedLoomModel, EmbedLoomStyles } from '@blocksuite/affine-model';
import type { EmbedLoomBlockService } from './embed-loom-service.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/embed-block-element.js';
export declare class EmbedLoomBlockComponent extends EmbedBlockComponent<EmbedLoomModel, EmbedLoomBlockService> {
    static styles: import("lit").CSSResult;
    _cardStyle: (typeof EmbedLoomStyles)[number];
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
    accessor loading: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-loom-block': EmbedLoomBlockComponent;
    }
}
//# sourceMappingURL=embed-loom-block.d.ts.map