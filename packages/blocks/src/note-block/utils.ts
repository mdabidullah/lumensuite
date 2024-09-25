import type { BlockComponent } from '@lumensuite/block-std';

export const ensureBlockInContainer = (
  block: BlockComponent,
  containerElement: BlockComponent
) => containerElement.contains(block) && block !== containerElement;
