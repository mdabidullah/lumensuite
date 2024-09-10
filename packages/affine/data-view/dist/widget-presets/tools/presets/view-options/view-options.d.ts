import type { SingleView } from '../../../../core/view-manager/single-view.js';
import { WidgetBase } from '../../../../core/widget/widget-base.js';
export declare class DataViewHeaderToolsViewOptions extends WidgetBase {
    static styles: import("lit").CSSResult;
    clickMoreAction: (e: MouseEvent) => void;
    openMoreAction: (target: HTMLElement) => void;
    render(): import("lit").TemplateResult<1> | undefined;
    showToolBar(show: boolean): void;
    accessor view: SingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-view-options': DataViewHeaderToolsViewOptions;
    }
}
export declare const popViewOptions: (target: HTMLElement, view: SingleView, onClose?: () => void) => void;
//# sourceMappingURL=view-options.d.ts.map