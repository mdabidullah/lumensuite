import type { XYWH } from '@lumensuite/global/utils';
import { type Options, Overlay, type RoughCanvas } from '@lumensuite/affine-block-surface';
import { type Color, type ShapeStyle } from '@lumensuite/affine-model';
import { DisposableGroup, Slot } from '@lumensuite/global/utils';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare abstract class Shape {
    options: Options;
    shapeStyle: ShapeStyle;
    type: string;
    xywh: XYWH;
    constructor(xywh: XYWH, type: string, options: Options, shapeStyle: ShapeStyle);
    abstract draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class RectShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class TriangleShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class DiamondShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class EllipseShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class RoundedRectShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class ShapeFactory {
    static createShape(xywh: XYWH, type: string, options: Options, shapeStyle: ShapeStyle): Shape;
}
declare class ToolOverlay extends Overlay {
    protected disposables: DisposableGroup;
    protected edgeless: EdgelessRootBlockComponent;
    globalAlpha: number;
    x: number;
    y: number;
    constructor(edgeless: EdgelessRootBlockComponent);
    dispose(): void;
    render(_ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class ShapeOverlay extends ToolOverlay {
    shape: Shape;
    constructor(edgeless: EdgelessRootBlockComponent, type: string, options: Options, style: {
        shapeStyle: ShapeStyle;
        fillColor: Color;
        strokeColor: Color;
    });
    render(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class NoteOverlay extends ToolOverlay {
    backgroundColor: string;
    text: string;
    constructor(edgeless: EdgelessRootBlockComponent, background: Color);
    private _getOverlayText;
    render(ctx: CanvasRenderingContext2D): void;
}
export declare class DraggingNoteOverlay extends NoteOverlay {
    height: number;
    slots: {
        draggingNoteUpdated: Slot<{
            xywh: XYWH;
        }>;
    };
    width: number;
    constructor(edgeless: EdgelessRootBlockComponent, background: Color);
    render(ctx: CanvasRenderingContext2D): void;
}
export {};
//# sourceMappingURL=tool-overlay.d.ts.map