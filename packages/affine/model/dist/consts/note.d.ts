import { z } from 'zod';
export declare const NOTE_WIDTH = 800;
export declare enum NoteBackgroundColor {
    Black = "--affine-note-background-black",
    Blue = "--affine-note-background-blue",
    Green = "--affine-note-background-green",
    Grey = "--affine-note-background-grey",
    Magenta = "--affine-note-background-magenta",
    Orange = "--affine-note-background-orange",
    Purple = "--affine-note-background-purple",
    Red = "--affine-note-background-red",
    Teal = "--affine-note-background-teal",
    White = "--affine-note-background-white",
    Yellow = "--affine-note-background-yellow"
}
export declare const NoteBackgroundColorMap: Record<NoteBackgroundColor, "Black" | "Blue" | "Green" | "Grey" | "Magenta" | "Orange" | "Purple" | "Red" | "Teal" | "White" | "Yellow">;
export declare const NOTE_BACKGROUND_COLORS: readonly [NoteBackgroundColor.Yellow, NoteBackgroundColor.Orange, NoteBackgroundColor.Red, NoteBackgroundColor.Magenta, NoteBackgroundColor.Purple, NoteBackgroundColor.Blue, NoteBackgroundColor.Teal, NoteBackgroundColor.Green, NoteBackgroundColor.Black, NoteBackgroundColor.Grey, NoteBackgroundColor.White];
export declare const DEFAULT_NOTE_BACKGROUND_COLOR = NoteBackgroundColor.White;
export declare const NoteBackgroundColorsSchema: z.ZodNativeEnum<typeof NoteBackgroundColor>;
export declare enum NoteShadow {
    Box = "--affine-note-shadow-box",
    Film = "--affine-note-shadow-film",
    Float = "--affine-note-shadow-float",
    None = "",
    Paper = "--affine-note-shadow-paper",
    Sticker = "--affine-note-shadow-sticker"
}
export declare const NoteShadowMap: Record<NoteShadow, "None" | "Box" | "Film" | "Float" | "Paper" | "Sticker">;
export declare const NOTE_SHADOWS: readonly [NoteShadow.None, NoteShadow.Box, NoteShadow.Sticker, NoteShadow.Paper, NoteShadow.Float, NoteShadow.Film];
export declare const DEFAULT_NOTE_SHADOW = NoteShadow.Box;
export declare const NoteShadowsSchema: z.ZodNativeEnum<typeof NoteShadow>;
export declare enum NoteDisplayMode {
    DocAndEdgeless = "both",
    DocOnly = "doc",
    EdgelessOnly = "edgeless"
}
export declare enum StrokeStyle {
    Dash = "dash",
    None = "none",
    Solid = "solid"
}
export declare const DEFAULT_NOTE_BORDER_STYLE = StrokeStyle.None;
export declare const StrokeStyleMap: Record<StrokeStyle, "None" | "Dash" | "Solid">;
export declare enum NoteCorners {
    Huge = 32,
    Large = 24,
    Medium = 16,
    None = 0,
    Small = 8
}
export declare const NoteCornersMap: Record<NoteCorners, "None" | "Huge" | "Large" | "Medium" | "Small">;
export declare const NOTE_CORNERS: readonly [NoteCorners.None, NoteCorners.Small, NoteCorners.Medium, NoteCorners.Large, NoteCorners.Huge];
export declare const DEFAULT_NOTE_CORNER = NoteCorners.Small;
export declare const NoteCornersSchema: z.ZodNativeEnum<typeof NoteCorners>;
export declare const DEFAULT_NOTE_BORDER_SIZE = 4;
//# sourceMappingURL=note.d.ts.map