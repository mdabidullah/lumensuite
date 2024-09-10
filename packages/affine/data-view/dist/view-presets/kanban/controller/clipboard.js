export class KanbanClipboardController {
    get readonly() {
        return this.host.view.readonly$.value;
    }
    constructor(host) {
        this.host = host;
        this._onCopy = (_context, _kanbanSelection) => {
            // todo
            return true;
        };
        this._onPaste = (_context) => {
            // todo
            return true;
        };
        host.addController(this);
    }
    hostConnected() {
        this.host.disposables.add(this.host.handleEvent('copy', ctx => {
            const kanbanSelection = this.host.selectionController.selection;
            if (!kanbanSelection)
                return false;
            this._onCopy(ctx, kanbanSelection);
            return true;
        }));
        this.host.disposables.add(this.host.handleEvent('paste', ctx => {
            if (this.readonly)
                return false;
            this._onPaste(ctx);
            return true;
        }));
    }
}
//# sourceMappingURL=clipboard.js.map