import type { SerializedElement } from '@lumensuite/block-std/gfx';
import { Bound } from '@lumensuite/global/utils';
import { type BlockSnapshot } from '@lumensuite/store';
export declare function edgelessElementsBound(elements: LumenSuite.EdgelessModel[]): Bound;
export declare function getBoundFromSerializedElement(element: SerializedElement): Bound;
export declare function getBoundFromGfxBlockSnapshot(snapshot: BlockSnapshot): Bound | null;
export declare function edgelessElementsBoundFromRawData(elementsRawData: (SerializedElement | BlockSnapshot)[]): Bound;
//# sourceMappingURL=bound-utils.d.ts.map