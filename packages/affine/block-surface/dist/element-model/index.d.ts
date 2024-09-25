import { BrushElementModel, ConnectorElementModel, GroupElementModel, ShapeElementModel, TextElementModel } from '@lumensuite/affine-model';
import { SurfaceElementModel } from './base.js';
import { MindmapElementModel } from './mindmap.js';
export declare const elementsCtorMap: {
    group: typeof GroupElementModel;
    connector: typeof ConnectorElementModel;
    shape: typeof ShapeElementModel;
    brush: typeof BrushElementModel;
    text: typeof TextElementModel;
    mindmap: typeof MindmapElementModel;
};
export { BrushElementModel, ConnectorElementModel, GroupElementModel, MindmapElementModel, ShapeElementModel, SurfaceElementModel, TextElementModel, };
export declare enum CanvasElementType {
    BRUSH = "brush",
    CONNECTOR = "connector",
    GROUP = "group",
    MINDMAP = "mindmap",
    SHAPE = "shape",
    TEXT = "text"
}
export type ElementModelMap = {
    ['shape']: ShapeElementModel;
    ['brush']: BrushElementModel;
    ['connector']: ConnectorElementModel;
    ['text']: TextElementModel;
    ['group']: GroupElementModel;
    ['mindmap']: MindmapElementModel;
};
export declare function isCanvasElementType(type: string): type is CanvasElementType;
//# sourceMappingURL=index.d.ts.map