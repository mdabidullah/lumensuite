import type { BlockService } from '@blocksuite/block-std';
import { NodePropsSchema } from '@blocksuite/affine-shared/utils';
import { Slot } from '@blocksuite/global/utils';
import { type Signal } from '@lit-labs/preact-signals';
import { z } from 'zod';
export type LastProps = z.infer<typeof NodePropsSchema>;
export type LastPropsKey = keyof LastProps;
declare const SessionPropsSchema: z.ZodObject<{
    viewport: z.ZodUnion<[z.ZodObject<{
        centerX: z.ZodNumber;
        centerY: z.ZodNumber;
        zoom: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        centerX: number;
        centerY: number;
        zoom: number;
    }, {
        centerX: number;
        centerY: number;
        zoom: number;
    }>, z.ZodObject<{
        xywh: z.ZodString;
        padding: z.ZodOptional<z.ZodTuple<[z.ZodNumber, z.ZodNumber, z.ZodNumber, z.ZodNumber], null>>;
    }, "strip", z.ZodTypeAny, {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    }, {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    }>]>;
    templateCache: z.ZodString;
    remoteColor: z.ZodString;
    showBidirectional: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    remoteColor: string;
    viewport: {
        centerX: number;
        centerY: number;
        zoom: number;
    } | {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    };
    templateCache: string;
    showBidirectional: boolean;
}, {
    remoteColor: string;
    viewport: {
        centerX: number;
        centerY: number;
        zoom: number;
    } | {
        xywh: string;
        padding?: [number, number, number, number] | undefined;
    };
    templateCache: string;
    showBidirectional: boolean;
}>;
declare const LocalPropsSchema: z.ZodObject<{
    presentBlackBackground: z.ZodBoolean;
    presentFillScreen: z.ZodBoolean;
    presentHideToolbar: z.ZodBoolean;
    autoHideEmbedHTMLFullScreenToolbar: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    presentBlackBackground: boolean;
    presentFillScreen: boolean;
    presentHideToolbar: boolean;
    autoHideEmbedHTMLFullScreenToolbar: boolean;
}, {
    presentBlackBackground: boolean;
    presentFillScreen: boolean;
    presentHideToolbar: boolean;
    autoHideEmbedHTMLFullScreenToolbar: boolean;
}>;
type SessionProps = z.infer<typeof SessionPropsSchema>;
type LocalProps = z.infer<typeof LocalPropsSchema>;
type StorageProps = SessionProps & LocalProps;
type StoragePropsKey = keyof StorageProps;
export type SerializedViewport = z.infer<typeof SessionPropsSchema.shape.viewport>;
export declare class EditPropsStore {
    private _service;
    private _disposables;
    private innerProps$;
    lastProps$: Signal<LastProps>;
    slots: {
        storageUpdated: Slot<{
            key: StoragePropsKey;
            value: StorageProps[StoragePropsKey];
        }>;
    };
    constructor(_service: BlockService);
    private _getStorage;
    private _getStorageKey;
    applyLastProps(key: LastPropsKey, props: Record<string, unknown>): ({
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
    } | {
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
    } | {
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
    } | {
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
    } | {
        color: import("@blocksuite/affine-model").LineColor | {
            normal: string;
        } | {
            light: string;
            dark: string;
        };
        lineWidth: import("@blocksuite/affine-model").LineWidth;
    } | {
        style: import("@blocksuite/affine-model").MindmapStyle;
        layoutType: import("@blocksuite/affine-model").LayoutType;
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    }) & Record<string, unknown>;
    dispose(): void;
    getStorage<T extends StoragePropsKey>(key: T): StorageProps[T] | null;
    recordLastProps(key: LastPropsKey, props: Partial<LastProps[LastPropsKey]>): void;
    setStorage<T extends StoragePropsKey>(key: T, value: StorageProps[T]): void;
}
export declare function getLastPropsKey(modelType: BlockSuite.EdgelessModelKeys, modelProps: Partial<LastProps[LastPropsKey]>): LastPropsKey | null;
export {};
//# sourceMappingURL=edit-session.d.ts.map