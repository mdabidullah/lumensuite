import { GfxLocalElementModel } from '@lumensuite/block-std/gfx';
import { ConnectorMode, DEFAULT_ROUGHNESS, StrokeStyle, } from '../../consts/index.js';
export class LocalConnectorElementModel extends GfxLocalElementModel {
    constructor() {
        super(...arguments);
        this._path = [];
        this.absolutePath = [];
        this.id = '';
        this.mode = ConnectorMode.Orthogonal;
        this.rotate = 0;
        this.roughness = DEFAULT_ROUGHNESS;
        this.seed = Math.random();
        this.source = {
            position: [0, 0],
        };
        this.stroke = '#000000';
        this.strokeStyle = StrokeStyle.Solid;
        this.strokeWidth = 4;
        this.target = {
            position: [0, 0],
        };
        this.updatingPath = false;
        this.xywh = '[0,0,0,0]';
    }
    get path() {
        return this._path;
    }
    set path(value) {
        const { x, y } = this;
        this._path = value;
        this.absolutePath = value.map(p => p.clone().setVec([p[0] + x, p[1] + y]));
    }
    get type() {
        return 'connector';
    }
}
//# sourceMappingURL=local-connector.js.map