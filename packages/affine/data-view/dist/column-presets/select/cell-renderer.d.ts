import type { SelectColumnData } from '../../core/column/types.js';
import { BaseCellRenderer } from '../../core/column/index.js';
import '../../core/utils/tags/multi-tag-select.js';
import { type SelectTag } from '../../core/utils/tags/multi-tag-select.js';
export declare class SelectCell extends BaseCellRenderer<string[], SelectColumnData> {
    render(): import("lit").TemplateResult;
}
export declare class SelectCellEditing extends BaseCellRenderer<string, SelectColumnData> {
    private popTagSelect;
    _editComplete: () => void;
    _onChange: ([id]: string[]) => void;
    _onOptionsChange: (options: SelectTag[]) => void;
    get _options(): SelectTag[];
    get _value(): string[];
    firstUpdated(): void;
    render(): import("lit").TemplateResult;
}
export declare const selectColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"select", SelectColumnData, string>;
//# sourceMappingURL=cell-renderer.d.ts.map