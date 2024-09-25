import {
  BlockViewExtension,
  type ExtensionType,
  FlavourExtension,
} from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';

import { DividerBlockService } from './divider-service.js';

export const DividerBlockSpec: ExtensionType[] = [
  FlavourExtension('affine:divider'),
  DividerBlockService,
  BlockViewExtension('affine:divider', literal`affine-divider`),
];
