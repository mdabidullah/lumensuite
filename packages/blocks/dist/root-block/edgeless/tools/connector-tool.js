import { calculateNearestLocation, CanvasElementType, ConnectorEndpointLocations, ConnectorEndpointLocationsOnTriangle, } from '@lumensuite/affine-block-surface';
import { GroupElementModel, ShapeElementModel, ShapeType, } from '@lumensuite/affine-model';
import { TelemetryProvider } from '@lumensuite/affine-shared/services';
import { Bound, noop } from '@lumensuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
var ConnectorToolMode;
(function (ConnectorToolMode) {
    // Dragging connect
    ConnectorToolMode[ConnectorToolMode["Dragging"] = 0] = "Dragging";
    // Quick connect
    ConnectorToolMode[ConnectorToolMode["Quick"] = 1] = "Quick";
})(ConnectorToolMode || (ConnectorToolMode = {}));
export class ConnectorToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        // Likes pressing `ESC`
        this._allowCancel = false;
        this._connector = null;
        this._mode = ConnectorToolMode.Dragging;
        this._source = null;
        this._sourceBounds = null;
        this._sourceLocations = ConnectorEndpointLocations;
        this._startPoint = null;
        this.tool = {
            type: 'connector',
        };
    }
    get connector() {
        return this._edgeless.service.connectorOverlay;
    }
    _createConnector() {
        if (!(this._source && this._startPoint)) {
            this._source = null;
            this._startPoint = null;
            return;
        }
        this._doc.captureSync();
        const id = this._edgeless.service.addElement(CanvasElementType.CONNECTOR, {
            mode: this.tool.mode,
            controllers: [],
            source: this._source,
            target: { position: this._startPoint },
        });
        this._edgeless.std
            .getOptional(TelemetryProvider)
            ?.track('CanvasElementAdded', {
            control: 'canvas:draw',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: CanvasElementType.CONNECTOR,
        });
        const connector = this._edgeless.service.getElementById(id);
        if (!connector) {
            this._source = null;
            this._startPoint = null;
            return;
        }
        this._connector = connector;
    }
    afterModeSwitch() {
        noop();
    }
    beforeModeSwitch(edgelessTool) {
        if (edgelessTool.type === 'connector')
            return;
        const id = this._connector?.id;
        if (this._allowCancel && id) {
            this._edgeless.service.removeElement(id);
        }
        this._edgeless.service.overlays.connector.clear();
        this._mode = ConnectorToolMode.Dragging;
        this._connector = null;
        this._source = null;
        this._sourceBounds = null;
        this._startPoint = null;
        this._allowCancel = false;
    }
    findTargetByPoint(point) {
        if (!this._connector)
            return;
        const { _connector, _edgeless, _service: { viewport }, } = this;
        point = viewport.toModelCoord(point[0], point[1]);
        const excludedIds = [];
        if (_connector.source?.id) {
            excludedIds.push(_connector.source.id);
        }
        const target = this.connector.renderConnector(point, excludedIds);
        _edgeless.service.updateElement(_connector.id, { target });
    }
    onContainerClick() {
        if (this._mode === ConnectorToolMode.Dragging)
            return;
        if (!this._connector)
            return;
        const { id, source, target } = this._connector;
        let focusedId = id;
        if (source?.id && !target?.id) {
            focusedId = source.id;
            this._allowCancel = true;
        }
        this._edgeless.tools.switchToDefaultMode({
            elements: [focusedId],
            editing: false,
        });
    }
    onContainerContextMenu() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerDragEnd() {
        if (this._mode === ConnectorToolMode.Quick)
            return;
        if (!this._connector)
            return;
        this._doc.captureSync();
        this._edgeless.tools.switchToDefaultMode({
            elements: [this._connector.id],
            editing: false,
        });
    }
    onContainerDragMove(e) {
        this.findTargetByPoint([e.x, e.y]);
    }
    onContainerDragStart() {
        if (this._mode === ConnectorToolMode.Quick)
            return;
        this._createConnector();
    }
    onContainerMouseMove(e) {
        if (this._mode === ConnectorToolMode.Dragging)
            return;
        if (!this._sourceBounds)
            return;
        if (!this._connector)
            return;
        const sourceId = this._connector.source?.id;
        if (!sourceId)
            return;
        const point = this._service.viewport.toModelCoord(e.x, e.y);
        const target = this.connector.renderConnector(point, [sourceId]);
        this._allowCancel = !target.id;
        this._connector.source.position = calculateNearestLocation(point, this._sourceBounds, this._sourceLocations);
        this._edgeless.service.updateElement(this._connector.id, {
            target,
            source: this._connector.source,
        });
    }
    onContainerMouseOut() {
        noop();
    }
    onContainerPointerDown(e) {
        this._startPoint = this._service.viewport.toModelCoord(e.x, e.y);
        this._source = this.connector.renderConnector(this._startPoint);
    }
    onContainerTripleClick() {
        noop();
    }
    onPressShiftKey(_) {
        noop();
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
    quickConnect(point, element) {
        this._startPoint = this._service.viewport.toModelCoord(point[0], point[1]);
        this._mode = ConnectorToolMode.Quick;
        this._sourceBounds = Bound.deserialize(element.xywh);
        this._sourceBounds.rotate = element.rotate;
        this._sourceLocations =
            element instanceof ShapeElementModel &&
                element.shapeType === ShapeType.Triangle
                ? ConnectorEndpointLocationsOnTriangle
                : ConnectorEndpointLocations;
        this._source = {
            id: element.id,
            position: calculateNearestLocation(this._startPoint, this._sourceBounds, this._sourceLocations),
        };
        this._allowCancel = true;
        this._createConnector();
        if (element instanceof GroupElementModel) {
            this.connector.sourceBounds = this._sourceBounds;
        }
        this.findTargetByPoint(point);
    }
}
//# sourceMappingURL=connector-tool.js.map