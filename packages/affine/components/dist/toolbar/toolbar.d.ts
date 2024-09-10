import { LitElement } from 'lit';
declare const EditorToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EditorToolbar extends EditorToolbar_base {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-toolbar': EditorToolbar;
    }
}
export {};
//# sourceMappingURL=toolbar.d.ts.map