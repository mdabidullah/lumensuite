import type { DocCollection } from '@lumensuite/store';
import { ImportDoc, type OnFailHandler, type OnSuccessHandler } from './import-doc.js';
export { importHtml, importMarkDown, importNotion } from './import-doc.js';
export declare function showImportModal({ collection, onSuccess, onFail, container, abortController, }: {
    collection: DocCollection;
    onSuccess?: OnSuccessHandler;
    onFail?: OnFailHandler;
    multiple?: boolean;
    container?: HTMLElement;
    abortController?: AbortController;
}): ImportDoc;
//# sourceMappingURL=index.d.ts.map