import type { EditorHost } from '@blocksuite/block-std';
import type { IVec, SerializedXYWH, XYWH } from '@blocksuite/global/utils';
import { Bound, DisposableGroup, PointLocation } from '@blocksuite/global/utils';
import { type Y } from '@blocksuite/store';
import type { GfxModel } from '../gfx-block-model.js';
import type { SurfaceBlockModel } from './surface-model.js';
export type BaseElementProps = {
    index: string;
    seed: number;
};
export type GfxCompatibleProps = {
    xywh: SerializedXYWH;
    index: string;
};
export type SerializedElement = Record<string, unknown> & {
    type: string;
    xywh: SerializedXYWH;
    id: string;
    index: string;
    props: Record<string, unknown>;
};
export interface PointTestOptions {
    /**
     * The threshold of the hit test. The unit is pixel.
     */
    hitThreshold?: number;
    /**
     * The padding of the response area for each element when do the hit testing. The unit is pixel.
     */
    responsePadding?: [number, number];
    /**
     * If true, the transparent area of the element will be ignored during the point inclusion test.
     * Otherwise, the transparent area will be considered as filled area.
     *
     * Default is true.
     */
    ignoreTransparent?: boolean;
    zoom?: number;
}
export interface GfxElementGeometry {
    containsBound(bound: Bound): boolean;
    getNearestPoint(point: IVec): IVec;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    getRelativePointLocation(point: IVec): PointLocation;
    includesPoint(x: number, y: number, options: PointTestOptions, host: EditorHost): boolean;
    intersectsBound(bound: Bound): boolean;
}
export declare const gfxContainerSymbol: unique symbol;
export declare const isGfxContainerElm: (elm: unknown) => elm is GfxContainerElement;
export interface GfxContainerElement extends GfxCompatibleProps {
    [gfxContainerSymbol]: true;
    childIds: string[];
    childElements: GfxModel[];
    hasDescendant(element: string | GfxModel): boolean;
}
export declare abstract class GfxPrimitiveElementModel<Props extends BaseElementProps = BaseElementProps> implements GfxElementGeometry {
    private _lastXYWH;
    protected _disposable: DisposableGroup;
    protected _id: string;
    protected _local: Map<string | symbol, unknown>;
    protected _onChange: (payload: {
        props: Record<string, unknown>;
        oldValues: Record<string, unknown>;
        local: boolean;
    }) => void;
    /**
     * Used to store a copy of data in the yMap.
     */
    protected _preserved: Map<string, unknown>;
    protected _stashed: Map<keyof Props | string, unknown>;
    abstract rotate: number;
    surface: SurfaceBlockModel;
    abstract xywh: SerializedXYWH;
    yMap: Y.Map<unknown>;
    get connectable(): boolean;
    get deserializedXYWH(): XYWH;
    /**
     * The bound of the element after rotation.
     * The bound without rotation should be created by `Bound.deserialize(this.xywh)`.
     */
    get elementBound(): Bound;
    get externalBound(): Bound | null;
    get group(): GfxGroupLikeElementModel | null;
    get groups(): GfxGroupLikeElementModel<BaseElementProps>[];
    get h(): number;
    get id(): string;
    get isConnected(): boolean;
    abstract get type(): string;
    get w(): number;
    get x(): number;
    get y(): number;
    constructor(options: {
        id: string;
        yMap: Y.Map<unknown>;
        model: SurfaceBlockModel;
        stashedStore: Map<unknown, unknown>;
        onChange: (payload: {
            props: Record<string, unknown>;
            oldValues: Record<string, unknown>;
            local: boolean;
        }) => void;
    });
    static propsToY(props: Record<string, unknown>): Record<string, unknown>;
    containsBound(bounds: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    getNearestPoint(point: IVec): IVec;
    getRelativePointLocation(relativePoint: IVec): PointLocation;
    includesPoint(x: number, y: number, _: PointTestOptions, __: EditorHost): boolean;
    intersectsBound(bound: Bound): boolean;
    onCreated(): void;
    pop(prop: keyof Props | string): void;
    serialize(): SerializedElement;
    stash(prop: keyof Props | string): void;
    accessor display: boolean;
    accessor externalXYWH: SerializedXYWH | undefined;
    accessor index: string;
    accessor opacity: number;
    accessor seed: number;
}
export declare abstract class GfxGroupLikeElementModel<Props extends BaseElementProps = BaseElementProps> extends GfxPrimitiveElementModel<Props> implements GfxContainerElement {
    private _childBoundCacheKey;
    private _childIds;
    private _mutex;
    abstract children: Y.Map<any>;
    [gfxContainerSymbol]: true;
    get childElements(): GfxModel[];
    /**
     * The ids of the children. Its role is to provide a unique way to access the children.
     * You should update this field through `setChildIds` when the children are added or removed.
     */
    get childIds(): string[];
    get xywh(): `[${number},${number},${number},${number}]`;
    set xywh(_: `[${number},${number},${number},${number}]`);
    private _updateXYWH;
    /**
     * @deprecated Use `getAllDescendantElements` instead.
     * Get all descendants of this group
     * @param withoutGroup if true, will not include group element
     */
    descendants(withoutGroup?: boolean): GfxModel[];
    /**
     * The actual field that stores the children of the group.
     * It should be a ymap decorated with `@field`.
     */
    hasChild(element: string | GfxModel): boolean;
    /**
     * Check if the group has the given descendant.
     */
    hasDescendant(element: string | GfxModel): boolean;
    /**
     * Remove the child from the group
     */
    abstract removeChild(id: string): void;
    /**
     * Set the new value of the childIds
     * @param value the new value of the childIds
     * @param fromLocal if true, the change is happened in the local
     */
    setChildIds(value: string[], fromLocal: boolean): void;
}
export declare abstract class GfxLocalElementModel {
    private _lastXYWH;
    protected _local: Map<string | symbol, unknown>;
    opacity: number;
    abstract rotate: number;
    abstract xywh: SerializedXYWH;
    get deserializedXYWH(): XYWH;
    get h(): number;
    get w(): number;
    get x(): number;
    get y(): number;
}
export declare function syncElementFromY(model: GfxPrimitiveElementModel, callback: (payload: {
    props: Record<string, unknown>;
    oldValues: Record<string, unknown>;
    local: boolean;
}) => void): () => void;
//# sourceMappingURL=element-model.d.ts.map