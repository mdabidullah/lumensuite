import { ConnectorMode, FontFamily, FontStyle, FontWeight, LayoutType, LineColor, LineWidth, MindmapStyle, NoteDisplayMode, PointStyle, ShapeStyle, StrokeStyle, TextAlign, TextVerticalAlign } from '@lumensuite/affine-model';
import { z } from 'zod';
export declare const ColorSchema: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export declare const ConnectorSchema: z.ZodDefault<z.ZodObject<{
    frontEndpointStyle: z.ZodNativeEnum<typeof PointStyle>;
    rearEndpointStyle: z.ZodNativeEnum<typeof PointStyle>;
    stroke: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
    strokeWidth: z.ZodNativeEnum<typeof LineWidth>;
    rough: z.ZodBoolean;
    mode: z.ZodNativeEnum<typeof ConnectorMode>;
}, "strip", z.ZodTypeAny, {
    mode: ConnectorMode;
    frontEndpointStyle: PointStyle;
    rearEndpointStyle: PointStyle;
    stroke: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeStyle: StrokeStyle;
    strokeWidth: LineWidth;
    rough: boolean;
}, {
    mode: ConnectorMode;
    frontEndpointStyle: PointStyle;
    rearEndpointStyle: PointStyle;
    stroke: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeStyle: StrokeStyle;
    strokeWidth: LineWidth;
    rough: boolean;
}>>;
export declare const BrushSchema: z.ZodDefault<z.ZodObject<{
    color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    lineWidth: z.ZodNativeEnum<typeof LineWidth>;
}, "strip", z.ZodTypeAny, {
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    lineWidth: LineWidth;
}, {
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    lineWidth: LineWidth;
}>>;
export declare const ShapeSchema: z.ZodDefault<z.ZodObject<{
    color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
    strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
    strokeWidth: z.ZodNumber;
    shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
    filled: z.ZodBoolean;
    radius: z.ZodNumber;
    fontSize: z.ZodNumber;
    fontFamily: z.ZodNativeEnum<typeof FontFamily>;
    fontWeight: z.ZodNativeEnum<typeof FontWeight>;
    fontStyle: z.ZodNativeEnum<typeof FontStyle>;
    textAlign: z.ZodNativeEnum<typeof TextAlign>;
    textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
    textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
    roughness: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    strokeStyle: StrokeStyle;
    strokeWidth: number;
    fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeColor: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    shapeStyle: ShapeStyle;
    filled: boolean;
    radius: number;
    roughness: number;
    textHorizontalAlign?: TextAlign | undefined;
    textVerticalAlign?: TextVerticalAlign | undefined;
}, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    strokeStyle: StrokeStyle;
    strokeWidth: number;
    fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeColor: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    shapeStyle: ShapeStyle;
    filled: boolean;
    radius: number;
    roughness: number;
    textHorizontalAlign?: TextAlign | undefined;
    textVerticalAlign?: TextVerticalAlign | undefined;
}>>;
export declare const RoundedShapeSchema: z.ZodDefault<z.ZodObject<{
    color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
    strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
    strokeWidth: z.ZodNumber;
    shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
    filled: z.ZodBoolean;
    radius: z.ZodNumber;
    fontSize: z.ZodNumber;
    fontFamily: z.ZodNativeEnum<typeof FontFamily>;
    fontWeight: z.ZodNativeEnum<typeof FontWeight>;
    fontStyle: z.ZodNativeEnum<typeof FontStyle>;
    textAlign: z.ZodNativeEnum<typeof TextAlign>;
    textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
    textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
    roughness: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    strokeStyle: StrokeStyle;
    strokeWidth: number;
    fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeColor: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    shapeStyle: ShapeStyle;
    filled: boolean;
    radius: number;
    roughness: number;
    textHorizontalAlign?: TextAlign | undefined;
    textVerticalAlign?: TextVerticalAlign | undefined;
}, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
    strokeStyle: StrokeStyle;
    strokeWidth: number;
    fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    strokeColor: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    shapeStyle: ShapeStyle;
    filled: boolean;
    radius: number;
    roughness: number;
    textHorizontalAlign?: TextAlign | undefined;
    textVerticalAlign?: TextVerticalAlign | undefined;
}>>;
export declare const TextSchema: z.ZodDefault<z.ZodObject<{
    color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    fontFamily: z.ZodNativeEnum<typeof FontFamily>;
    textAlign: z.ZodNativeEnum<typeof TextAlign>;
    fontWeight: z.ZodNativeEnum<typeof FontWeight>;
    fontStyle: z.ZodNativeEnum<typeof FontStyle>;
    fontSize: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
}, {
    fontSize: number;
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
}>>;
export declare const EdgelessTextSchema: z.ZodDefault<z.ZodObject<{
    color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
    fontFamily: z.ZodNativeEnum<typeof FontFamily>;
    textAlign: z.ZodNativeEnum<typeof TextAlign>;
    fontWeight: z.ZodNativeEnum<typeof FontWeight>;
    fontStyle: z.ZodNativeEnum<typeof FontStyle>;
}, "strip", z.ZodTypeAny, {
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
}, {
    color: LineColor | {
        normal: string;
    } | {
        light: string;
        dark: string;
    };
    fontFamily: FontFamily;
    fontStyle: FontStyle;
    fontWeight: FontWeight;
    textAlign: TextAlign;
}>>;
export declare const NoteSchema: z.ZodDefault<z.ZodObject<{
    background: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").NoteBackgroundColor>, z.ZodUnion<[z.ZodObject<{
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
    displayMode: z.ZodNativeEnum<typeof NoteDisplayMode>;
    edgeless: z.ZodObject<{
        style: z.ZodObject<{
            borderRadius: z.ZodNumber;
            borderSize: z.ZodNumber;
            borderStyle: z.ZodNativeEnum<typeof StrokeStyle>;
            shadowType: z.ZodNativeEnum<typeof import("@lumensuite/affine-model").NoteShadow>;
        }, "strip", z.ZodTypeAny, {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        }, {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        }>;
    }, "strip", z.ZodTypeAny, {
        style: {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        };
    }, {
        style: {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    edgeless: {
        style: {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        };
    };
    background: {
        normal: string;
    } | {
        light: string;
        dark: string;
    } | import("@lumensuite/affine-model").NoteBackgroundColor;
    displayMode: NoteDisplayMode;
}, {
    edgeless: {
        style: {
            borderRadius: number;
            borderSize: number;
            borderStyle: StrokeStyle;
            shadowType: import("@lumensuite/affine-model").NoteShadow;
        };
    };
    background: {
        normal: string;
    } | {
        light: string;
        dark: string;
    } | import("@lumensuite/affine-model").NoteBackgroundColor;
    displayMode: NoteDisplayMode;
}>>;
export declare const MindmapSchema: z.ZodDefault<z.ZodObject<{
    layoutType: z.ZodNativeEnum<typeof LayoutType>;
    style: z.ZodNativeEnum<typeof MindmapStyle>;
}, "strip", z.ZodTypeAny, {
    style: MindmapStyle;
    layoutType: LayoutType;
}, {
    style: MindmapStyle;
    layoutType: LayoutType;
}>>;
export declare const NodePropsSchema: z.ZodObject<{
    connector: z.ZodDefault<z.ZodObject<{
        frontEndpointStyle: z.ZodNativeEnum<typeof PointStyle>;
        rearEndpointStyle: z.ZodNativeEnum<typeof PointStyle>;
        stroke: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNativeEnum<typeof LineWidth>;
        rough: z.ZodBoolean;
        mode: z.ZodNativeEnum<typeof ConnectorMode>;
    }, "strip", z.ZodTypeAny, {
        mode: ConnectorMode;
        frontEndpointStyle: PointStyle;
        rearEndpointStyle: PointStyle;
        stroke: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: StrokeStyle;
        strokeWidth: LineWidth;
        rough: boolean;
    }, {
        mode: ConnectorMode;
        frontEndpointStyle: PointStyle;
        rearEndpointStyle: PointStyle;
        stroke: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: StrokeStyle;
        strokeWidth: LineWidth;
        rough: boolean;
    }>>;
    brush: z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        lineWidth: z.ZodNativeEnum<typeof LineWidth>;
    }, "strip", z.ZodTypeAny, {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: LineWidth;
    }, {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: LineWidth;
    }>>;
    text: z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        fontSize: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }>>;
    mindmap: z.ZodDefault<z.ZodObject<{
        layoutType: z.ZodNativeEnum<typeof LayoutType>;
        style: z.ZodNativeEnum<typeof MindmapStyle>;
    }, "strip", z.ZodTypeAny, {
        style: MindmapStyle;
        layoutType: LayoutType;
    }, {
        style: MindmapStyle;
        layoutType: LayoutType;
    }>>;
    'affine:edgeless-text': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
    }, "strip", z.ZodTypeAny, {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }, {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    }>>;
    'affine:note': z.ZodDefault<z.ZodObject<{
        background: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").NoteBackgroundColor>, z.ZodUnion<[z.ZodObject<{
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
        displayMode: z.ZodNativeEnum<typeof NoteDisplayMode>;
        edgeless: z.ZodObject<{
            style: z.ZodObject<{
                borderRadius: z.ZodNumber;
                borderSize: z.ZodNumber;
                borderStyle: z.ZodNativeEnum<typeof StrokeStyle>;
                shadowType: z.ZodNativeEnum<typeof import("@lumensuite/affine-model").NoteShadow>;
            }, "strip", z.ZodTypeAny, {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            }, {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            }>;
        }, "strip", z.ZodTypeAny, {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        }, {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@lumensuite/affine-model").NoteBackgroundColor;
        displayMode: NoteDisplayMode;
    }, {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@lumensuite/affine-model").NoteBackgroundColor;
        displayMode: NoteDisplayMode;
    }>>;
    'shape:diamond': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>>;
    'shape:ellipse': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>>;
    'shape:rect': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>>;
    'shape:triangle': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>>;
    'shape:roundedRect': z.ZodDefault<z.ZodObject<{
        color: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        fillColor: z.ZodUnion<[z.ZodNativeEnum<typeof import("@lumensuite/affine-model").ShapeFillColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeColor: z.ZodUnion<[z.ZodNativeEnum<typeof LineColor>, z.ZodUnion<[z.ZodObject<{
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
        strokeStyle: z.ZodNativeEnum<typeof StrokeStyle>;
        strokeWidth: z.ZodNumber;
        shapeStyle: z.ZodNativeEnum<typeof ShapeStyle>;
        filled: z.ZodBoolean;
        radius: z.ZodNumber;
        fontSize: z.ZodNumber;
        fontFamily: z.ZodNativeEnum<typeof FontFamily>;
        fontWeight: z.ZodNativeEnum<typeof FontWeight>;
        fontStyle: z.ZodNativeEnum<typeof FontStyle>;
        textAlign: z.ZodNativeEnum<typeof TextAlign>;
        textHorizontalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextAlign>>;
        textVerticalAlign: z.ZodOptional<z.ZodNativeEnum<typeof TextVerticalAlign>>;
        roughness: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }, {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    text: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    };
    'affine:edgeless-text': {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    };
    'affine:note': {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@lumensuite/affine-model").NoteBackgroundColor;
        displayMode: NoteDisplayMode;
    };
    connector: {
        mode: ConnectorMode;
        frontEndpointStyle: PointStyle;
        rearEndpointStyle: PointStyle;
        stroke: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: StrokeStyle;
        strokeWidth: LineWidth;
        rough: boolean;
    };
    brush: {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: LineWidth;
    };
    mindmap: {
        style: MindmapStyle;
        layoutType: LayoutType;
    };
    'shape:diamond': {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
    'shape:ellipse': {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
    'shape:rect': {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
    'shape:triangle': {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
    'shape:roundedRect': {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    };
}, {
    text?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    } | undefined;
    'affine:edgeless-text'?: {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
    } | undefined;
    'affine:note'?: {
        edgeless: {
            style: {
                borderRadius: number;
                borderSize: number;
                borderStyle: StrokeStyle;
                shadowType: import("@lumensuite/affine-model").NoteShadow;
            };
        };
        background: {
            normal: string;
        } | {
            light: string;
            dark: string;
        } | import("@lumensuite/affine-model").NoteBackgroundColor;
        displayMode: NoteDisplayMode;
    } | undefined;
    connector?: {
        mode: ConnectorMode;
        frontEndpointStyle: PointStyle;
        rearEndpointStyle: PointStyle;
        stroke: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeStyle: StrokeStyle;
        strokeWidth: LineWidth;
        rough: boolean;
    } | undefined;
    brush?: {
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: LineWidth;
    } | undefined;
    mindmap?: {
        style: MindmapStyle;
        layoutType: LayoutType;
    } | undefined;
    'shape:diamond'?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    } | undefined;
    'shape:ellipse'?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    } | undefined;
    'shape:rect'?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    } | undefined;
    'shape:triangle'?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    } | undefined;
    'shape:roundedRect'?: {
        fontSize: number;
        color: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        fontFamily: FontFamily;
        fontStyle: FontStyle;
        fontWeight: FontWeight;
        textAlign: TextAlign;
        strokeStyle: StrokeStyle;
        strokeWidth: number;
        fillColor: import("@lumensuite/affine-model").ShapeFillColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        strokeColor: LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        shapeStyle: ShapeStyle;
        filled: boolean;
        radius: number;
        roughness: number;
        textHorizontalAlign?: TextAlign | undefined;
        textVerticalAlign?: TextVerticalAlign | undefined;
    } | undefined;
}>;
export type NodeProps = z.infer<typeof NodePropsSchema>;
//# sourceMappingURL=zod-schema.d.ts.map