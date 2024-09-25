import { type ParagraphBlockModel } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
export declare class ParagraphBlockService extends BlockService {
    static readonly flavour: "affine:paragraph";
    placeholderGenerator: (model: ParagraphBlockModel) => string;
    mounted(): void;
}
//# sourceMappingURL=paragraph-service.d.ts.map