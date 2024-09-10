export class ReferenceNodeConfig {
    get customContent() {
        return this._customContent;
    }
    get customIcon() {
        return this._customIcon;
    }
    get customTitle() {
        return this._customTitle;
    }
    get doc() {
        return this.std.doc;
    }
    get interactable() {
        return this._interactable;
    }
    constructor(std) {
        this.std = std;
        this._customContent = null;
        this._customIcon = null;
        this._customTitle = null;
        this._interactable = true;
    }
    setCustomContent(content) {
        this._customContent = content;
    }
    setCustomIcon(icon) {
        this._customIcon = icon;
    }
    setCustomTitle(title) {
        this._customTitle = title;
    }
    setInteractable(interactable) {
        this._interactable = interactable;
    }
}
//# sourceMappingURL=reference-config.js.map