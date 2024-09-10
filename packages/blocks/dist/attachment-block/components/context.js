import { MenuContext } from '../../root-block/configs/toolbar.js';
export class AttachmentToolbarMoreMenuContext extends MenuContext {
    get doc() {
        return this.blockComponent.doc;
    }
    get host() {
        return this.blockComponent.host;
    }
    get selectedBlockModels() {
        if (this.blockComponent.model)
            return [this.blockComponent.model];
        return [];
    }
    get std() {
        return this.blockComponent.std;
    }
    constructor(blockComponent, abortController) {
        super();
        this.blockComponent = blockComponent;
        this.abortController = abortController;
        this.close = () => {
            this.abortController.abort();
        };
    }
    isEmpty() {
        return false;
    }
    isMultiple() {
        return false;
    }
    isSingle() {
        return true;
    }
}
//# sourceMappingURL=context.js.map