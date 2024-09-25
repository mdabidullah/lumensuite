import type { ShapeElementModel, TextAlign, TextVerticalAlign } from '@lumensuite/affine-model';
import type { Bound } from '@lumensuite/global/utils';
import type { CanvasRenderer } from '../../canvas-renderer.js';
import { type TextDelta } from '../text/utils.js';
export type Colors = {
    color: string;
    fillColor: string;
    strokeColor: string;
};
export declare function drawGeneralShape(ctx: CanvasRenderingContext2D, shapeModel: ShapeElementModel, renderer: CanvasRenderer, filled: boolean, fillColor: string, strokeColor: string): void;
export declare function horizontalOffset(width: number, textAlign: TextAlign, horiPadding: number): number;
export declare function verticalOffset(lines: TextDelta[][], lineHeight: number, height: number, textVerticalAlign: TextVerticalAlign, verticalPadding: number): number;
export declare function normalizeShapeBound(shape: ShapeElementModel, bound: Bound): Bound;
export declare function fitContent(shape: ShapeElementModel): void;
//# sourceMappingURL=utils.d.ts.map