import { RootBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
import { Slot } from '@lumensuite/store';
export class MindmapService extends BlockService {
    constructor() {
        super(...arguments);
        this.requestCenter = new Slot();
    }
    static { this.flavour = RootBlockSchema.model.flavour; }
    center() {
        this.requestCenter.emit();
    }
    mounted() { }
}
//# sourceMappingURL=service.js.map