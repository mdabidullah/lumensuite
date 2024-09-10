export class PeekableController {
    get peekable() {
        return (!!this._getPeekViewService() &&
            (this.enable ? this.enable(this.target) : true));
    }
    constructor(target, enable) {
        this.target = target;
        this.enable = enable;
        this._getPeekViewService = () => {
            if ('peekViewService' in this.getRootService()) {
                return this.getRootService().peekViewService;
            }
            return null;
        };
        this.getRootService = () => {
            return this.target.std.getService('affine:page');
        };
        this.peek = (template) => {
            return Promise.resolve(this._getPeekViewService()?.peek(this.target, template));
        };
    }
}
//# sourceMappingURL=controller.js.map