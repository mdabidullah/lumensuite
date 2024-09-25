import type { GfxModel } from '@lumensuite/block-std/gfx';

import { ConnectorElementModel } from '@lumensuite/affine-model';

export function isConnectorWithLabel(
  model: GfxModel | LumenSuite.SurfaceLocalModel
) {
  return model instanceof ConnectorElementModel && model.hasLabel();
}
