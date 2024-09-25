import type { BlockSchema } from '@lumensuite/store';
import type { z } from 'zod';

import { SurfaceBlockSchema } from '@lumensuite/affine-block-surface';
import { RootBlockSchema } from '@lumensuite/affine-model';
import {
  BlockViewExtension,
  type ExtensionType,
  FlavourExtension,
} from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';

import { MindmapService } from './service.js';

export const MiniMindmapSpecs: ExtensionType[] = [
  FlavourExtension('affine:page'),
  MindmapService,
  BlockViewExtension('affine:page', literal`mini-mindmap-root-block`),

  FlavourExtension('affine:surface'),
  BlockViewExtension('affine:surface', literal`mini-mindmap-surface-block`),
];

export const MiniMindmapSchema: z.infer<typeof BlockSchema>[] = [
  RootBlockSchema,
  SurfaceBlockSchema,
];
