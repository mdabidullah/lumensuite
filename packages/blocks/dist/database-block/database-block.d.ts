import type { DatabaseBlockModel } from '@blocksuite/affine-model';
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import { type DataViewExpose, type DataViewProps, type DataViewSelection, type DataViewWidget } from '@blocksuite/data-view';
import type { AffineInnerModalWidget } from '../root-block/index.js';
import type { DatabaseOptionsConfig } from './config.js';
import type { DatabaseBlockService } from './database-service.js';
import { DragIndicator } from '../_common/components/index.js';
import './components/title/index.js';
import { DatabaseBlockDataSource } from './data-source.js';
export declare class DatabaseBlockComponent extends CaptionedBlockComponent<DatabaseBlockModel, DatabaseBlockService> {
    static styles: import("lit").CSSResult;
    private _clickDatabaseOps;
    private _dataSource?;
    private dataView;
    private renderTitle;
    _bindHotkey: DataViewProps['bindHotkey'];
    _handleEvent: DataViewProps['handleEvent'];
    getRootService: () => import("../root-block/root-service.js").RootService;
    headerWidget: DataViewWidget;
    indicator: DragIndicator;
    onDrag: (evt: MouseEvent, id: string) => (() => void);
    setSelection: (selection: DataViewSelection | undefined) => void;
    toolsWidget: DataViewWidget;
    viewSelection$: import("@preact/signals-core").ReadonlySignal<DataViewSelection | undefined>;
    get dataSource(): DatabaseBlockDataSource;
    get innerModalWidget(): AffineInnerModalWidget;
    get optionsConfig(): DatabaseOptionsConfig;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null;
    get view(): DataViewExpose | undefined;
    private renderDatabaseOps;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
    accessor useZeroWidth: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database': DatabaseBlockComponent;
    }
}
//# sourceMappingURL=database-block.d.ts.map