import '../../core/common/component/overflow/overflow.js';
import { WidgetBase } from '../../core/widget/widget-base.js';
export declare class DataViewHeaderViews extends WidgetBase {
    static styles: import("lit").CSSResult;
    _addViewMenu: (event: MouseEvent) => void;
    _showMore: (event: MouseEvent) => void;
    openViewOption: (target: HTMLElement, id: string) => void;
    renderMore: (count: number) => import("lit").TemplateResult<1> | undefined;
    renderViews: () => (() => import("lit").TemplateResult<1>)[];
    get readonly(): boolean;
    private getRenderer;
    _clickView(event: MouseEvent, id: string): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-views': DataViewHeaderViews;
    }
}
//# sourceMappingURL=views.d.ts.map