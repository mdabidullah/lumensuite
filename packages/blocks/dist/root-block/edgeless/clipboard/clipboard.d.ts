import type { BlockStdScope } from '@lumensuite/block-std';
import type { SerializedElement } from '@lumensuite/block-std/gfx';
import type { IVec } from '@lumensuite/global/utils';
import { type BlockSnapshot } from '@lumensuite/store';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
import { PageClipboard } from '../../clipboard/index.js';
type BlockCreationFunction = (snapshot: BlockSnapshot, oldToNewIdsMap: Map<string, string>) => Promise<string | null> | string | null;
interface CanvasExportOptions {
    dpr?: number;
    padding?: number;
    background?: string;
}
export declare class EdgelessClipboardController extends PageClipboard {
    host: EdgelessRootBlockComponent;
    private _blockConfigs;
    private _initEdgelessClipboard;
    private _onCopy;
    private _onCut;
    private _onPaste;
    private get _exportManager();
    private get _rootService();
    private get doc();
    private get edgeless();
    private get selectionManager();
    private get std();
    private get surface();
    private get toolManager();
    constructor(host: EdgelessRootBlockComponent);
    private _checkCanContinueToCanvas;
    private _createAttachmentBlock;
    private _createBookmarkBlock;
    private _createCanvasElement;
    private _createEdgelessTextBlock;
    private _createFigmaEmbedBlock;
    private _createFrameBlock;
    private _createGithubEmbedBlock;
    private _createHtmlEmbedBlock;
    private _createImageBlock;
    private _createLinkedDocEmbedBlock;
    private _createLoomEmbedBlock;
    private _createNoteBlock;
    private _createSyncedDocEmbedBlock;
    private _createYoutubeEmbedBlock;
    private _edgelessToCanvas;
    private _elementToSvgElement;
    private _emitSelectionChangeAfterPaste;
    private _pasteShapesAndBlocks;
    private _pasteTextContentAsNote;
    private _replaceRichTextWithSvgElement;
    private _updatePastedElementsIndex;
    copy(): void;
    copyAsPng(blocks: LumenSuite.EdgelessBlockModelType[], shapes: LumenSuite.SurfaceModel[]): Promise<void>;
    createElementsFromClipboardData(elementsRawData: (SerializedElement | BlockSnapshot)[], pasteCenter?: IVec): Promise<{
        canvasElements: LumenSuite.SurfaceModel[];
        blockModels: LumenSuite.EdgelessBlockModelType[];
    }>;
    hostConnected(): void;
    registerBlock(flavour: string, createFunction: BlockCreationFunction): void;
    toCanvas(blocks: LumenSuite.EdgelessBlockModelType[], shapes: LumenSuite.SurfaceModel[], options?: CanvasExportOptions): Promise<HTMLCanvasElement | undefined>;
}
export declare function prepareClipboardData(selectedAll: LumenSuite.EdgelessModel[], std: BlockStdScope): Promise<{
    snapshot: (SerializedElement | {
        type: "block";
        id: string;
        flavour: string;
        version?: number;
        props: Record<string, unknown>;
        children: BlockSnapshot[];
    })[];
    blobs: Record<string, import("../../clipboard/adapter.js").FileSnapshot>;
}>;
export {};
//# sourceMappingURL=clipboard.d.ts.map