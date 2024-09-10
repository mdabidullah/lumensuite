import type { Constructor } from '@blocksuite/global/utils';
import { type BaseBlockTransformer, type BlockModel, type InternalPrimitives } from '@blocksuite/store';
import { type GfxCompatibleProps } from './gfx-compatible.js';
export declare function defineEmbedModel<Props extends object, T extends Constructor<BlockModel<Props>> = Constructor<BlockModel<Props>>>(BlockModelSuperClass: T): {
    new (): import("@blocksuite/block-std/gfx").GfxBlockElementModel<Props & GfxCompatibleProps>;
};
export type EmbedProps<Props = object> = Props & GfxCompatibleProps;
export type EmbedBlockModel<Props = object> = BlockModel<EmbedProps<Props>>;
export declare function createEmbedBlockSchema<Props extends object, Model extends EmbedBlockModel<Props>, Transformer extends BaseBlockTransformer<EmbedProps<Props>> = BaseBlockTransformer<EmbedProps<Props>>>({ name, version, toModel, props, transformer, }: {
    name: string;
    version: number;
    toModel: () => Model;
    props?: (internalPrimitives: InternalPrimitives) => Props;
    transformer?: () => Transformer;
}): {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<EmbedProps<Props>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: EmbedProps<Props>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => Transformer) | undefined;
};
//# sourceMappingURL=helper.d.ts.map