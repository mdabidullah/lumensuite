import { ConnectorMode, FontFamily, FontWeight, MindmapStyle, ShapeFillColor, StrokeStyle } from '@blocksuite/affine-model';
import type { MindmapNode } from './layout.js';
export type NodeStyle = {
    radius: number;
    strokeWidth: number;
    strokeColor: string;
    fontSize: number;
    fontFamily: string;
    fontWeight: FontWeight;
    color: string;
    filled: boolean;
    fillColor: string;
    padding: [number, number];
    shadow?: {
        blur: number;
        offsetX: number;
        offsetY: number;
        color: string;
    };
};
export type ConnectorStyle = {
    strokeStyle: StrokeStyle;
    stroke: string;
    strokeWidth: number;
    mode: ConnectorMode;
};
export declare abstract class MindmapStyleGetter {
    abstract readonly root: NodeStyle;
    abstract getNodeStyle(node: MindmapNode, path: number[]): {
        connector: ConnectorStyle;
        node: NodeStyle;
    };
}
export declare class StyleOne extends MindmapStyleGetter {
    private _colorOrders;
    readonly root: {
        radius: number;
        strokeWidth: number;
        strokeColor: string;
        fontFamily: FontFamily;
        fontSize: number;
        fontWeight: FontWeight;
        color: string;
        filled: boolean;
        fillColor: string;
        padding: [number, number];
        shadow: {
            offsetX: number;
            offsetY: number;
            blur: number;
            color: string;
        };
    };
    private _getColor;
    getNodeStyle(_: MindmapNode, path: number[]): {
        connector: ConnectorStyle;
        node: NodeStyle;
    };
}
export declare const styleOne: StyleOne;
export declare class StyleTwo extends MindmapStyleGetter {
    private _colorOrders;
    readonly root: {
        radius: number;
        strokeWidth: number;
        strokeColor: string;
        fontFamily: FontFamily;
        fontSize: number;
        fontWeight: FontWeight;
        color: ShapeFillColor;
        filled: boolean;
        fillColor: ShapeFillColor;
        padding: [number, number];
        shadow: {
            blur: number;
            offsetX: number;
            offsetY: number;
            color: string;
        };
    };
    private _getColor;
    getNodeStyle(_: MindmapNode, path: number[]): {
        connector: ConnectorStyle;
        node: NodeStyle;
    };
}
export declare const styleTwo: StyleTwo;
export declare class StyleThree extends MindmapStyleGetter {
    private _strokeColor;
    readonly root: {
        radius: number;
        strokeWidth: number;
        strokeColor: string;
        fontFamily: FontFamily;
        fontSize: number;
        fontWeight: FontWeight;
        color: ShapeFillColor;
        filled: boolean;
        fillColor: ShapeFillColor;
        padding: [number, number];
        shadow: {
            blur: number;
            offsetX: number;
            offsetY: number;
            color: string;
        };
    };
    private _getColor;
    getNodeStyle(_: MindmapNode, path: number[]): {
        connector: ConnectorStyle;
        node: NodeStyle;
    };
}
export declare const styleThree: StyleThree;
export declare class StyleFour extends MindmapStyleGetter {
    private _colors;
    readonly root: {
        radius: number;
        strokeWidth: number;
        strokeColor: string;
        fontFamily: FontFamily;
        fontSize: number;
        fontWeight: FontWeight;
        color: string;
        filled: boolean;
        fillColor: string;
        padding: [number, number];
    };
    private _getColor;
    getNodeStyle(_: MindmapNode, path: number[]): {
        connector: ConnectorStyle;
        node: NodeStyle;
    };
}
export declare const styleFour: StyleFour;
export declare const mindmapStyleGetters: {
    [key in MindmapStyle]: MindmapStyleGetter;
};
export declare const applyNodeStyle: (node: MindmapNode, nodeStyle: NodeStyle, shouldFitContent?: boolean) => void;
//# sourceMappingURL=style.d.ts.map