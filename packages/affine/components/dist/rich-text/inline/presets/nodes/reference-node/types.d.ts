import type { ReferenceInfo } from '@blocksuite/affine-model';
import type { Slot } from '@blocksuite/global/utils';
export type RefNodeSlots = {
    docLinkClicked: Slot<ReferenceInfo>;
    tagClicked: Slot<{
        tagId: string;
    }>;
};
//# sourceMappingURL=types.d.ts.map