import { RootBlockSchema } from '@lumensuite/affine-model';
import { Slot } from '@lumensuite/store';
import { RootService } from '../root-service.js';
export class PageRootService extends RootService {
    constructor() {
        super(...arguments);
        this.slots = {
            docLinkClicked: new Slot(),
            tagClicked: new Slot(),
            viewportUpdated: new Slot(),
        };
    }
    static { this.flavour = RootBlockSchema.model.flavour; }
}
//# sourceMappingURL=page-root-service.js.map