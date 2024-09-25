import { BlockService } from '@lumensuite/block-std';
import { getListIcon } from './utils/get-list-icon.js';
export declare class ListBlockService extends BlockService {
    static readonly flavour: "affine:list";
    readonly styles: {
        icon: typeof getListIcon;
        prefix: import("lit").CSSResult;
        toggle: import("lit").CSSResult;
    };
    mounted(): void;
}
//# sourceMappingURL=list-service.d.ts.map