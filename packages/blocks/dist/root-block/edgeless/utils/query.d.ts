import type { Viewport } from '@lumensuite/block-std/gfx';
import type { PointLocation } from '@lumensuite/global/utils';
import type { BlockModel } from '@lumensuite/store';
import { type CanvasElementWithText } from '@lumensuite/affine-block-surface';
import { type AttachmentBlockModel, type BookmarkBlockModel, type EdgelessTextBlockModel, type EmbedBlockModel, type EmbedFigmaModel, type EmbedGithubModel, type EmbedHtmlModel, type EmbedLinkedDocModel, type EmbedLoomModel, type EmbedSyncedDocModel, type EmbedYoutubeModel, type FrameBlockModel, type ImageBlockModel, type NoteBlockModel } from '@lumensuite/affine-model';
import { Bound } from '@lumensuite/global/utils';
import type { Connectable } from '../../../_common/utils/index.js';
import type { GfxBlockModel } from '../block-model.js';
import type { EdgelessTool } from '../types.js';
export declare function isMindmapNode(element: GfxBlockModel | LumenSuite.EdgelessModel | null): boolean;
export declare function isTopLevelBlock(selectable: BlockModel | LumenSuite.EdgelessModel | BlockModel | null): selectable is GfxBlockModel;
export declare function isNoteBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is NoteBlockModel;
export declare function isEdgelessTextBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EdgelessTextBlockModel;
export declare function isFrameBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is FrameBlockModel;
export declare function isImageBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is ImageBlockModel;
export declare function isAttachmentBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is AttachmentBlockModel;
export declare function isBookmarkBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is BookmarkBlockModel;
export declare function isEmbeddedBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedBlockModel;
/**
 * TODO: Remove this function after the edgeless refactor completed
 * This function is used to check if the block is an AI chat block for edgeless selected rect
 * Should not be used in the future
 * Related issue: https://linear.app/affine-design/issue/BS-1009/
 * @deprecated
 */
export declare function isAIChatBlock(element: BlockModel | LumenSuite.EdgelessModel | null): boolean;
export declare function isEmbeddedLinkBlock(element: BlockModel | LumenSuite.EdgelessModel | null): boolean;
export declare function isEmbedGithubBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedGithubModel;
export declare function isEmbedYoutubeBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedYoutubeModel;
export declare function isEmbedLoomBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedLoomModel;
export declare function isEmbedFigmaBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedFigmaModel;
export declare function isEmbedLinkedDocBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedLinkedDocModel;
export declare function isEmbedSyncedDocBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedSyncedDocModel;
export declare function isEmbedHtmlBlock(element: BlockModel | LumenSuite.EdgelessModel | null): element is EmbedHtmlModel;
export declare function isCanvasElement(selectable: LumenSuite.EdgelessModel | null): selectable is LumenSuite.SurfaceModel;
export declare function isCanvasElementWithText(element: LumenSuite.EdgelessModel): element is CanvasElementWithText;
export declare function isConnectable(element: LumenSuite.EdgelessModel | null): element is Connectable;
export declare function getSelectionBoxBound(viewport: Viewport, bound: Bound): DOMRect;
export declare function getCursorMode(edgelessTool: EdgelessTool): "text" | "default" | "grabbing" | "grab" | "crosshair";
export declare function getBackgroundGrid(zoom: number, showGrid: boolean): {
    gap: number;
    grid: string;
};
export declare function getSelectedRect(selected: LumenSuite.EdgelessModel[]): DOMRect;
export type SelectableProps = {
    bound: Bound;
    rotate: number;
    path?: PointLocation[];
};
export declare function getSelectableBounds(selected: LumenSuite.EdgelessModel[]): Map<string, SelectableProps>;
//# sourceMappingURL=query.d.ts.map