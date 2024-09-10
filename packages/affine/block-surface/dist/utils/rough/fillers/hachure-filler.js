import { polygonHachureLines } from './scan-line-hachure.js';
export class HachureFiller {
    constructor(helper) {
        this.helper = helper;
    }
    _fillPolygons(polygonList, o) {
        const lines = polygonHachureLines(polygonList, o);
        const ops = this.renderLines(lines, o);
        return { type: 'fillSketch', ops };
    }
    fillPolygons(polygonList, o) {
        return this._fillPolygons(polygonList, o);
    }
    renderLines(lines, o) {
        const ops = [];
        for (const line of lines) {
            ops.push(...this.helper.doubleLineOps(line[0][0], line[0][1], line[1][0], line[1][1], o));
        }
        return ops;
    }
}
//# sourceMappingURL=hachure-filler.js.map