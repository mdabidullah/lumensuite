import type { RichText } from '@lumensuite/affine-components/rich-text';
import type { GroupElementModel } from '@lumensuite/affine-model';
import { ShadowlessElement } from '@lumensuite/block-std';
import { nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessGroupTitleEditor_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessGroupTitleEditor extends EdgelessGroupTitleEditor_base {
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@lumensuite/inline/inline-editor").InlineRootElement<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    private _unmount;
    connectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor group: GroupElementModel;
    accessor richText: RichText;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-group-title-editor': EdgelessGroupTitleEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-group-title-editor.d.ts.map