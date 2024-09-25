import { LayoutType, type ShapeElementModel } from '@lumensuite/affine-model';
import type { MindmapElementModel } from '../../mindmap.js';
import type { MindmapNode } from './layout.js';
export declare function getHoveredArea(target: ShapeElementModel, position: [number, number], layoutDir: LayoutType): 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**
 * Show merge indicator when tree is hovered on a tree
 * @returns
 */
export declare function showMergeIndicator(targetMindmap: MindmapElementModel, 
/**
 * The hovered node
 */
target: string | MindmapNode, 
/**
 * The node that will be merged
 */
source: MindmapNode, position: [number, number]): {
    clear: () => void;
    mergeInfo: {
        target: MindmapNode;
        index: number;
        layoutType: LayoutType.LEFT | LayoutType.RIGHT;
    };
} | undefined;
/**
 * Hide the connector that the target end point is given node
 */
export declare function hideTargetConnector(mindmap: MindmapElementModel, 
/**
 * The mind map node which's connector will be hide
 */
target: MindmapNode): (() => void) | undefined;
/**
 * Move a subtree from one mind map to another
 * @param subtree
 * @param from
 * @param to
 */
export declare function moveMindMapSubtree(from: MindmapElementModel, subtree: MindmapNode, to: MindmapElementModel, parent: MindmapNode | string, index: number, layout?: LayoutType): MindmapNode | null | undefined;
//# sourceMappingURL=utils.d.ts.map