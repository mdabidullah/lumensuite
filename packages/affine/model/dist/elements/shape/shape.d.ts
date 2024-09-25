import type { BaseElementProps, PointTestOptions } from '@lumensuite/block-std/gfx';
import type { Bound, IBound, IVec, PointLocation, SerializedXYWH } from '@lumensuite/global/utils';
import { type Color, FontStyle, FontWeight, StrokeStyle, TextAlign, type TextStyleProps, TextVerticalAlign } from '@lumensuite/affine-model';
import { GfxPrimitiveElementModel } from '@lumensuite/block-std/gfx';
import { type Y } from '@lumensuite/store';
import { ShapeStyle, ShapeType, TextResizing } from '../../consts/index.js';
export type ShapeProps = BaseElementProps & {
    shapeType: ShapeType;
    radius: number;
    filled: boolean;
    fillColor: Color;
    strokeWidth: number;
    strokeColor: Color;
    strokeStyle: StrokeStyle;
    shapeStyle: ShapeStyle;
    roughness?: number;
    text?: Y.Text;
    textHorizontalAlign?: TextAlign;
    textVerticalAlign?: TextVerticalAlign;
    textResizing?: TextResizing;
    maxWidth?: false | number;
} & Partial<TextStyleProps>;
export declare const SHAPE_TEXT_PADDING = 20;
export declare const SHAPE_TEXT_VERTICAL_PADDING = 10;
export declare class ShapeElementModel extends GfxPrimitiveElementModel<ShapeProps> {
    textBound: IBound | null;
    get type(): string;
    static propsToY(props: ShapeProps): ShapeProps;
    containsBound(bounds: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    getNearestPoint(point: IVec): IVec;
    getRelativePointLocation(point: IVec): PointLocation;
    includesPoint(x: number, y: number, options: PointTestOptions): boolean;
    accessor color: Color;
    accessor fillColor: Color;
    accessor filled: boolean;
    accessor fontFamily: string;
    accessor fontSize: number;
    accessor fontStyle: FontStyle;
    accessor fontWeight: FontWeight;
    accessor maxWidth: false | number;
    accessor padding: [number, number];
    accessor radius: number;
    accessor rotate: number;
    accessor roughness: number;
    accessor shadow: {
        blur: number;
        offsetX: number;
        offsetY: number;
        color: string;
    } | null;
    accessor shapeStyle: ShapeStyle;
    accessor shapeType: ShapeType;
    accessor strokeColor: Color;
    accessor strokeStyle: StrokeStyle;
    accessor strokeWidth: number;
    accessor text: Y.Text | undefined;
    accessor textAlign: TextAlign;
    accessor textDisplay: boolean;
    accessor textHorizontalAlign: TextAlign;
    accessor textResizing: TextResizing;
    accessor textVerticalAlign: TextVerticalAlign;
    accessor xywh: SerializedXYWH;
}
declare global {
    namespace LumenSuite {
        interface SurfaceElementModelMap {
            shape: ShapeElementModel;
        }
        interface EdgelessTextModelMap {
            shape: ShapeElementModel;
        }
    }
}
//# sourceMappingURL=shape.d.ts.map