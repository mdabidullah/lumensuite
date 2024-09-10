import { ShadowlessElement } from '@blocksuite/block-std';
import type { Column } from '../view-manager/column.js';
import type { SingleView } from '../view-manager/single-view.js';
declare const DataViewPropertiesSettingView_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewPropertiesSettingView extends DataViewPropertiesSettingView_base {
    static styles: import("lit").CSSResult;
    clickChangeAll: (allShow: boolean) => void;
    renderColumn: (column: Column) => import("lit").TemplateResult<1>;
    private itemsGroup;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    accessor groupContainer: HTMLElement;
    accessor onBack: (() => void) | undefined;
    accessor view: SingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-properties-setting': DataViewPropertiesSettingView;
    }
}
export declare const popPropertiesSetting: (target: HTMLElement, props: {
    view: SingleView;
    onClose?: () => void;
    onBack?: () => void;
}) => void;
export {};
//# sourceMappingURL=properties.d.ts.map