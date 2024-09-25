import type { SerializedXYWH } from '@lumensuite/global/utils';
import type { CanvasElementType } from '../element-model/index.js';
export interface ISurfaceElement {
    id: string;
    type: CanvasElementType;
    xywh: SerializedXYWH;
    index: string;
    seed: number;
    rotate: number;
    batch: string | null;
}
//# sourceMappingURL=surface-element.d.ts.map