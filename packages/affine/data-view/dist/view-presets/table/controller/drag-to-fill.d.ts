import { ShadowlessElement } from '@lumensuite/block-std';
import type { DataViewTable } from '../table-view.js';
import type { TableAreaSelection } from '../types.js';
export declare class DragToFillElement extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    dragToFillRef: import("lit/directives/ref.js").Ref<HTMLDivElement>;
    render(): import("lit").TemplateResult<1>;
    accessor dragging: boolean;
}
export declare function fillSelectionWithFocusCellData(host: DataViewTable, selection: TableAreaSelection): void;
//# sourceMappingURL=drag-to-fill.d.ts.map