import type { ReferenceInfo } from '@lumensuite/affine-model';
import type { Slot } from '@lumensuite/global/utils';

// TODO: remove these slots
export type RefNodeSlots = {
  docLinkClicked: Slot<ReferenceInfo>;
  tagClicked: Slot<{ tagId: string }>;
};
