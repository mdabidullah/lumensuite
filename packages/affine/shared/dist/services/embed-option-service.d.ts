import type { EmbedCardStyle } from '@lumensuite/affine-model';
import type { Container } from '@lumensuite/global/di';
import { Extension } from '@lumensuite/block-std';
export type EmbedOptions = {
    flavour: string;
    urlRegex: RegExp;
    styles: EmbedCardStyle[];
    viewType: 'card' | 'embed';
};
export interface EmbedOptionProvider {
    getEmbedBlockOptions(url: string): EmbedOptions | null;
    registerEmbedBlockOptions(options: EmbedOptions): void;
}
export declare const EmbedOptionProvider: import("@lumensuite/global/di").ServiceIdentifier<EmbedOptionProvider> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<EmbedOptionProvider>);
export declare class EmbedOptionService extends Extension implements EmbedOptionProvider {
    private _embedBlockRegistry;
    getEmbedBlockOptions: (url: string) => EmbedOptions | null;
    registerEmbedBlockOptions: (options: EmbedOptions) => void;
    static setup(di: Container): void;
}
//# sourceMappingURL=embed-option-service.d.ts.map