import { ConnectorMode, FontFamily, FontWeight, LineColor, MindmapStyle, ShapeFillColor, StrokeStyle, } from '@blocksuite/affine-model';
import { last } from '@blocksuite/global/utils';
import { fitContent } from '../../../renderer/elements/shape/utils.js';
export class MindmapStyleGetter {
}
export class StyleOne extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colorOrders = [
            LineColor.Purple,
            LineColor.Magenta,
            LineColor.Orange,
            LineColor.Yellow,
            LineColor.Green,
            '#7ae2d5',
        ];
        this.root = {
            radius: 8,
            strokeWidth: 4,
            strokeColor: '#84CFFF',
            fontFamily: FontFamily.Poppins,
            fontSize: 20,
            fontWeight: FontWeight.SemiBold,
            color: '--affine-black',
            filled: true,
            fillColor: '--affine-white',
            padding: [11, 22],
            shadow: {
                offsetX: 0,
                offsetY: 6,
                blur: 12,
                color: 'rgba(0, 0, 0, 0.14)',
            },
        };
    }
    _getColor(number) {
        return this._colorOrders[number % this._colorOrders.length];
    }
    getNodeStyle(_, path) {
        const color = this._getColor(path[1] ?? 0);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: color,
                strokeWidth: 3,
                mode: ConnectorMode.Curve,
            },
            node: {
                radius: 8,
                strokeWidth: 3,
                strokeColor: color,
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.Medium,
                color: '--affine-black',
                filled: true,
                fillColor: '--affine-white',
                padding: [6, 22],
                shadow: {
                    offsetX: 0,
                    offsetY: 6,
                    blur: 12,
                    color: 'rgba(0, 0, 0, 0.14)',
                },
            },
        };
    }
}
export const styleOne = new StyleOne();
export class StyleTwo extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colorOrders = [
            ShapeFillColor.Blue,
            '#7ae2d5',
            ShapeFillColor.Yellow,
        ];
        this.root = {
            radius: 3,
            strokeWidth: 3,
            strokeColor: '--affine-black',
            fontFamily: FontFamily.Poppins,
            fontSize: 18,
            fontWeight: FontWeight.SemiBold,
            color: ShapeFillColor.Black,
            filled: true,
            fillColor: ShapeFillColor.Orange,
            padding: [11, 22],
            shadow: {
                blur: 0,
                offsetX: 3,
                offsetY: 3,
                color: '--affine-black',
            },
        };
    }
    _getColor(number) {
        return number >= this._colorOrders.length
            ? last(this._colorOrders)
            : this._colorOrders[number];
    }
    getNodeStyle(_, path) {
        const color = this._getColor(path.length - 2);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: '--affine-black',
                strokeWidth: 3,
                mode: ConnectorMode.Orthogonal,
            },
            node: {
                radius: 3,
                strokeWidth: 3,
                strokeColor: '--affine-black',
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.SemiBold,
                color: ShapeFillColor.Black,
                filled: true,
                fillColor: color,
                padding: [6, 22],
                shadow: {
                    blur: 0,
                    offsetX: 3,
                    offsetY: 3,
                    color: '--affine-black',
                },
            },
        };
    }
}
export const styleTwo = new StyleTwo();
export class StyleThree extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._strokeColor = [LineColor.Yellow, LineColor.Green, LineColor.Teal];
        this.root = {
            radius: 10,
            strokeWidth: 0,
            strokeColor: 'transparent',
            fontFamily: FontFamily.Poppins,
            fontSize: 16,
            fontWeight: FontWeight.Medium,
            color: ShapeFillColor.Black,
            filled: true,
            fillColor: ShapeFillColor.Yellow,
            padding: [10, 22],
            shadow: {
                blur: 12,
                offsetX: 0,
                offsetY: 0,
                color: 'rgba(66, 65, 73, 0.18)',
            },
        };
    }
    _getColor(number) {
        return this._strokeColor[number % this._strokeColor.length];
    }
    getNodeStyle(_, path) {
        const strokeColor = this._getColor(path.length - 2);
        return {
            node: {
                radius: 10,
                strokeWidth: 0,
                strokeColor: 'transparent',
                fontFamily: FontFamily.Poppins,
                fontSize: 16,
                fontWeight: FontWeight.Medium,
                color: ShapeFillColor.Black,
                filled: true,
                fillColor: ShapeFillColor.White,
                padding: [6, 22],
                shadow: {
                    blur: 12,
                    offsetX: 0,
                    offsetY: 0,
                    color: 'rgba(66, 65, 73, 0.18)',
                },
            },
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke: strokeColor,
                strokeWidth: 2,
                mode: ConnectorMode.Curve,
            },
        };
    }
}
export const styleThree = new StyleThree();
export class StyleFour extends MindmapStyleGetter {
    constructor() {
        super(...arguments);
        this._colors = [
            ShapeFillColor.Purple,
            ShapeFillColor.Magenta,
            ShapeFillColor.Orange,
            ShapeFillColor.Yellow,
            ShapeFillColor.Green,
            ShapeFillColor.Blue,
        ];
        this.root = {
            radius: 0,
            strokeWidth: 0,
            strokeColor: 'transparent',
            fontFamily: FontFamily.Kalam,
            fontSize: 22,
            fontWeight: FontWeight.Bold,
            color: '--affine-black',
            filled: true,
            fillColor: 'transparent',
            padding: [0, 10],
        };
    }
    _getColor(order) {
        return this._colors[order % this._colors.length];
    }
    getNodeStyle(_, path) {
        const stroke = this._getColor(path[1] ?? 0);
        return {
            connector: {
                strokeStyle: StrokeStyle.Solid,
                stroke,
                strokeWidth: 3,
                mode: ConnectorMode.Curve,
            },
            node: {
                ...this.root,
                fontSize: 18,
                padding: [1.5, 10],
            },
        };
    }
}
export const styleFour = new StyleFour();
export const mindmapStyleGetters = {
    [MindmapStyle.ONE]: styleOne,
    [MindmapStyle.TWO]: styleTwo,
    [MindmapStyle.THREE]: styleThree,
    [MindmapStyle.FOUR]: styleFour,
};
export const applyNodeStyle = (node, nodeStyle, shouldFitContent = false) => {
    Object.entries(nodeStyle).forEach(([key, value]) => {
        // @ts-ignore
        if (node.element[key] !== value) {
            // @ts-ignore
            node.element[key] = value;
        }
    });
    shouldFitContent && fitContent(node.element);
};
//# sourceMappingURL=style.js.map