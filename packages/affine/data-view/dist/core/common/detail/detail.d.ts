import { ShadowlessElement } from '@lumensuite/block-std';
import type { SingleView } from '../../view-manager/single-view.js';
import type { DetailSlots } from '../data-source/base.js';
import './field.js';
import { DetailSelection } from './selection.js';
declare const RecordDetail_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class RecordDetail extends RecordDetail_base {
    static styles: import("lit").CSSResult;
    _clickAddProperty: () => void;
    columns$: import("@preact/signals-core").ReadonlySignal<import("../../view-manager/column.js").Column<unknown, Record<string, unknown>>[]>;
    detailSlots?: DetailSlots;
    selection: DetailSelection;
    private get readonly();
    private renderHeader;
    private renderNote;
    connectedCallback(): void;
    hasNext(): boolean;
    hasPrev(): boolean;
    nextRow(): void;
    prevRow(): void;
    render(): import("lit").TemplateResult;
    accessor addPropertyButton: HTMLElement;
    accessor rowId: string;
    accessor view: SingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-record-detail': RecordDetail;
    }
}
export {};
//# sourceMappingURL=detail.d.ts.map