import type { RichText } from '@lumensuite/affine-components/rich-text';
import type { TextElementModel } from '@lumensuite/affine-model';
import '@lumensuite/affine-components/rich-text';
import { ShadowlessElement } from '@lumensuite/block-std';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessTextEditor_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessTextEditor extends EdgelessTextEditor_base {
    static BORDER_WIDTH: number;
    static PADDING_HORIZONTAL: number;
    static PADDING_VERTICAL: number;
    static PLACEHOLDER_TEXT: string;
    static styles: import("lit").CSSResult;
    private _isComposition;
    private _keeping;
    private _updateRect;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@lumensuite/inline/inline-editor").InlineRootElement<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    connectedCallback(): void;
    firstUpdated(): void;
    getContainerOffset(): string;
    getCoordsOnCenterAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getCoordsOnLeftAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getCoordsOnRightAlign(rect: {
        w: number;
        h: number;
        r: number;
        x: number;
        y: number;
    }, w1: number, h1: number): {
        x: number;
        y: number;
    };
    getUpdateComplete(): Promise<boolean>;
    getVisualPosition(element: TextElementModel): import("@lumensuite/global/utils").IVec;
    render(): import("lit").TemplateResult<1>;
    setKeeping(keeping: boolean): void;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor element: TextElementModel;
    accessor richText: RichText;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-text-editor': EdgelessTextEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-text-editor.d.ts.map