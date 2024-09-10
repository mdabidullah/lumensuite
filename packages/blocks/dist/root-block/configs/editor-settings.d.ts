import type { z } from 'zod';
export declare const EditorSettingSchema: z.ZodObject<{
    connector: z.ZodDefault<z.ZodObject<{
        frontEndpointStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").PointStyle>;
        rearEndpointStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").PointStyle>;
        stroke: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineWidth>;
        rough: z.ZodBoolean;
        mode: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ConnectorMode>;
    }, "strip", z.ZodTypeAny, {
        mode: import("@blocksuite/affine-model").ConnectorMode;
        frontEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        rearEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        stroke: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: import("@blocksuite/affine-model").LineWidth;
        rough: boolean;
    }, {
        mode: import("@blocksuite/affine-model").ConnectorMode;
        frontEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        rearEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        stroke: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: import("@blocksuite/affine-model").LineWidth;
        rough: boolean;
    }>>;
    brush: z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        lineWidth: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineWidth>;
    }, "strip", z.ZodTypeAny, {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: import("@blocksuite/affine-model").LineWidth;
    }, {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: import("@blocksuite/affine-model").LineWidth;
    }>>;
    text: z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        fontSize: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    }>>;
    mindmap: z.ZodDefault<z.ZodObject<{
        layoutType: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LayoutType>;
        style: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").MindmapStyle>;
    }, "strip", z.ZodTypeAny, {
        style: import("@blocksuite/affine-model").MindmapStyle;
        layoutType: import("@blocksuite/affine-model").LayoutType;
    }, {
        style: import("@blocksuite/affine-model").MindmapStyle;
        layoutType: import("@blocksuite/affine-model").LayoutType;
    }>>;
    'affine:edgeless-text': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
    }, "strip", z.ZodTypeAny, {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    }, {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    }>>;
    'affine:note': z.ZodDefault<z.ZodObject<{
        background: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").NoteBackgroundColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        displayMode: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").NoteDisplayMode>;
        edgeless: z.ZodObject<{
            style: z.ZodObject<{
                borderRadius: z.ZodNumber;
                borderSize: z.ZodNumber;
                borderStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
                shadowType: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").NoteShadow>;
            }, "strip", z.ZodTypeAny, {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            }, {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            }>;
        }, "strip", z.ZodTypeAny, {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        }, {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@blocksuite/affine-model").NoteBackgroundColor;
        displayMode: import("@blocksuite/affine-model").NoteDisplayMode;
    }, {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@blocksuite/affine-model").NoteBackgroundColor;
        displayMode: import("@blocksuite/affine-model").NoteDisplayMode;
    }>>;
    'shape:diamond': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }>>;
    'shape:ellipse': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }>>;
    'shape:rect': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }>>;
    'shape:triangle': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }>>;
    'shape:roundedRect': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@blocksuite/affine-model").LineColor>, z.ZodUnion<[z.ZodObject<{
            normal: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            normal: string;
        }, {
            normal: string;
        }>, z.ZodObject<{
            light: z.ZodString;
            dark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            light: string;
            dark: string;
        }, {
            light: string;
            dark: string;
        }>]>]>;
        strokeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").FontStyle>;
        textAlign: z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof import("@blocksuite/affine-model").TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    text: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    };
    'affine:edgeless-text': {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    };
    'affine:note': {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@blocksuite/affine-model").NoteBackgroundColor;
        displayMode: import("@blocksuite/affine-model").NoteDisplayMode;
    };
    connector: {
        mode: import("@blocksuite/affine-model").ConnectorMode;
        frontEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        rearEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        stroke: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: import("@blocksuite/affine-model").LineWidth;
        rough: boolean;
    };
    brush: {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: import("@blocksuite/affine-model").LineWidth;
    };
    mindmap: {
        style: import("@blocksuite/affine-model").MindmapStyle;
        layoutType: import("@blocksuite/affine-model").LayoutType;
    };
    'shape:diamond': {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    };
    'shape:ellipse': {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    };
    'shape:rect': {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    };
    'shape:triangle': {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    };
    'shape:roundedRect': {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    };
}, {
    text?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    } | undefined;
    'affine:edgeless-text'?: {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
    } | undefined;
    'affine:note'?: {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: import("@blocksuite/affine-model").StrokeStyle;
                shadowType: import("@blocksuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@blocksuite/affine-model").NoteBackgroundColor;
        displayMode: import("@blocksuite/affine-model").NoteDisplayMode;
    } | undefined;
    connector?: {
        mode: import("@blocksuite/affine-model").ConnectorMode;
        frontEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        rearEndpointStyle: import("@blocksuite/affine-model").PointStyle;
        stroke: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: import("@blocksuite/affine-model").LineWidth;
        rough: boolean;
    } | undefined;
    brush?: {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: import("@blocksuite/affine-model").LineWidth;
    } | undefined;
    mindmap?: {
        style: import("@blocksuite/affine-model").MindmapStyle;
        layoutType: import("@blocksuite/affine-model").LayoutType;
    } | undefined;
    'shape:diamond'?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    } | undefined;
    'shape:ellipse'?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    } | undefined;
    'shape:rect'?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    } | undefined;
    'shape:triangle'?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    } | undefined;
    'shape:roundedRect'?: {
        fontSize: number;
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: import("@blocksuite/affine-model").FontFamily;
        fontStyle: import("@blocksuite/affine-model").FontStyle;
        fontWeight: import("@blocksuite/affine-model").FontWeight;
        textAlign: import("@blocksuite/affine-model").TextAlign;
        strokeStyle: import("@blocksuite/affine-model").StrokeStyle;
        strokeWidth: number;
        fillColor: import("@blocksuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: import("@blocksuite/affine-model").ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: import("@blocksuite/affine-model").TextAlign | undefined;
        textVerticalAlign?: import("@blocksuite/affine-model").TextVerticalAlign | undefined;
    } | undefined;
}>;
export type EditorSetting = z.infer<typeof EditorSettingSchema>;
//# sourceMappingURL=editor-settings.d.ts.map