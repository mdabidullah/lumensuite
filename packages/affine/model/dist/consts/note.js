import { z } from 'zod';
import { createEnumMap } from '../utils/enum.js';
export const NOTE_WIDTH = 800;
export var NoteBackgroundColor;
(function (NoteBackgroundColor) {
    NoteBackgroundColor["Black"] = "--affine-note-background-black";
    NoteBackgroundColor["Blue"] = "--affine-note-background-blue";
    NoteBackgroundColor["Green"] = "--affine-note-background-green";
    NoteBackgroundColor["Grey"] = "--affine-note-background-grey";
    NoteBackgroundColor["Magenta"] = "--affine-note-background-magenta";
    NoteBackgroundColor["Orange"] = "--affine-note-background-orange";
    NoteBackgroundColor["Purple"] = "--affine-note-background-purple";
    NoteBackgroundColor["Red"] = "--affine-note-background-red";
    NoteBackgroundColor["Teal"] = "--affine-note-background-teal";
    NoteBackgroundColor["White"] = "--affine-note-background-white";
    NoteBackgroundColor["Yellow"] = "--affine-note-background-yellow";
})(NoteBackgroundColor || (NoteBackgroundColor = {}));
export const NoteBackgroundColorMap = createEnumMap(NoteBackgroundColor);
export const NOTE_BACKGROUND_COLORS = [
    NoteBackgroundColor.Yellow,
    NoteBackgroundColor.Orange,
    NoteBackgroundColor.Red,
    NoteBackgroundColor.Magenta,
    NoteBackgroundColor.Purple,
    NoteBackgroundColor.Blue,
    NoteBackgroundColor.Teal,
    NoteBackgroundColor.Green,
    NoteBackgroundColor.Black,
    NoteBackgroundColor.Grey,
    NoteBackgroundColor.White,
];
export const DEFAULT_NOTE_BACKGROUND_COLOR = NoteBackgroundColor.White;
export const NoteBackgroundColorsSchema = z.nativeEnum(NoteBackgroundColor);
export var NoteShadow;
(function (NoteShadow) {
    NoteShadow["Box"] = "--affine-note-shadow-box";
    NoteShadow["Film"] = "--affine-note-shadow-film";
    NoteShadow["Float"] = "--affine-note-shadow-float";
    NoteShadow["None"] = "";
    NoteShadow["Paper"] = "--affine-note-shadow-paper";
    NoteShadow["Sticker"] = "--affine-note-shadow-sticker";
})(NoteShadow || (NoteShadow = {}));
export const NoteShadowMap = createEnumMap(NoteShadow);
export const NOTE_SHADOWS = [
    NoteShadow.None,
    NoteShadow.Box,
    NoteShadow.Sticker,
    NoteShadow.Paper,
    NoteShadow.Float,
    NoteShadow.Film,
];
export const DEFAULT_NOTE_SHADOW = NoteShadow.Box;
export const NoteShadowsSchema = z.nativeEnum(NoteShadow);
export var NoteDisplayMode;
(function (NoteDisplayMode) {
    NoteDisplayMode["DocAndEdgeless"] = "both";
    NoteDisplayMode["DocOnly"] = "doc";
    NoteDisplayMode["EdgelessOnly"] = "edgeless";
})(NoteDisplayMode || (NoteDisplayMode = {}));
export var StrokeStyle;
(function (StrokeStyle) {
    StrokeStyle["Dash"] = "dash";
    StrokeStyle["None"] = "none";
    StrokeStyle["Solid"] = "solid";
})(StrokeStyle || (StrokeStyle = {}));
export const DEFAULT_NOTE_BORDER_STYLE = StrokeStyle.None;
export const StrokeStyleMap = createEnumMap(StrokeStyle);
export var NoteCorners;
(function (NoteCorners) {
    NoteCorners[NoteCorners["Huge"] = 32] = "Huge";
    NoteCorners[NoteCorners["Large"] = 24] = "Large";
    NoteCorners[NoteCorners["Medium"] = 16] = "Medium";
    NoteCorners[NoteCorners["None"] = 0] = "None";
    NoteCorners[NoteCorners["Small"] = 8] = "Small";
})(NoteCorners || (NoteCorners = {}));
export const NoteCornersMap = createEnumMap(NoteCorners);
export const NOTE_CORNERS = [
    NoteCorners.None,
    NoteCorners.Small,
    NoteCorners.Medium,
    NoteCorners.Large,
    NoteCorners.Huge,
];
export const DEFAULT_NOTE_CORNER = NoteCorners.Small;
export const NoteCornersSchema = z.nativeEnum(NoteCorners);
export const DEFAULT_NOTE_BORDER_SIZE = 4;
//# sourceMappingURL=note.js.map