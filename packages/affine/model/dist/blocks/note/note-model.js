import { Bound } from '@blocksuite/global/utils';
import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { DEFAULT_NOTE_BACKGROUND_COLOR, DEFAULT_NOTE_BORDER_SIZE, DEFAULT_NOTE_BORDER_STYLE, DEFAULT_NOTE_CORNER, DEFAULT_NOTE_SHADOW, NOTE_WIDTH, NoteDisplayMode, } from '../../consts/index.js';
import { GfxCompatible } from '../../utils/index.js';
export const NoteBlockSchema = defineBlockSchema({
    flavour: 'affine:note',
    props: () => ({
        xywh: `[0,0,${NOTE_WIDTH},95]`,
        background: DEFAULT_NOTE_BACKGROUND_COLOR,
        index: 'a0',
        hidden: false,
        displayMode: NoteDisplayMode.DocAndEdgeless,
        edgeless: {
            style: {
                borderRadius: DEFAULT_NOTE_CORNER,
                borderSize: DEFAULT_NOTE_BORDER_SIZE,
                borderStyle: DEFAULT_NOTE_BORDER_STYLE,
                shadowType: DEFAULT_NOTE_SHADOW,
            },
        },
    }),
    metadata: {
        version: 1,
        role: 'hub',
        parent: ['affine:page'],
        children: [
            'affine:paragraph',
            'affine:list',
            'affine:code',
            'affine:divider',
            'affine:database',
            'affine:data-view',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:surface-ref',
            'affine:embed-*',
            'affine:latex',
        ],
    },
    toModel: () => {
        return new NoteBlockModel();
    },
});
export class NoteBlockModel extends GfxCompatible(BlockModel) {
    _isSelectable() {
        return this.displayMode !== NoteDisplayMode.DocOnly;
    }
    containsBound(bounds) {
        if (!this._isSelectable())
            return false;
        return super.containsBound(bounds);
    }
    includesPoint(x, y) {
        if (!this._isSelectable())
            return false;
        const bound = Bound.deserialize(this.xywh);
        return bound.isPointInBound([x, y], 0);
    }
    intersectsBound(bound) {
        if (!this._isSelectable())
            return false;
        return super.intersectsBound(bound);
    }
}
//# sourceMappingURL=note-model.js.map