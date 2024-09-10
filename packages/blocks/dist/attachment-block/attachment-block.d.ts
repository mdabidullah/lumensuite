import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import { HoverController } from '@blocksuite/affine-components/hover';
import { type AttachmentBlockModel } from '@blocksuite/affine-model';
import type { AttachmentBlockService } from './attachment-service.js';
export declare class AttachmentBlockComponent extends CaptionedBlockComponent<AttachmentBlockModel, AttachmentBlockService> {
    static styles: import("lit").CSSResult;
    protected _isDragging: boolean;
    protected _isResizing: boolean;
    protected _isSelected: boolean;
    protected _whenHover: HoverController | null;
    protected containerStyleMap: import("lit/async-directive.js").DirectiveResult<typeof import("lit/directives/style-map.js").StyleMapDirective>;
    copy: () => void;
    download: () => void;
    open: () => void;
    refreshData: () => void;
    protected get embedView(): import("lit").TemplateResult<1> | null | undefined;
    private _selectBlock;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected onClick(event: MouseEvent): void;
    protected onDoubleClick(event: MouseEvent): void;
    renderBlock(): import("lit").TemplateResult<1>;
    protected accessor _showOverlay: boolean;
    accessor allowEmbed: boolean;
    accessor blobUrl: string | undefined;
    accessor downloading: boolean;
    accessor error: boolean;
    accessor loading: boolean;
    accessor useCaptionEditor: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-attachment': AttachmentBlockComponent;
    }
}
//# sourceMappingURL=attachment-block.d.ts.map