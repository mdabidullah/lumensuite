import { BlockService } from '@lumensuite/block-std';
import { Slot } from '@lumensuite/store';
export declare class MindmapService extends BlockService {
    static readonly flavour: "affine:page";
    requestCenter: Slot<void>;
    center(): void;
    mounted(): void;
}
//# sourceMappingURL=service.d.ts.map