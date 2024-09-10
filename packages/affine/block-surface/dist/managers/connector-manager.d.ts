import type { GfxController, GfxModel } from '@blocksuite/block-std/gfx';
import type { IBound, IVec } from '@blocksuite/global/utils';
import { type BrushElementModel, type Connection, type ConnectorElementModel, GroupElementModel, type LocalConnectorElementModel } from '@blocksuite/affine-model';
import { Bound, PointLocation } from '@blocksuite/global/utils';
import { Overlay } from '../renderer/canvas-renderer.js';
import { AStarRunner } from '../utils/a-star.js';
export type Connectable = Exclude<BlockSuite.EdgelessModel, ConnectorElementModel | BrushElementModel | GroupElementModel>;
export type OrthogonalConnectorInput = {
    startBound: Bound | null;
    endBound: Bound | null;
    startPoint: PointLocation;
    endPoint: PointLocation;
};
export declare const ConnectorEndpointLocations: IVec[];
export declare const ConnectorEndpointLocationsOnTriangle: IVec[];
export declare function calculateNearestLocation(point: IVec, bounds: IBound, locations?: IVec[], shortestDistance?: number): IVec;
export declare function isConnectorAndBindingsAllSelected(connector: ConnectorElementModel | LocalConnectorElementModel, selected: GfxModel[]): boolean;
export declare function getAnchors(ele: GfxModel): {
    point: PointLocation;
    coord: IVec;
}[];
export declare function getNearestConnectableAnchor(ele: Connectable, point: IVec): PointLocation;
export declare class ConnectionOverlay extends Overlay {
    private _gfx;
    highlightPoint: IVec | null;
    points: IVec[];
    sourceBounds: IBound | null;
    targetBounds: IBound | null;
    constructor(_gfx: GfxController);
    private _findConnectablesInViews;
    _clearRect(): void;
    clear(): void;
    render(ctx: CanvasRenderingContext2D): void;
    /**
     * Render the connector at the given point. It will try to find
     * the closest connectable element and render the connector. If the
     * point is not close to any connectable element, it will just render
     * the connector at the given point.
     * @param point the point to render the connector
     * @param excludedIds the ids of the elements that should be excluded
     * @returns the connection result
     */
    renderConnector(point: IVec, excludedIds?: string[]): Connection;
}
export declare class ConnectorPathGenerator {
    private options;
    protected _aStarRunner: AStarRunner | null;
    constructor(options: {
        getElementById: (id: string) => GfxModel | null;
    });
    static updatePath(connector: ConnectorElementModel | LocalConnectorElementModel, path: PointLocation[] | null | null, elementGetter?: (id: string) => GfxModel | null): void;
    private _computeStartEndPoint;
    private _generateConnectorPath;
    private _generateCurveConnectorPath;
    private _generateStraightConnectorPath;
    private _getConnectionPoint;
    private _getConnectorEndElement;
    private _prepareOrthogonalConnectorInfo;
    generateOrthogonalConnectorPath(input: OrthogonalConnectorInput): IVec[];
    hasRelatedElement(connecter: ConnectorElementModel | LocalConnectorElementModel): boolean;
}
//# sourceMappingURL=connector-manager.d.ts.map