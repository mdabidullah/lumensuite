import type { Doc } from '@blocksuite/store';
import { BlockStdScope, EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import { nothing, type TemplateResult } from 'lit';
declare const LumenEditor_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LumenEditor extends LumenEditor_base {
    static styles: import("lit").CSSResult;
    get host(): EditorHost | null;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): typeof nothing | TemplateResult<1>;
    willUpdate(changedProperties: Map<string | number | symbol, unknown>): void;
    accessor doc: Doc;
    accessor editor: TemplateResult;
    accessor specs: import("@blocksuite/block-std").ExtensionType[];
    accessor std: BlockStdScope;
}
declare global {
    interface HTMLElementTagNameMap {
        'lumen-editor': LumenEditor;
    }
}
export {};
//# sourceMappingURL=lumen-editor.d.ts.map