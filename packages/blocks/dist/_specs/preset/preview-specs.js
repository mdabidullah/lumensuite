import { EdgelessSurfaceBlockSpec, PageSurfaceBlockSpec, } from '@lumensuite/affine-block-surface';
import { DocModeService, EmbedOptionService, FontLoaderService, } from '@lumensuite/affine-shared/services';
import { BlockViewExtension, FlavourExtension, } from '@lumensuite/block-std';
import { literal } from 'lit/static-html.js';
import { EdgelessTextBlockSpec } from '../../edgeless-text-block/index.js';
import { FrameBlockSpec } from '../../frame-block/frame-spec.js';
import { LatexBlockSpec } from '../../latex-block/latex-spec.js';
import { PreviewEdgelessRootBlockSpec } from '../../root-block/edgeless/edgeless-root-spec.js';
import { PageRootService } from '../../root-block/page/page-root-service.js';
import { EdgelessSurfaceRefBlockSpec, PageSurfaceRefBlockSpec, } from '../../surface-ref-block/surface-ref-spec.js';
import { CommonFirstPartyBlockSpecs, EdgelessFirstPartyBlockSpecs, } from '../common.js';
const PreviewPageSpec = [
    FlavourExtension('affine:page'),
    PageRootService,
    DocModeService,
    EmbedOptionService,
    BlockViewExtension('affine:page', literal `affine-preview-root`),
];
export const PreviewEdgelessEditorBlockSpecs = [
    PreviewEdgelessRootBlockSpec,
    ...EdgelessFirstPartyBlockSpecs,
    EdgelessSurfaceBlockSpec,
    EdgelessSurfaceRefBlockSpec,
    FrameBlockSpec,
    EdgelessTextBlockSpec,
    LatexBlockSpec,
    FontLoaderService,
].flat();
export const PreviewEditorBlockSpecs = [
    PreviewPageSpec,
    ...CommonFirstPartyBlockSpecs,
    PageSurfaceBlockSpec,
    PageSurfaceRefBlockSpec,
    LatexBlockSpec,
    FontLoaderService,
].flat();
//# sourceMappingURL=preview-specs.js.map