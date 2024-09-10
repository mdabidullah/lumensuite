import type { EditorHost } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
import { ShadowlessElement } from '@blocksuite/block-std';
declare const DocTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DocTitle extends DocTitle_base {
    static styles: import("lit").CSSResult;
    private _onTitleKeyDown;
    private _updateTitleInMeta;
    private get _inlineEditor();
    private get _pageRoot();
    private get _rootModel();
    private get _viewport();
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _isComposing;
    private accessor _isReadonly;
    private accessor _richTextElement;
    accessor doc: Doc;
}
export declare function getDocTitleByEditorHost(editorHost: EditorHost): DocTitle | null;
declare global {
    interface HTMLElementTagNameMap {
        'doc-title': DocTitle;
    }
}
export {};
//# sourceMappingURL=doc-title.d.ts.map