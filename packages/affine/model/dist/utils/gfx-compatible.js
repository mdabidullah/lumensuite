import { GfxBlockElementModel } from '@blocksuite/block-std/gfx';
import { BlockModel } from '@blocksuite/store';
export function GfxCompatible(BlockModelSuperClass) {
    if (BlockModelSuperClass === BlockModel) {
        return GfxBlockElementModel;
    }
    else {
        let currentClass = BlockModelSuperClass;
        while (Object.getPrototypeOf(currentClass.prototype) !== BlockModel.prototype &&
            Object.getPrototypeOf(currentClass.prototype) !== null) {
            currentClass = Object.getPrototypeOf(currentClass.prototype).constructor;
        }
        if (Object.getPrototypeOf(currentClass.prototype) === null) {
            throw new Error('The SuperClass is not a subclass of BlockModel');
        }
        Object.setPrototypeOf(currentClass.prototype, GfxBlockElementModel.prototype);
    }
    return BlockModelSuperClass;
}
//# sourceMappingURL=gfx-compatible.js.map