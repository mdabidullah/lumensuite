import type { Doc } from '@blocksuite/store';
import { BlockStdScope, EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
declare const PageEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class PageEditor extends PageEditor_base {
    static styles: import("lit").CSSResult;
    get host(): EditorHost | null;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): typeof nothing | import("lit").TemplateResult<1>;
    willUpdate(changedProperties: Map<string | number | symbol, unknown>): void;
    accessor doc: Doc;
    accessor hasViewport: boolean;
    accessor specs: import("@blocksuite/block-std").ExtensionType[];
    accessor std: BlockStdScope;
}
declare global {
    interface HTMLElementTagNameMap {
        'page-editor': PageEditor;
    }
}
export {};
//# sourceMappingURL=page-editor.d.ts.map