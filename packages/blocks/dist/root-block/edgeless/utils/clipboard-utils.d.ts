import type { EdgelessTextBlockModel, EmbedSyncedDocModel, FrameBlockModel, ImageBlockModel, NoteBlockModel } from '@lumensuite/affine-model';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare function duplicate(edgeless: EdgelessRootBlockComponent, elements: LumenSuite.EdgelessModel[], select?: boolean): Promise<void>;
export declare const splitElements: (elements: LumenSuite.EdgelessModel[]) => {
    notes: NoteBlockModel[];
    shapes: LumenSuite.SurfaceModel[];
    frames: FrameBlockModel[];
    images: ImageBlockModel[];
    edgelessTexts: EdgelessTextBlockModel[];
    embedSyncedDocs: EmbedSyncedDocModel[];
};
//# sourceMappingURL=clipboard-utils.d.ts.map