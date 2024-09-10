export class EdgelessToolController {
    get _blocks() {
        return this._edgeless.service.blocks;
    }
    get _doc() {
        return this._edgeless.doc;
    }
    get _surface() {
        return this._edgeless.surface;
    }
    get draggingArea() {
        return this._draggingArea;
    }
    constructor(service) {
        this._draggingArea = null;
        this.enableHover = false;
        this._service = service;
    }
    mount(edgeless) {
        this._edgeless = edgeless;
    }
}
//# sourceMappingURL=edgeless-tool.js.map