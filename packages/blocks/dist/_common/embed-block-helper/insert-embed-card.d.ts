import type { EmbedCardStyle } from '@lumensuite/affine-model';
import type { BlockStdScope } from '@lumensuite/block-std';
interface EmbedCardProperties {
    flavour: string;
    targetStyle: EmbedCardStyle;
    props: Record<string, unknown>;
}
export declare function insertEmbedCard(std: BlockStdScope, properties: EmbedCardProperties): void;
export {};
//# sourceMappingURL=insert-embed-card.d.ts.map