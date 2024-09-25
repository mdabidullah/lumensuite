import type { AdvancedMenuItem, MenuItemGroup } from '@lumensuite/affine-components/toolbar';
import type { CodeBlockModel } from '@lumensuite/affine-model';
import { WidgetComponent } from '@lumensuite/block-std';
import type { CodeBlockComponent } from '../../../code-block/code-block.js';
import './components/code-toolbar.js';
import { CodeBlockToolbarContext } from './context.js';
export declare const AFFINE_CODE_TOOLBAR_WIDGET = "affine-code-toolbar-widget";
export declare class AffineCodeToolbarWidget extends WidgetComponent<CodeBlockModel, CodeBlockComponent> {
    private _hoverController;
    private _isActivated;
    private _setHoverController;
    addMoretems: (items: AdvancedMenuItem<CodeBlockToolbarContext>[], index?: number, type?: string) => this;
    addPrimaryItems: (items: AdvancedMenuItem<CodeBlockToolbarContext>[], index?: number) => this;
    protected moreGroups: MenuItemGroup<CodeBlockToolbarContext>[];
    protected primaryGroups: MenuItemGroup<CodeBlockToolbarContext>[];
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_CODE_TOOLBAR_WIDGET]: AffineCodeToolbarWidget;
    }
}
//# sourceMappingURL=index.d.ts.map