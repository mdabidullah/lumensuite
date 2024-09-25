import type { EmbedHtmlModel, EmbedHtmlStyles } from '@lumensuite/affine-model';
import { type StyleInfo } from 'lit/directives/style-map.js';
import type { EmbedHtmlBlockService } from './embed-html-service.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/index.js';
import './components/fullscreen-toolbar.js';
export declare class EmbedHtmlBlockComponent extends EmbedBlockComponent<EmbedHtmlModel, EmbedHtmlBlockService> {
    static styles: import("lit").CSSResult;
    _cardStyle: (typeof EmbedHtmlStyles)[number];
    protected _isDragging: boolean;
    protected _isResizing: boolean;
    close: () => void;
    protected embedHtmlStyle: StyleInfo;
    open: () => void;
    refreshData: () => void;
    private _handleDoubleClick;
    private _selectBlock;
    protected _handleClick(event: MouseEvent): void;
    connectedCallback(): void;
    renderBlock(): unknown;
    protected accessor _isSelected: boolean;
    protected accessor _showOverlay: boolean;
    accessor iframeWrapper: HTMLDivElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-html-block': EmbedHtmlBlockComponent;
    }
}
//# sourceMappingURL=embed-html-block.d.ts.map