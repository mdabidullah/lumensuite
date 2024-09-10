import type { RichText } from '@blocksuite/affine-components/rich-text';
import { FrameBlockModel } from '@blocksuite/affine-model';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import { type FrameBlockComponent } from '../../../../frame-block/index.js';
declare const EdgelessFrameTitleEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameTitleEditor extends EdgelessFrameTitleEditor_base {
    static styles: import("lit").CSSResult;
    get editorHost(): import("@blocksuite/block-std").EditorHost;
    get frameBlock(): FrameBlockComponent | null;
    get inlineEditor(): import("@blocksuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@blocksuite/inline/inline-editor").InlineRootElement<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>;
    private _unmount;
    connectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frameModel: FrameBlockModel;
    accessor richText: RichText;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-title-editor': EdgelessFrameTitleEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-frame-title-editor.d.ts.map