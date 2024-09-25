import { type ReferenceInfo, RootBlockSchema } from '@lumensuite/affine-model';
import { Slot } from '@lumensuite/store';

import type { Viewport } from '../../_common/utils/index.js';

import { RootService } from '../root-service.js';

export class PageRootService extends RootService {
  static override readonly flavour = RootBlockSchema.model.flavour;

  slots = {
    docLinkClicked: new Slot<ReferenceInfo>(),
    tagClicked: new Slot<{ tagId: string }>(),
    viewportUpdated: new Slot<Viewport>(),
  };
}
