import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { FontFamily, FontStyle, FontWeight, TextAlign, } from '../../consts/index.js';
import { GfxCompatible } from '../../utils/index.js';
export const EdgelessTextBlockSchema = defineBlockSchema({
    flavour: 'affine:edgeless-text',
    props: () => ({
        xywh: '[0,0,16,16]',
        index: 'a0',
        color: '#000000',
        fontFamily: FontFamily.Inter,
        fontStyle: FontStyle.Normal,
        fontWeight: FontWeight.Regular,
        textAlign: TextAlign.Left,
        scale: 1,
        rotate: 0,
        hasMaxWidth: false,
    }),
    metadata: {
        version: 1,
        role: 'hub',
        parent: ['affine:surface'],
        children: [
            'affine:paragraph',
            'affine:list',
            'affine:code',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:embed-!(synced-doc)',
            'affine:latex',
        ],
    },
    toModel: () => {
        return new EdgelessTextBlockModel();
    },
});
export class EdgelessTextBlockModel extends GfxCompatible(BlockModel) {
}
//# sourceMappingURL=edgeless-text-model.js.map