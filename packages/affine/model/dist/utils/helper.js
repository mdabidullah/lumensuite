import { defineBlockSchema, } from '@lumensuite/store';
import { GfxCompatible } from './gfx-compatible.js';
export function defineEmbedModel(BlockModelSuperClass) {
    return GfxCompatible(BlockModelSuperClass);
}
export function createEmbedBlockSchema({ name, version, toModel, props, transformer, }) {
    return defineBlockSchema({
        flavour: `affine:embed-${name}`,
        props: internalPrimitives => {
            const userProps = props?.(internalPrimitives);
            return {
                index: 'a0',
                xywh: '[0,0,0,0]',
                rotate: 0,
                ...userProps,
            };
        },
        metadata: {
            version,
            role: 'content',
        },
        toModel,
        transformer,
    });
}
//# sourceMappingURL=helper.js.map