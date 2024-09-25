import { BlockModel, defineBlockSchema } from '@lumensuite/store';
import { GfxCompatible } from '../../utils/index.js';
export const BookmarkStyles = [
    'vertical',
    'horizontal',
    'list',
    'cube',
];
const defaultBookmarkProps = {
    style: BookmarkStyles[1],
    url: '',
    caption: null,
    description: null,
    icon: null,
    image: null,
    title: null,
    index: 'a0',
    xywh: '[0,0,0,0]',
    rotate: 0,
};
export const BookmarkBlockSchema = defineBlockSchema({
    flavour: 'affine:bookmark',
    props: () => defaultBookmarkProps,
    metadata: {
        version: 1,
        role: 'content',
        parent: [
            'affine:note',
            'affine:surface',
            'affine:edgeless-text',
            'affine:paragraph',
            'affine:list',
        ],
    },
    toModel: () => new BookmarkBlockModel(),
});
export class BookmarkBlockModel extends GfxCompatible(BlockModel) {
}
//# sourceMappingURL=bookmark-model.js.map