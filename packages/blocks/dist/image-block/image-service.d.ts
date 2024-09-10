import { BlockService } from '@blocksuite/block-std';
import type { RootBlockComponent } from '../root-block/types.js';
import { FileDropManager } from '../_common/components/file-drop-manager.js';
export declare class ImageBlockService extends BlockService {
    static readonly flavour: "affine:image";
    static setImageProxyURL: (url: string) => void;
    private _dragHandleOption;
    private _fileDropOptions;
    fileDropManager: FileDropManager;
    maxFileSize: number;
    get rootComponent(): RootBlockComponent | null;
    mounted(): void;
}
//# sourceMappingURL=image-service.d.ts.map