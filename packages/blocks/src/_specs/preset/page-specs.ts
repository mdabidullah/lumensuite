import type { ExtensionType } from '@lumensuite/block-std';

import { PageSurfaceBlockSpec } from '@lumensuite/affine-block-surface';
import { FontLoaderService } from '@lumensuite/affine-shared/services';

import { LatexBlockSpec } from '../../latex-block/latex-spec.js';
import { PageRootBlockSpec } from '../../root-block/page/page-root-spec.js';
import { PageSurfaceRefBlockSpec } from '../../surface-ref-block/surface-ref-spec.js';
import { CommonFirstPartyBlockSpecs } from '../common.js';

export const PageEditorBlockSpecs: ExtensionType[] = [
  PageRootBlockSpec,
  ...CommonFirstPartyBlockSpecs,
  PageSurfaceBlockSpec,
  PageSurfaceRefBlockSpec,
  LatexBlockSpec,
  FontLoaderService,
].flat();
