import type { BlockModel } from '@blocksuite/store';
import { BlockComponent, type BlockService } from '@blocksuite/block-std';
import { type StyleInfo } from 'lit/directives/style-map.js';
import type { BlockCaptionEditor } from './block-caption.js';
export declare class CaptionedBlockComponent<Model extends BlockModel = BlockModel, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockComponent<Model, Service, WidgetName> {
    get captionEditor(): BlockCaptionEditor<BlockModel<import("./block-caption.js").BlockCaptionProps, import("./block-caption.js").BlockCaptionProps & {
        caption$: import("@preact/signals-core").Signal<string | null | undefined>;
    }>> | undefined;
    constructor();
    private _renderWithWidget;
    private accessor _captionEditorRef;
    protected accessor blockContainerStyles: StyleInfo | undefined;
    protected accessor showBlockSelection: boolean;
    protected accessor useCaptionEditor: boolean;
    protected accessor useZeroWidth: boolean;
}
//# sourceMappingURL=captioned-block-component.d.ts.map