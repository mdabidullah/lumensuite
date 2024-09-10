import type { PointLocation, SerializedXYWH } from '@blocksuite/global/utils';
import { GfxLocalElementModel } from '@blocksuite/block-std/gfx';
import type { Connection } from './connector.js';
import { type Color, ConnectorMode, type PointStyle, StrokeStyle } from '../../consts/index.js';
export declare class LocalConnectorElementModel extends GfxLocalElementModel {
    private _path;
    absolutePath: PointLocation[];
    frontEndpointStyle: PointStyle;
    id: string;
    mode: ConnectorMode;
    rearEndpointStyle: PointStyle;
    rotate: number;
    rough?: boolean;
    roughness: number;
    seed: number;
    source: Connection;
    stroke: Color;
    strokeStyle: StrokeStyle;
    strokeWidth: number;
    target: Connection;
    updatingPath: boolean;
    xywh: SerializedXYWH;
    get path(): PointLocation[];
    set path(value: PointLocation[]);
    get type(): string;
}
declare global {
    namespace BlockSuite {
        interface SurfaceLocalModelMap {
            connector: LocalConnectorElementModel;
        }
    }
}
//# sourceMappingURL=local-connector.d.ts.map