import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../column/index.js';
import type { Column } from '../../view-manager/column.js';
import type { SingleView } from '../../view-manager/single-view.js';
declare const RecordField_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class RecordField extends RecordField_base {
    static styles: import("lit").CSSResult;
    private _cell;
    _click: (e: MouseEvent) => void;
    _clickLeft: (e: MouseEvent) => void;
    cell$: import("@preact/signals-core").ReadonlySignal<import("../../view-manager/cell.js").Cell<unknown, Record<string, unknown>>>;
    changeEditing: (editing: boolean) => void;
    get cell(): DataViewCellLifeCycle | undefined;
    private get readonly();
    render(): import("lit").TemplateResult | undefined;
    accessor column: Column;
    accessor editing: boolean;
    accessor isFocus: boolean;
    accessor rowId: string;
    accessor view: SingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-record-field': RecordField;
    }
}
export {};
//# sourceMappingURL=field.d.ts.map