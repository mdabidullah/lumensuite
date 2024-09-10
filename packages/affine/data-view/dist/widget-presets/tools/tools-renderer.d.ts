import type { SingleView } from '../../core/view-manager/single-view.js';
import type { ViewManager } from '../../core/view-manager/view-manager.js';
import type { DataViewWidget } from '../../core/widget/types.js';
import { type DataViewExpose } from '../../core/index.js';
import { WidgetBase } from '../../core/widget/widget-base.js';
import './presets/filter/filter.js';
import './presets/search/search.js';
import './presets/table-add-row/add-row.js';
import './presets/view-options/view-options.js';
export declare class DataViewHeaderTools extends WidgetBase {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    accessor showToolBar: boolean;
    accessor toolsMap: Record<string, DataViewWidget[]>;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools': DataViewHeaderTools;
    }
}
export declare const renderTools: (view: SingleView, viewMethods: DataViewExpose, viewSource: ViewManager) => import("lit").TemplateResult<1>;
//# sourceMappingURL=tools-renderer.d.ts.map