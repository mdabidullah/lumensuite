import type { RichText } from '@lumensuite/affine-components/rich-text';
import type { ConnectorElementModel } from '@lumensuite/affine-model';
import '@lumensuite/affine-components/rich-text';
import { ShadowlessElement } from '@lumensuite/block-std';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessConnectorLabelEditor_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessConnectorLabelEditor extends EdgelessConnectorLabelEditor_base {
    static styles: import("lit").CSSResult;
    private _isComposition;
    private _keeping;
    private _resizeObserver;
    private _updateLabelRect;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@lumensuite/inline/inline-editor").InlineRootElement<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
    setKeeping(keeping: boolean): void;
    accessor connector: ConnectorElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor richText: RichText;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-label-editor': EdgelessConnectorLabelEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-connector-label-editor.d.ts.map