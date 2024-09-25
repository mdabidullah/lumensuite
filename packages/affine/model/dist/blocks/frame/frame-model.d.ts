import { type GfxBlockElementModel, type GfxContainerElement, gfxContainerSymbol, type GfxElementGeometry, type GfxModel, type PointTestOptions } from '@lumensuite/block-std/gfx';
import { Bound, type SerializedXYWH } from '@lumensuite/global/utils';
import { type Text } from '@lumensuite/store';
import type { Color } from '../../consts/index.js';
export type FrameBlockProps = {
    title: Text;
    background: Color;
    xywh: SerializedXYWH;
    index: string;
    childElementIds?: Record<string, boolean>;
};
export declare const FrameBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<FrameBlockProps>;
        flavour: "affine:frame";
    } & {
        version: number;
        role: "content";
        parent: string[];
        children: never[];
    };
    onUpgrade?: ((data: FrameBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<FrameBlockProps>) | undefined;
};
declare const FrameBlockModel_base: {
    new (): GfxBlockElementModel<FrameBlockProps>;
};
export declare class FrameBlockModel extends FrameBlockModel_base implements GfxElementGeometry, GfxContainerElement {
    [gfxContainerSymbol]: true;
    get childElements(): GfxModel[];
    get childIds(): string[];
    addChild(element: LumenSuite.EdgelessModel | string): void;
    containsBound(bound: Bound): boolean;
    hasDescendant(element: string | GfxModel): boolean;
    includesPoint(x: number, y: number, _: PointTestOptions): boolean;
    intersectsBound(selectedBound: Bound): boolean;
    removeChild(element: LumenSuite.EdgelessModel | string): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessBlockModelMap {
            'affine:frame': FrameBlockModel;
        }
        interface BlockModels {
            'affine:frame': FrameBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=frame-model.d.ts.map