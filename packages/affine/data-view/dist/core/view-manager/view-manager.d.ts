import type { InsertToPosition } from '@blocksuite/affine-shared/utils';
import { type ReadonlySignal } from '@lit-labs/preact-signals';
import type { DataSource } from '../common/data-source/base.js';
import type { DataViewDataType, DataViewTypes } from '../view/data-view.js';
import type { SingleView } from './single-view.js';
export interface ViewManager {
    dataSource: DataSource;
    readonly$: ReadonlySignal<boolean>;
    currentViewId$: ReadonlySignal<string>;
    currentView$: ReadonlySignal<SingleView>;
    setCurrentView(id: string): void;
    views$: ReadonlySignal<string[]>;
    viewGet(id: string): SingleView;
    viewAdd(type: DataViewTypes): string;
    viewDelete(id: string): void;
    viewDuplicate(id: string): void;
    viewDataGet(id: string): DataViewDataType | undefined;
    moveTo(id: string, position: InsertToPosition): void;
}
export declare class ViewManagerBase implements ViewManager {
    dataSource: DataSource;
    _currentViewId$: import("@preact/signals-core").Signal<string | undefined>;
    currentView$: ReadonlySignal<SingleView<import("../view/data-view.js").BasicViewDataType<"kanban", {
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
    }> | import("../view/data-view.js").BasicViewDataType<"table", {
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
    }>>>;
    currentViewId$: ReadonlySignal<string>;
    readonly$: ReadonlySignal<boolean>;
    views$: ReadonlySignal<string[]>;
    constructor(dataSource: DataSource);
    moveTo(id: string, position: InsertToPosition): void;
    setCurrentView(id: string): void;
    viewAdd(type: DataViewTypes): string;
    viewDataGet(id: string): DataViewDataType | undefined;
    viewDelete(id: string): void;
    viewDuplicate(id: string): void;
    viewGet(id: string): SingleView;
}
//# sourceMappingURL=view-manager.d.ts.map