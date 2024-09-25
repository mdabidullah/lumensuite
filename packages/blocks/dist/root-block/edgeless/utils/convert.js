import { deserializeXYWH } from '@lumensuite/global/utils';
export function xywhArrayToObject(element) {
    const [x, y, w, h] = deserializeXYWH(element.xywh);
    return { x, y, w, h };
}
//# sourceMappingURL=convert.js.map