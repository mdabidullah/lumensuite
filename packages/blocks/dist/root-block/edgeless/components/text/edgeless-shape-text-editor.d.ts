import type { RichText } from '@lumensuite/affine-components/rich-text';
import type { ShapeElementModel } from '@lumensuite/affine-model';
import { ShadowlessElement } from '@lumensuite/block-std';
import { nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessShapeTextEditor_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessShapeTextEditor extends EdgelessShapeTextEditor_base {
    private _keeping;
    private _lastXYWH;
    private _resizeObserver;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineEditorContainer(): import("@lumensuite/inline/inline-editor").InlineRootElement<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    private _initMindmapKeyBindings;
    private _unmount;
    private _updateElementWH;
    connectedCallback(): void;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    setKeeping(keeping: boolean): void;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor element: ShapeElementModel;
    accessor mountEditor: ((element: ShapeElementModel, edgeless: EdgelessRootBlockComponent) => void) | undefined;
    accessor richText: RichText;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-text-editor': EdgelessShapeTextEditor;
    }
}
export {};
//# sourceMappingURL=edgeless-shape-text-editor.d.ts.map