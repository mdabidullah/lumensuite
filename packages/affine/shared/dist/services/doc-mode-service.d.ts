import type { DocMode } from '@lumensuite/affine-model';
import type { BlockStdScope } from '@lumensuite/block-std';
import type { Container } from '@lumensuite/global/di';
import { Extension } from '@lumensuite/block-std';
import { type Disposable } from '@lumensuite/global/utils';
export interface DocModeProvider {
    /**
     * Set the primary mode of the doc.
     * This would not affect the current editor mode.
     * If you want to switch the editor mode, use `setEditorMode` instead.
     * @param mode - The mode to set.
     * @param docId - The id of the doc.
     */
    setPrimaryMode: (mode: DocMode, docId: string) => void;
    /**
     * Get the primary mode of the doc.
     * Normally, it would be used to query the mode of other doc.
     * @param docId - The id of the doc.
     * @returns The primary mode of the document.
     */
    getPrimaryMode: (docId: string) => DocMode;
    /**
     * Toggle the primary mode of the doc.
     * @param docId - The id of the doc.
     * @returns The new primary mode of the doc.
     */
    togglePrimaryMode: (docId: string) => DocMode;
    /**
     * Subscribe to changes in the primary mode of the doc.
     * For example:
     * Embed-linked-doc-block will subscribe to the primary mode of the linked doc,
     * and will display different UI according to the primary mode of the linked doc.
     * @param handler - The handler to call when the primary mode of certain doc changes.
     * @param docId - The id of the doc.
     * @returns A disposable to stop the subscription.
     */
    onPrimaryModeChange: (handler: (mode: DocMode) => void, docId: string) => Disposable;
    /**
     * Set the editor mode. Normally, it would be used to set the mode of the current editor.
     * When patch or override the doc mode service, can pass a callback to set the editor mode.
     * @param mode - The mode to set.
     */
    setEditorMode: (mode: DocMode) => void;
    /**
     * Get current editor mode.
     * @returns The editor mode.
     */
    getEditorMode: () => DocMode | null;
}
export declare const DocModeProvider: import("@lumensuite/global/di").ServiceIdentifier<DocModeProvider> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<DocModeProvider>);
export declare class DocModeService extends Extension implements DocModeProvider {
    std: BlockStdScope;
    constructor(std: BlockStdScope);
    static setup(di: Container): void;
    getEditorMode(): null;
    getPrimaryMode(id: string): DocMode;
    onPrimaryModeChange(handler: (mode: DocMode) => void, id: string): Disposable;
    setEditorMode(mode: DocMode): void;
    setPrimaryMode(mode: DocMode, id: string): void;
    togglePrimaryMode(id: string): "page" | "edgeless";
}
//# sourceMappingURL=doc-mode-service.d.ts.map