import { ShadowlessElement } from '@blocksuite/block-std';
import type { TableColumn } from '../table-view-manager.js';
type GroupRectList = {
    top: number;
    bottom: number;
}[];
declare const TableVerticalIndicator_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableVerticalIndicator extends TableVerticalIndicator_base {
    static styles: import("lit").CSSResult;
    protected render(): unknown;
    accessor left: number;
    accessor lines: GroupRectList;
    accessor shadow: boolean;
    accessor top: number;
    accessor width: number;
}
export declare const getTableGroupRects: (tableContainer: HTMLElement) => {
    top: number;
    bottom: number;
}[];
export declare const startDragWidthAdjustmentBar: (evt: PointerEvent, tableContainer: HTMLElement, width: number, column: TableColumn) => void;
type VerticalIndicator = {
    display: (width: number, top: number, lines: GroupRectList, left: number, shadow?: boolean) => void;
    remove: () => void;
};
export declare const getVerticalIndicator: () => VerticalIndicator;
export {};
//# sourceMappingURL=vertical-indicator.d.ts.map