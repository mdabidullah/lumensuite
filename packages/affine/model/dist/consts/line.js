import { z } from 'zod';
import { createEnumMap } from '../utils/enum.js';
export var LineWidth;
(function (LineWidth) {
    LineWidth[LineWidth["Eight"] = 8] = "Eight";
    // Thin
    LineWidth[LineWidth["Four"] = 4] = "Four";
    LineWidth[LineWidth["Six"] = 6] = "Six";
    // Thick
    LineWidth[LineWidth["Ten"] = 10] = "Ten";
    LineWidth[LineWidth["Twelve"] = 12] = "Twelve";
    LineWidth[LineWidth["Two"] = 2] = "Two";
})(LineWidth || (LineWidth = {}));
export var LineColor;
(function (LineColor) {
    LineColor["Black"] = "--affine-palette-line-black";
    LineColor["Blue"] = "--affine-palette-line-blue";
    LineColor["Green"] = "--affine-palette-line-green";
    LineColor["Grey"] = "--affine-palette-line-grey";
    LineColor["Magenta"] = "--affine-palette-line-magenta";
    LineColor["Orange"] = "--affine-palette-line-orange";
    LineColor["Purple"] = "--affine-palette-line-purple";
    LineColor["Red"] = "--affine-palette-line-red";
    LineColor["Teal"] = "--affine-palette-line-teal";
    LineColor["White"] = "--affine-palette-line-white";
    LineColor["Yellow"] = "--affine-palette-line-yellow";
})(LineColor || (LineColor = {}));
export const LineColorMap = createEnumMap(LineColor);
export const LINE_COLORS = [
    LineColor.Yellow,
    LineColor.Orange,
    LineColor.Red,
    LineColor.Magenta,
    LineColor.Purple,
    LineColor.Blue,
    LineColor.Teal,
    LineColor.Green,
    LineColor.Black,
    LineColor.Grey,
    LineColor.White,
];
export const LineColorsSchema = z.nativeEnum(LineColor);
export const DEFAULT_TEXT_COLOR = LineColor.Blue;
export const DEFAULT_BRUSH_COLOR = LineColor.Blue;
export const DEFAULT_CONNECTOR_COLOR = LineColor.Grey;
//# sourceMappingURL=line.js.map