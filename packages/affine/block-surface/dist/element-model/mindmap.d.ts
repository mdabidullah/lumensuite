import type { BaseElementProps, SerializedElement, SurfaceBlockModel } from '@lumensuite/block-std/gfx';
import type { SerializedXYWH, XYWH } from '@lumensuite/global/utils';
import { LayoutType, LocalConnectorElementModel, MindmapStyle } from '@lumensuite/affine-model';
import { GfxGroupLikeElementModel } from '@lumensuite/block-std/gfx';
import { type Y } from '@lumensuite/store';
import { z } from 'zod';
import type { MindmapNode, MindmapRoot, NodeDetail } from './utils/mindmap/layout.js';
import type { ConnectorStyle, MindmapStyleGetter } from './utils/mindmap/style.js';
declare const baseNodeSchema: z.ZodObject<{
    text: z.ZodString;
    xywh: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text: string;
    xywh?: string | undefined;
}, {
    text: string;
    xywh?: string | undefined;
}>;
type Node = z.infer<typeof baseNodeSchema> & {
    children?: Node[];
};
declare const nodeSchema: z.ZodType<Node>;
type NodeType = z.infer<typeof nodeSchema>;
export type SerializedMindmapElement = SerializedElement & {
    children: Record<string, NodeDetail>;
};
type MindmapElementProps = BaseElementProps & {
    children: Y.Map<NodeDetail>;
};
export declare class MindmapElementModel extends GfxGroupLikeElementModel<MindmapElementProps> {
    private _nodeMap;
    private _queueBuildTree;
    private _queued;
    private _tree;
    connectors: Map<string, LocalConnectorElementModel>;
    extraConnectors: Map<string, LocalConnectorElementModel>;
    get nodeMap(): Map<string, MindmapNode>;
    get rotate(): number;
    set rotate(_: number);
    get styleGetter(): MindmapStyleGetter;
    get tree(): MindmapRoot;
    get type(): string;
    static createFromTree(tree: MindmapNode, style: MindmapStyle, layoutType: LayoutType, surface: SurfaceBlockModel): MindmapElementModel;
    static propsToY(props: Record<string, unknown>): MindmapElementProps;
    private _cfgBalanceLayoutDir;
    private _isConnectorOutdated;
    protected addConnector(from: MindmapNode, to: MindmapNode, layout: LayoutType, connectorStyle: ConnectorStyle, extra?: boolean): LocalConnectorElementModel;
    addNode(
    /**
     * The parent node id of the new node. If it's null, the node will be the root node
     */
    parent: string | MindmapNode | null, sibling?: string | number, position?: 'before' | 'after', props?: Record<string, unknown>, 
    /**
     * Force the layout direction of the node.
     * It only works on the first level node with the layout type of BALANCE
     */
    direction?: LayoutType.LEFT | LayoutType.RIGHT): string;
    addTree(parent: string | MindmapNode, tree: NodeType | MindmapNode, 
    /**
     * `sibling` indicates where to insert a subtree among peer elements.
     * If it's a string, it represents a peer element's ID;
     * if it's a number, it represents its index.
     * The subtree will be inserted before the sibling element.
     */
    sibling?: string | number, 
    /**
     * Preferred layout direction, only works when parent is root and layout type is BALANCE
     */
    layout?: LayoutType): MindmapNode | null | undefined;
    applyStyle(fitContent?: boolean): void;
    protected buildTree(): void;
    /**
     * Detach a mindmap. It is similar to `removeChild` but
     * it does not delete the node.
     *
     * So the node can be used to create a new mind map or merge into other mind map
     */
    detach(subtree: string | MindmapNode): MindmapNode | undefined;
    /**
     *
     * @param subtree The subtree of root, this only take effects when the layout type is BALANCED.
     * @returns
     */
    getChildNodes(id: string, subtree?: 'left' | 'right'): MindmapNode[];
    getConnector(from: MindmapNode, to: MindmapNode): LocalConnectorElementModel | null;
    getLayoutDir(node: string | MindmapNode): LayoutType | null;
    getNode(id: string): MindmapNode | null;
    getParentNode(id: string): MindmapNode | null;
    /**
     * Path is an array of indexes that represent the path from the root node to the target node.
     * The first element of the array is always 0, which represents the root node.
     * @param element
     * @returns
     *
     * @example
     * ```ts
     * const path = mindmap.getPath('nodeId');
     * // [0, 1, 2]
     * ```
     */
    getPath(element: string | MindmapNode): number[];
    getSiblingNode(id: string, direction?: 'prev' | 'next', 
    /**
     * The subtree of which that the sibling node belongs to,
     * this is used when the layout type is BALANCED.
     */
    subtree?: 'left' | 'right'): MindmapNode | null;
    layout(tree?: MindmapNode | MindmapRoot, applyStyle?: boolean, layoutType?: LayoutType): void;
    moveTo(targetXYWH: SerializedXYWH | XYWH): void;
    moveTree(tree: MindmapNode, parent: string | MindmapNode, siblingIndex: number, layout?: LayoutType): MindmapNode | undefined;
    onCreated(): void;
    removeChild(id: string): void;
    protected requestBuildTree(): void;
    requestLayout(): void;
    serialize(): SerializedMindmapElement;
    stashTree(node: MindmapNode | string): (() => void) | undefined;
    traverse(callback: (node: MindmapNode, parent: MindmapNode | null) => void): void;
    accessor children: Y.Map<NodeDetail>;
    accessor layoutType: LayoutType;
    accessor style: MindmapStyle;
}
declare global {
    namespace LumenSuite {
        interface SurfaceGroupLikeModelMap {
            mindmap: MindmapElementModel;
        }
    }
}
export {};
//# sourceMappingURL=mindmap.d.ts.map