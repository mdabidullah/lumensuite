import type { KanbanSingleView } from '../../../../view-presets/kanban/kanban-view-manager.js';
import type { TableSingleView } from '../../../../view-presets/table/table-view-manager.js';
import { WidgetBase } from '../../../../core/widget/widget-base.js';
import '../../../filter/filter-group.js';
export declare class DataViewHeaderToolsSearch extends WidgetBase {
    static styles: import("lit").CSSResult;
    private _clearSearch;
    private _clickSearch;
    private _onSearch;
    private _onSearchBlur;
    private _onSearchKeydown;
    preventBlur: boolean;
    get showSearch(): boolean;
    set showSearch(value: boolean);
    render(): import("lit").TemplateResult<1>;
    private accessor _searchInput;
    private accessor _showSearch;
    accessor view: TableSingleView | KanbanSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-search': DataViewHeaderToolsSearch;
    }
}
//# sourceMappingURL=search.d.ts.map