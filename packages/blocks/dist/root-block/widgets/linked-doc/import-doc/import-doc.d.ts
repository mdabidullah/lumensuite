import { type DocCollection } from '@blocksuite/store';
import { LitElement, type PropertyValues } from 'lit';
import '../../../../_common/components/loader.js';
export type OnSuccessHandler = (pageIds: string[], options: {
    isWorkspaceFile: boolean;
    importedCount: number;
}) => void;
export type OnFailHandler = (message: string) => void;
export declare function importMarkDown(collection: DocCollection, text: string, fileName?: string): Promise<string | undefined>;
export declare function importHtml(collection: DocCollection, text: string): Promise<string | undefined>;
export declare function importNotion(collection: DocCollection, file: File): Promise<{
    entryId: string;
    pageIds: string[];
    isWorkspaceFile: boolean;
    hasMarkdown: boolean;
}>;
declare const ImportDoc_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ImportDoc extends ImportDoc_base {
    private collection;
    private onSuccess?;
    private onFail?;
    private abortController;
    static styles: import("lit").CSSResult;
    constructor(collection: DocCollection, onSuccess?: OnSuccessHandler | undefined, onFail?: OnFailHandler | undefined, abortController?: AbortController);
    private _importHtml;
    private _importMarkDown;
    private _importNotion;
    private _onCloseClick;
    private _onFail;
    private _onImportSuccess;
    private _onMouseDown;
    private _onMouseMove;
    private _onMouseUp;
    private _openLearnImportLink;
    render(): import("lit").TemplateResult<1>;
    updated(changedProps: PropertyValues): void;
    accessor _loading: boolean;
    accessor _startX: number;
    accessor _startY: number;
    accessor containerEl: HTMLElement;
    accessor x: number;
    accessor y: number;
}
export {};
//# sourceMappingURL=import-doc.d.ts.map