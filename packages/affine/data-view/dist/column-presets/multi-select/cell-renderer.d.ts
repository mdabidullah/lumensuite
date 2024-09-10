import type { SelectColumnData } from '../../core/column/types.js';
import { BaseCellRenderer } from '../../core/column/index.js';
import '../../core/utils/tags/multi-tag-select.js';
import { type SelectTag } from '../../core/utils/tags/multi-tag-select.js';
export declare class MultiSelectCell extends BaseCellRenderer<string[], SelectColumnData> {
    render(): import("lit").TemplateResult;
}
export declare class MultiSelectCellEditing extends BaseCellRenderer<string[], SelectColumnData> {
    private popTagSelect;
    _editComplete: () => void;
    _onChange: (ids: string[]) => void;
    _onOptionsChange: (options: SelectTag[]) => void;
    get _options(): SelectTag[];
    get _value(): string[];
    firstUpdated(): void;
    render(): import("lit").TemplateResult;
}
export declare const multiSelectColumnConfig: import("../../core/column/column-config.js").ColumnMeta<"multi-select", SelectColumnData, string[]>;
//# sourceMappingURL=cell-renderer.d.ts.map