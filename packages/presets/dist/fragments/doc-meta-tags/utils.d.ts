import type { AffineTextAttributes } from '@lumensuite/blocks';
import type { DocMeta } from '@lumensuite/store';
import type { TemplateResult } from 'lit';
export declare const DOC_BLOCK_CHILD_PADDING = 24;
export declare const DEFAULT_DOC_NAME = "Untitled";
export type BackLink = {
    pageId: string;
    blockId: string;
    type: NonNullable<AffineTextAttributes['reference']>['type'];
};
export type BacklinkData = BackLink & DocMeta & {
    jump: () => void;
    icon: TemplateResult;
};
//# sourceMappingURL=utils.d.ts.map