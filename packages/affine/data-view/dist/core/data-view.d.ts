import type { BlockStdScope } from '@blocksuite/block-std';
import type { ReferenceElement } from '@floating-ui/dom';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import { type TemplateResult } from 'lit';
import type { DataSource } from './common/data-source/base.js';
import type { DataViewSelection, DataViewSelectionState } from './types.js';
import type { DataViewExpose, DataViewProps } from './view/data-view.js';
import type { DataViewBase } from './view/data-view-base.js';
import type { SingleView } from './view-manager/single-view.js';
import './common/group-by/define.js';
type ViewProps = {
    view: SingleView;
    selection$: ReadonlySignal<DataViewSelectionState>;
    setSelection: (selection?: DataViewSelectionState) => void;
    bindHotkey: DataViewBase['bindHotkey'];
    handleEvent: DataViewBase['handleEvent'];
};
export type DataViewRendererConfig = {
    bindHotkey: DataViewProps['bindHotkey'];
    handleEvent: DataViewProps['handleEvent'];
    selection$: ReadonlySignal<DataViewSelection | undefined>;
    setSelection: (selection: DataViewSelection | undefined) => void;
    dataSource: DataSource;
    detailPanelConfig?: {
        openDetailPanel?: (target: HTMLElement, template: TemplateResult) => Promise<void>;
        target?: () => ReferenceElement;
    };
    headerWidget: DataViewProps['headerWidget'];
    onDrag?: DataViewProps['onDrag'];
    std: BlockStdScope;
};
declare const DataViewRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewRenderer extends DataViewRenderer_base {
    static styles: import("lit").CSSResult;
    private _view;
    private currentViewId$;
    currentViewConfig$: ReadonlySignal<ViewProps | undefined>;
    focusFirstCell: () => void;
    openDetailPanel: (ops: {
        view: SingleView;
        rowId: string;
        onClose?: () => void;
    }) => void;
    viewMap$: ReadonlySignal<{
        [k: string]: SingleView<import("./view/data-view.js").BasicViewDataType<"kanban", {
            columns: import("../view-presets/index.js").KanbanViewColumn[];
            filter: import("./index.js").FilterGroup;
            groupBy?: import("./index.js").GroupBy;
            sort?: import("./index.js").Sort;
            header: {
                titleColumn?: string;
                iconColumn?: string;
                coverColumn?: string;
            };
            groupProperties: import("./index.js").GroupProperty[];
        }> | import("./view/data-view.js").BasicViewDataType<"table", {
            columns: import("../view-presets/index.js").TableViewColumn[];
            filter: import("./index.js").FilterGroup;
            groupBy?: import("./index.js").GroupBy;
            groupProperties?: import("./index.js").GroupProperty[];
            sort?: import("./index.js").Sort;
            header?: {
                titleColumn?: string;
                iconColumn?: string;
                imageColumn?: string;
            };
        }>>;
    }>;
    get expose(): DataViewExpose | undefined;
    private renderView;
    connectedCallback(): void;
    render(): TemplateResult;
    accessor config: DataViewRendererConfig;
    accessor currentView: string | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-renderer': DataViewRenderer;
    }
}
export declare class DataView {
    private _ref;
    get expose(): DataViewExpose | undefined;
    render(props: DataViewRendererConfig): TemplateResult;
}
export {};
//# sourceMappingURL=data-view.d.ts.map