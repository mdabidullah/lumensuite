import { nothing } from 'lit';
import { WidgetBase } from '../../../../core/widget/widget-base.js';
import '../../../filter/filter-group.js';
export declare class DataViewHeaderToolsFilter extends WidgetBase {
    static styles: import("lit").CSSResult;
    private get _filter();
    private set _filter(value);
    private get readonly();
    private addFilter;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    showToolBar(show: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-filter': DataViewHeaderToolsFilter;
    }
}
//# sourceMappingURL=filter.d.ts.map