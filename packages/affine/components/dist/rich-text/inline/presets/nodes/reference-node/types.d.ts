import type { ReferenceInfo } from '@lumensuite/affine-model';
import type { Slot } from '@lumensuite/global/utils';
export type RefNodeSlots = {
    docLinkClicked: Slot<ReferenceInfo>;
    tagClicked: Slot<{
        tagId: string;
    }>;
};
//# sourceMappingURL=types.d.ts.map