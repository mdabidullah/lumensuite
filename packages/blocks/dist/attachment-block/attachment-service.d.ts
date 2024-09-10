import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import type { RootBlockComponent } from '../root-block/types.js';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
export declare class AttachmentBlockService extends BlockService {
    static readonly flavour: "affine:attachment";
    private _dragHandleOption;
    private _fileDropOptions;
    fileDropManager: FileDropManager;
    maxFileSize: number;
    slots: {
        onFilesDropped: Slot<File[]>;
    };
    get rootComponent(): RootBlockComponent | null;
    mounted(): void;
}
//# sourceMappingURL=attachment-service.d.ts.map