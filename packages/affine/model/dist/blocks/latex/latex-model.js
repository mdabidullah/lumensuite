import { GfxCompatible, } from '@lumensuite/block-std/gfx';
import { BlockModel, defineBlockSchema } from '@lumensuite/store';
export const LatexBlockSchema = defineBlockSchema({
    flavour: 'affine:latex',
    props: () => ({
        xywh: '[0,0,16,16]',
        index: 'a0',
        scale: 1,
        rotate: 0,
        latex: '',
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: [
            'affine:note',
            'affine:edgeless-text',
            'affine:paragraph',
            'affine:list',
        ],
    },
    toModel: () => {
        return new LatexBlockModel();
    },
});
export class LatexBlockModel extends GfxCompatible(BlockModel) {
}
//# sourceMappingURL=latex-model.js.map