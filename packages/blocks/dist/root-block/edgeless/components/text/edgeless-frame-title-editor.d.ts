import type { RichText } from '@lumensuite/affine-components/rich-text';
import { FrameBlockModel } from '@lumensuite/affine-model';
import { ShadowlessElement } from '@lumensuite/block-std';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import { type FrameBlockComponent } from '../../../../frame-block/index.js';
declare const EdgelessFrameTitleEditor_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessFrameTitleEditor extends EdgelessFrameTitleEditor_base {
    static styles: import("lit").CSSResult;
    get editorHost(): import("@lumensuite/block-std").EditorHost;
    get frameBlock(): FrameBlockComponent | null;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@lumensuite/inline/inline-editor").InlineRootElement<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
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