import type { Doc } from '@blocksuite/store';
import type { ExtensionType } from '../extension/index.js';
import { BlockStdScope } from '../scope/index.js';
import { ShadowlessElement } from '../view/index.js';
declare const TestEditorContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("../view/index.js").DisposableClass>;
export declare class TestEditorContainer extends TestEditorContainer_base {
    private _std;
    get std(): BlockStdScope;
    connectedCallback(): void;
    protected render(): import("lit").TemplateResult<1>;
    accessor doc: Doc;
    accessor specs: ExtensionType[];
}
export {};
//# sourceMappingURL=test-editor.d.ts.map