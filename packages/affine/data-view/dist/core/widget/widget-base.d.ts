import { ShadowlessElement } from '@lumensuite/block-std';
import type { DataViewExpose } from '../view/data-view.js';
import type { SingleView } from '../view-manager/single-view.js';
import type { DataViewWidgetProps } from './types.js';
declare const WidgetBase_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class WidgetBase extends WidgetBase_base implements DataViewWidgetProps {
    get dataSource(): import("../index.js").DataSource;
    get viewManager(): import("../index.js").ViewManager;
    accessor view: SingleView;
    accessor viewMethods: DataViewExpose;
}
export {};
//# sourceMappingURL=widget-base.d.ts.map