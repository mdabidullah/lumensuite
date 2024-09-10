import { z } from 'zod';
export declare enum LineWidth {
    Eight = 8,
    Four = 4,
    Six = 6,
    Ten = 10,
    Twelve = 12,
    Two = 2
}
export declare enum LineColor {
    Black = "--affine-palette-line-black",
    Blue = "--affine-palette-line-blue",
    Green = "--affine-palette-line-green",
    Grey = "--affine-palette-line-grey",
    Magenta = "--affine-palette-line-magenta",
    Orange = "--affine-palette-line-orange",
    Purple = "--affine-palette-line-purple",
    Red = "--affine-palette-line-red",
    Teal = "--affine-palette-line-teal",
    White = "--affine-palette-line-white",
    Yellow = "--affine-palette-line-yellow"
}
export declare const LineColorMap: Record<LineColor, "Black" | "Blue" | "Green" | "Grey" | "Magenta" | "Orange" | "Purple" | "Red" | "Teal" | "White" | "Yellow">;
export declare const LINE_COLORS: readonly [LineColor.Yellow, LineColor.Orange, LineColor.Red, LineColor.Magenta, LineColor.Purple, LineColor.Blue, LineColor.Teal, LineColor.Green, LineColor.Black, LineColor.Grey, LineColor.White];
export declare const LineColorsSchema: z.ZodNativeEnum<typeof LineColor>;
export declare const DEFAULT_TEXT_COLOR = LineColor.Blue;
export declare const DEFAULT_BRUSH_COLOR = LineColor.Blue;
export declare const DEFAULT_CONNECTOR_COLOR = LineColor.Grey;
//# sourceMappingURL=line.d.ts.map