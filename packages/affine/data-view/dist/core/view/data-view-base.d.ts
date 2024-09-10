import type { InsertToPosition } from '@blocksuite/affine-shared/utils';
import type { BlockStdScope, EventName, UIEventHandler } from '@blocksuite/block-std';
import type { Disposable } from '@blocksuite/global/utils';
import type { ReadonlySignal } from '@lit-labs/preact-signals';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataSource } from '../common/data-source/base.js';
import type { DataViewRenderer } from '../data-view.js';
import type { DataViewSelection } from '../types.js';
import type { SingleView } from '../view-manager/single-view.js';
import type { ViewManager } from '../view-manager/view-manager.js';
import type { DataViewWidget } from '../widget/types.js';
import type { DataViewExpose, DataViewProps } from './data-view.js';
declare const DataViewBase_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare abstract class DataViewBase<T extends SingleView = SingleView, Selection extends DataViewSelection = DataViewSelection> extends DataViewBase_base implements DataViewProps<T, Selection>, DataViewExpose {
    addRow?(position: InsertToPosition): void;
    abstract focusFirstCell(): void;
    abstract getSelection(): Selection | undefined;
    accessor bindHotkey: (hotkeys: Record<string, UIEventHandler>) => Disposable;
    accessor dataSource: DataSource;
    accessor dataViewEle: DataViewRenderer;
    accessor handleEvent: (name: EventName, handler: UIEventHandler) => Disposable;
    accessor headerWidget: DataViewWidget;
    accessor modalMode: boolean | undefined;
    accessor onDrag: ((evt: MouseEvent, id: string) => () => void) | undefined;
    accessor selection$: ReadonlySignal<Selection | undefined>;
    accessor setSelection: (selection?: Selection) => void;
    accessor std: BlockStdScope;
    accessor view: T;
    accessor viewSource: ViewManager;
}
export {};
//# sourceMappingURL=data-view-base.d.ts.map