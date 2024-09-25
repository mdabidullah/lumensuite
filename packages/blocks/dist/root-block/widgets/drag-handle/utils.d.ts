import type { EmbedCardStyle } from '@lumensuite/affine-model';
import type { BaseSelection, BlockComponent, EditorHost } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
import { Point } from '@lumensuite/global/utils';
import { type DropResult, type OnDragEndProps } from './config.js';
export declare const getDragHandleContainerHeight: (model: BlockModel) => number;
export declare const containChildBlock: (blocks: BlockComponent[], childModel: BlockModel) => boolean;
export declare const containBlock: (blockIDs: string[], targetID: string) => boolean;
export declare const insideDatabaseTable: (element: Element) => boolean;
export declare const captureEventTarget: (target: EventTarget | null) => Element | null;
export declare const includeTextSelection: (selections: BaseSelection[]) => boolean;
/**
 * Check if the path of two blocks are equal
 */
export declare const isBlockIdEqual: (id1: string | null | undefined, id2: string | null | undefined) => boolean;
export declare const isOutOfNoteBlock: (editorHost: EditorHost, noteBlock: Element, point: Point, scale: number) => boolean;
export declare const getClosestNoteBlock: (editorHost: EditorHost, rootComponent: BlockComponent, point: Point) => BlockComponent<BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null | undefined;
export declare const getClosestBlockByPoint: (editorHost: EditorHost, rootComponent: BlockComponent, point: Point) => BlockComponent<BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
export declare function calcDropTarget(point: Point, model: BlockModel, element: Element, draggingElements: BlockComponent[], scale: number, 
/**
 * Allow the dragging block to be dropped as sublist
 */
allowSublist?: boolean): DropResult | null;
export declare const getDropResult: (event: MouseEvent, scale?: number) => DropResult | null;
export declare function getDragHandleLeftPadding(blocks: BlockComponent[]): 2 | 18;
export declare function updateDragHandleClassName(blocks?: BlockComponent[]): void;
export declare function getDuplicateBlocks(blocks: BlockModel[]): {
    flavour: string;
    blockProps: Record<string, unknown>;
}[];
export declare function convertDragPreviewDocToEdgeless({ blockComponent, dragPreview, cssSelector, width, height, noteScale, state, }: OnDragEndProps & {
    blockComponent: BlockComponent;
    cssSelector: string;
    width?: number;
    height?: number;
    style?: EmbedCardStyle;
}): boolean;
export declare function convertDragPreviewEdgelessToDoc({ blockComponent, dropBlockId, dropType, state, style, }: OnDragEndProps & {
    blockComponent: BlockComponent;
    style?: EmbedCardStyle;
}): boolean;
//# sourceMappingURL=utils.d.ts.map