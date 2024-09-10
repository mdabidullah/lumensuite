import { type ParagraphBlockModel } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
export declare class ParagraphBlockService extends BlockService {
    static readonly flavour: "affine:paragraph";
    placeholderGenerator: (model: ParagraphBlockModel) => string;
    mounted(): void;
}
//# sourceMappingURL=paragraph-service.d.ts.map