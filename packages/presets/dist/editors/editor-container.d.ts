import type { BlockModel, Doc } from '@lumensuite/store';
import { BlockStdScope, EditorHost, type ExtensionType, ShadowlessElement } from '@lumensuite/block-std';
import { type AbstractEditor, type DocMode } from '@lumensuite/blocks';
import '../fragments/doc-title/doc-title.js';
declare const AffineEditorContainer_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class AffineEditorContainer extends AffineEditorContainer_base implements AbstractEditor {
    static styles: import("lit").CSSResult;
    private _doc;
    private _edgelessSpecs;
    private _editorTemplate;
    private _forwardRef;
    private _mode;
    private _pageSpecs;
    private _specs;
    private _std;
    /**
     * @deprecated need to refactor
     */
    slots: AbstractEditor['slots'];
    get doc(): Doc;
    set doc(doc: Doc);
    set edgelessSpecs(specs: ExtensionType[]);
    get edgelessSpecs(): ExtensionType[];
    get host(): EditorHost | null;
    get mode(): DocMode;
    set mode(mode: DocMode);
    set pageSpecs(specs: ExtensionType[]);
    get pageSpecs(): ExtensionType[];
    get rootModel(): BlockModel;
    get std(): BlockStdScope;
    /**
     * @deprecated need to refactor
     */
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    switchEditor(mode: DocMode): void;
    /**
     * @deprecated need to refactor
     */
    updated(changedProperties: Map<string, unknown>): void;
    /** @deprecated unreliable since edgelessSpecs can be overridden */
    private accessor _edgelessRoot;
    /** @deprecated unreliable since pageSpecs can be overridden */
    private accessor _pageRoot;
    accessor autofocus: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-editor-container': AffineEditorContainer;
    }
}
export {};
//# sourceMappingURL=editor-container.d.ts.map