import { Slot } from '@blocksuite/store';
import type { Viewport } from '../../_common/utils/index.js';
import { RootService } from '../root-service.js';
export declare class PageRootService extends RootService {
    static readonly flavour: "affine:page";
    slots: {
        docLinkClicked: Slot<{
            pageId: string;
            params?: {
                mode?: "page" | "edgeless" | undefined;
                blockIds?: string[] | undefined;
                elementIds?: string[] | undefined;
            } | undefined;
        }>;
        tagClicked: Slot<{
            tagId: string;
        }>;
        viewportUpdated: Slot<Viewport>;
    };
}
//# sourceMappingURL=page-root-service.d.ts.map