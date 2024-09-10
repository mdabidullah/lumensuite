import type { CodeBlockModel } from '@blocksuite/affine-model';
import { WidgetComponent } from '@blocksuite/block-std';
import type { CodeBlockComponent } from '../../../code-block/index.js';
import './components/lang-button.js';
export declare const AFFINE_CODE_LANGUAGE_LIST_WIDGET = "affine-code-language-list-widget";
export declare class AffineCodeLanguageListWidget extends WidgetComponent<CodeBlockModel, CodeBlockComponent> {
    private _hoverController;
    private _isActivated;
    private _shouldDisplay;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_CODE_LANGUAGE_LIST_WIDGET]: AffineCodeLanguageListWidget;
    }
}
//# sourceMappingURL=index.d.ts.map