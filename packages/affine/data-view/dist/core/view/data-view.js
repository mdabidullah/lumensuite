import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
export const viewType = (type) => ({
    type,
    modelConfig: (model) => ({
        type,
        model,
        rendererConfig: (renderer) => ({
            type,
            model,
            renderer,
        }),
    }),
});
export class ViewRendererManager {
    constructor() {
        this.map = new Map();
    }
    get all() {
        return Array.from(this.map.values());
    }
    getView(type) {
        const view = this.map.get(type);
        if (!view) {
            throw new BlockSuiteError(ErrorCode.DatabaseBlockError, `${type} is not exist`);
        }
        return view;
    }
}
export const viewRendererManager = new ViewRendererManager();
//# sourceMappingURL=data-view.js.map