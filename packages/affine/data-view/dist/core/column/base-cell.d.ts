import { ShadowlessElement } from '@blocksuite/block-std';
import type { Cell } from '../view-manager/cell.js';
import type { CellRenderProps, DataViewCellLifeCycle } from './manager.js';
declare const BaseCellRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare abstract class BaseCellRenderer<Value, Data extends Record<string, unknown> = Record<string, unknown>> extends BaseCellRenderer_base implements DataViewCellLifeCycle, CellRenderProps<Data, Value> {
    readonly$: import("@preact/signals-core").ReadonlySignal<boolean>;
    value$: import("@preact/signals-core").ReadonlySignal<Value | undefined>;
    get column(): import("../view-manager/column.js").Column<Value, Data>;
    get readonly(): boolean;
    get row(): import("../view-manager/row.js").Row;
    get value(): Value | undefined;
    get view(): import("../index.js").SingleView<import("../index.js").BasicViewDataType<"kanban", {
        columns: import("../../view-presets/index.js").KanbanViewColumn[];
        filter: import("../index.js").FilterGroup;
        groupBy?: import("../index.js").GroupBy;
        sort?: import("../index.js").Sort;
        header: {
            titleColumn?: string;
            iconColumn?: string;
            coverColumn?: string;
        };
        groupProperties: import("../index.js").GroupProperty[];
    }> | import("../index.js").BasicViewDataType<"table", {
        columns: import("../../view-presets/index.js").TableViewColumn[];
        filter: import("../index.js").FilterGroup;
        groupBy?: import("../index.js").GroupBy;
        groupProperties?: import("../index.js").GroupProperty[];
        sort?: import("../index.js").Sort;
        header?: {
            titleColumn?: string;
            iconColumn?: string;
            imageColumn?: string;
        };
    }>>;
    beforeEnterEditMode(): boolean;
    blurCell(): boolean;
    connectedCallback(): void;
    focusCell(): boolean;
    forceUpdate(): void;
    onChange(value: Value | undefined): void;
    onCopy(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
    onEnterEditMode(): void;
    onExitEditMode(): void;
    onPaste(_e: ClipboardEvent): void;
    accessor cell: Cell<Value, Data>;
    accessor isEditing: boolean;
    accessor selectCurrentCell: (editing: boolean) => void;
}
export {};
//# sourceMappingURL=base-cell.d.ts.map