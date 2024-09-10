import type { GfxCompatibleProps } from '@blocksuite/affine-model';
import type { GfxBlockElementModel } from '@blocksuite/block-std/gfx';
import type { BlockModel } from '@blocksuite/store';
import type { TemplateResult } from 'lit';
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import { type BlockService, type GfxBlockComponent } from '@blocksuite/block-std';
import { type StyleInfo } from 'lit/directives/style-map.js';
import { type EmbedCardStyle } from '../utils/index.js';
export declare class EmbedBlockComponent<Model extends BlockModel<GfxCompatibleProps> = BlockModel<GfxCompatibleProps>, Service extends BlockService = BlockService, WidgetName extends string = string> extends CaptionedBlockComponent<Model, Service, WidgetName> {
    static styles: import("lit").CSSResult;
    private _dragHandleOption;
    private _fetchAbortController;
    protected _cardStyle: EmbedCardStyle;
    protected _height: number;
    protected _width: number;
    protected embedContainerStyle: StyleInfo;
    renderEmbed: (content: () => TemplateResult) => TemplateResult<1>;
    get fetchAbortController(): AbortController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected accessor blockContainerStyles: StyleInfo | undefined;
    protected accessor embedBlock: HTMLDivElement;
    accessor showBlockSelection: boolean;
    accessor useCaptionEditor: boolean;
    accessor useZeroWidth: boolean;
}
export declare function toEdgelessEmbedBlock<Model extends GfxBlockElementModel<GfxCompatibleProps>, Service extends BlockService, WidgetName extends string, B extends typeof EmbedBlockComponent<Model, Service, WidgetName>>(block: B): B & {
    new (...args: any[]): GfxBlockComponent;
};
//# sourceMappingURL=embed-block-element.d.ts.map