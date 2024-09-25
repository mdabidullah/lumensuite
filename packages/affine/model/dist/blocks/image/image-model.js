import { BlockModel, defineBlockSchema } from '@lumensuite/store';
import { GfxCompatible } from '../../utils/index.js';
import { ImageBlockTransformer } from './image-transformer.js';
const defaultImageProps = {
    caption: '',
    sourceId: '',
    width: 0,
    height: 0,
    index: 'a0',
    xywh: '[0,0,0,0]',
    rotate: 0,
    size: -1,
};
export const ImageBlockSchema = defineBlockSchema({
    flavour: 'affine:image',
    props: () => defaultImageProps,
    metadata: {
        version: 1,
        role: 'content',
    },
    transformer: () => new ImageBlockTransformer(),
    toModel: () => new ImageBlockModel(),
});
export class ImageBlockModel extends GfxCompatible(BlockModel) {
}
//# sourceMappingURL=image-model.js.map