import type { InsertToPosition } from '@lumensuite/affine-shared/utils';
import type { BlockStdScope, EventName, UIEventHandler } from '@lumensuite/block-std';
import type { Disposable } from '@lumensuite/global/utils';
import type { ReadonlySignal } from '@lit-labs/preact-signals';
import type { DataSource } from '../common/data-source/base.js';
import type { DataViewRenderer } from '../data-view.js';
import type { DataViewSelection } from '../types.js';
import type { UniComponent } from '../utils/uni-component/index.js';
import type { SingleView } from '../view-manager/single-view.js';
import type { ViewManager } from '../view-manager/view-manager.js';
import type { DataViewWidget } from '../widget/types.js';
export interface DataViewProps<T extends SingleView = SingleView, Selection extends DataViewSelection = DataViewSelection> {
    dataViewEle: DataViewRenderer;
    headerWidget?: DataViewWidget;
    view: T;
    dataSource: DataSource;
    bindHotkey: (hotkeys: Record<string, UIEventHandler>) => Disposable;
    handleEvent: (name: EventName, handler: UIEventHandler) => Disposable;
    setSelection: (selection?: Selection) => void;
    selection$: ReadonlySignal<Selection | undefined>;
    onDrag?: (evt: MouseEvent, id: string) => () => void;
    std: BlockStdScope;
}
export interface DataViewExpose {
    addRow?(position: InsertToPosition | number): void;
    getSelection?(): DataViewSelection | undefined;
    focusFirstCell(): void;
    showIndicator?(evt: MouseEvent): boolean;
    hideIndicator?(): void;
    moveTo?(id: string, evt: MouseEvent): void;
}
declare global {
    export interface DataViewDataTypeMap {
    }
}
export type BasicViewDataType<Type extends string = string, T = NonNullable<unknown>> = {
    id: string;
    name: string;
    mode: Type;
} & T;
export type _DataViewDataTypeMap = {
    [K in keyof DataViewDataTypeMap]: BasicViewDataType<Extract<K, string>, DataViewDataTypeMap[K]>;
};
export type DefaultViewDataType = BasicViewDataType & {
    mode: string;
};
type FallBack<T> = [T] extends [never] ? DefaultViewDataType : T;
export type DataViewDataType = FallBack<_DataViewDataTypeMap[keyof _DataViewDataTypeMap]>;
export type DataViewTypes = keyof DataViewDataTypeMap;
export interface DataViewConfig<Data extends DataViewDataType = DataViewDataType> {
    defaultName: string;
    dataViewManager: new (viewManager: ViewManager, viewId: string) => SingleView<Data>;
}
export interface DataViewRendererConfig {
    view: UniComponent<DataViewProps, DataViewExpose>;
    icon: UniComponent;
}
export type ViewMeta<Type extends string = DataViewTypes, Data extends DataViewDataType = any> = {
    type: Type;
    model: DataViewConfig<Data>;
    renderer: DataViewRendererConfig;
};
export declare const viewType: <Type extends string>(type: Type) => {
    type: Type;
    modelConfig: <Data extends DataViewDataType>(model: DataViewConfig<Data>) => {
        type: Type;
        model: DataViewConfig<Data>;
        rendererConfig: (renderer: DataViewRendererConfig) => {
            type: Type;
            model: DataViewConfig<Data>;
            renderer: DataViewRendererConfig;
        };
    };
};
export declare class ViewRendererManager {
    private map;
    get all(): DataViewRendererConfig[];
    getView(type: string): DataViewRendererConfig;
}
export declare const viewRendererManager: ViewRendererManager;
export {};
//# sourceMappingURL=data-view.d.ts.map