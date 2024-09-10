import type { FontFamily, FontStyle, FontWeight, ShapeStyle, ShapeTextFontSize, ShapeType, StrokeStyle, TextAlign, TextVerticalAlign } from '@blocksuite/affine-model';
import type { Y } from '@blocksuite/store';
import type { CanvasElementType } from '../../element-model/index.js';
import type { ISurfaceElement } from '../surface-element.js';
export interface IShape extends ISurfaceElement {
    type: CanvasElementType.SHAPE;
    shapeType: ShapeType;
    radius: number;
    filled: boolean;
    fillColor: string;
    strokeWidth: number;
    strokeColor: string;
    strokeStyle: StrokeStyle;
    shapeStyle: ShapeStyle;
    roughness?: number;
    text?: Y.Text;
    color?: string;
    fontSize?: ShapeTextFontSize;
    fontFamily?: FontFamily;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    textAlign?: TextAlign;
    textHorizontalAlign?: TextAlign;
    textVerticalAlign?: TextVerticalAlign;
}
//# sourceMappingURL=types.d.ts.map