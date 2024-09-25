import {
  BlockViewExtension,
  type ExtensionType,
  FlavourExtension,
} from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';

import './embed-edgeless-loom-bock.js';
import { EmbedLoomBlockService } from './embed-loom-service.js';

export const EmbedLoomBlockSpec: ExtensionType[] = [
  FlavourExtension('affine:embed-loom'),
  EmbedLoomBlockService,
  BlockViewExtension('affine:embed-loom', model => {
    return model.parent?.flavour === 'affine:surface'
      ? literal`affine-embed-edgeless-loom-block`
      : literal`affine-embed-loom-block`;
  }),
];
