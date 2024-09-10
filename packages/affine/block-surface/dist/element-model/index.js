import { BrushElementModel, ConnectorElementModel, GroupElementModel, ShapeElementModel, TextElementModel, } from '@blocksuite/affine-model';
import { SurfaceElementModel } from './base.js';
import { MindmapElementModel } from './mindmap.js';
export const elementsCtorMap = {
    group: GroupElementModel,
    connector: ConnectorElementModel,
    shape: ShapeElementModel,
    brush: BrushElementModel,
    text: TextElementModel,
    mindmap: MindmapElementModel,
};
export { BrushElementModel, ConnectorElementModel, GroupElementModel, MindmapElementModel, ShapeElementModel, SurfaceElementModel, TextElementModel, };
export var CanvasElementType;
(function (CanvasElementType) {
    CanvasElementType["BRUSH"] = "brush";
    CanvasElementType["CONNECTOR"] = "connector";
    CanvasElementType["GROUP"] = "group";
    CanvasElementType["MINDMAP"] = "mindmap";
    CanvasElementType["SHAPE"] = "shape";
    CanvasElementType["TEXT"] = "text";
})(CanvasElementType || (CanvasElementType = {}));
export function isCanvasElementType(type) {
    return type.toLocaleUpperCase() in CanvasElementType;
}
//# sourceMappingURL=index.js.map