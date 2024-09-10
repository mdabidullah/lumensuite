import type { EdgelessTextBlockModel, EmbedSyncedDocModel, FrameBlockModel, ImageBlockModel, NoteBlockModel } from '@blocksuite/affine-model';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare function duplicate(edgeless: EdgelessRootBlockComponent, elements: BlockSuite.EdgelessModel[], select?: boolean): Promise<void>;
export declare const splitElements: (elements: BlockSuite.EdgelessModel[]) => {
    notes: NoteBlockModel[];
    shapes: BlockSuite.SurfaceModel[];
    frames: FrameBlockModel[];
    images: ImageBlockModel[];
    edgelessTexts: EdgelessTextBlockModel[];
    embedSyncedDocs: EmbedSyncedDocModel[];
};
//# sourceMappingURL=clipboard-utils.d.ts.map