import { BlockService } from '@blocksuite/block-std';
export declare class NoteBlockService extends BlockService {
    static readonly flavour: "affine:note";
    private _dragHandleOption;
    mounted(): void;
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:note': NoteBlockService;
        }
    }
}
//# sourceMappingURL=note-service.d.ts.map