import { LitElement } from 'lit';
import type { EmbedEdgelessHtmlBlockComponent } from '../embed-edgeless-html-block.js';
export declare class EmbedHtmlFullscreenToolbar extends LitElement {
    static styles: import("lit").CSSResult;
    private _popSettings;
    copyCode: () => void;
    private get autoHideToolbar();
    private set autoHideToolbar(value);
    render(): import("lit").TemplateResult<1>;
    private accessor _copied;
    private accessor _fullScreenToolbarContainer;
    private accessor _popperVisible;
    accessor embedHtml: EmbedEdgelessHtmlBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'embed-html-fullscreen-toolbar': EmbedHtmlFullscreenToolbar;
    }
}
//# sourceMappingURL=fullscreen-toolbar.d.ts.map