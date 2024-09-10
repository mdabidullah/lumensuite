var _a;
import { gfxContainerSymbol, SurfaceBlockModel, } from '@blocksuite/block-std/gfx';
import { Bound } from '@blocksuite/global/utils';
import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { GfxCompatible } from '../../utils/index.js';
export const FrameBlockSchema = defineBlockSchema({
    flavour: 'affine:frame',
    props: (internal) => ({
        title: internal.Text(),
        background: '--affine-palette-transparent',
        xywh: `[0,0,100,100]`,
        index: 'a0',
        childElementIds: Object.create(null),
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: ['affine:surface'],
        children: [],
    },
    toModel: () => {
        return new FrameBlockModel();
    },
});
export class FrameBlockModel extends GfxCompatible(BlockModel) {
    constructor() {
        super(...arguments);
        this[_a] = true;
    }
    static { _a = gfxContainerSymbol; }
    get childElements() {
        const surface = this.doc
            .getBlocks()
            .find(model => model instanceof SurfaceBlockModel);
        if (!surface)
            return [];
        const elements = [];
        for (const key of this.childIds) {
            const element = surface.getElementById(key) ||
                surface.doc.getBlockById(key);
            element && elements.push(element);
        }
        return elements;
    }
    get childIds() {
        return [...(this.childElementIds ? Object.keys(this.childElementIds) : [])];
    }
    addChild(element) {
        const id = typeof element === 'string' ? element : element.id;
        this.doc.transact(() => {
            if (!this.childElementIds)
                this.childElementIds = {};
            this.childElementIds[id] = true;
        });
    }
    containsBound(bound) {
        return this.elementBound.contains(bound);
    }
    hasDescendant(element) {
        const id = typeof element === 'string' ? element : element.id;
        return !!this.childElementIds?.[id];
    }
    includesPoint(x, y, _) {
        const bound = Bound.deserialize(this.xywh);
        return bound.isPointInBound([x, y]);
    }
    intersectsBound(selectedBound) {
        const bound = Bound.deserialize(this.xywh);
        return (bound.isIntersectWithBound(selectedBound) || selectedBound.contains(bound));
    }
    removeChild(element) {
        const id = typeof element === 'string' ? element : element.id;
        this.doc.transact(() => {
            this.childElementIds && delete this.childElementIds[id];
        });
    }
}
//# sourceMappingURL=frame-model.js.map