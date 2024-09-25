import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import { type DataSource, type DataViewProps, type DataViewSelection, type DataViewWidget } from '@lumensuite/data-view';
import type { DataViewBlockModel } from './data-view-model.js';
import { type AffineInnerModalWidget } from '../root-block/index.js';
export declare class DataViewBlockComponent extends CaptionedBlockComponent<DataViewBlockModel> {
    static styles: import("lit").CSSResult;
    private _clickDatabaseOps;
    private _dataSource?;
    private dataView;
    _bindHotkey: DataViewProps['bindHotkey'];
    _handleEvent: DataViewProps['handleEvent'];
    getRootService: () => import("../root-block/root-service.js").RootService;
    headerWidget: DataViewWidget;
    selection$: import("@preact/signals-core").ReadonlySignal<DataViewSelection | undefined>;
    setSelection: (selection: DataViewSelection | undefined) => void;
    toolsWidget: DataViewWidget;
    get dataSource(): DataSource;
    get innerModalWidget(): AffineInnerModalWidget;
    get topContenteditableElement(): import("@lumensuite/block-std").BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
    get view(): import("@lumensuite/data-view").DataViewExpose | undefined;
    private renderDatabaseOps;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view': DataViewBlockComponent;
    }
}
//# sourceMappingURL=data-view-block.d.ts.map