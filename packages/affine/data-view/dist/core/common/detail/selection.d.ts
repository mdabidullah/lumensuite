import type { KanbanCard } from '../../../view-presets/kanban/card.js';
import type { KanbanCardSelection } from '../../../view-presets/kanban/types.js';
import type { RecordDetail } from './detail.js';
import { RecordField } from './field.js';
type DetailViewSelection = {
    propertyId: string;
    isEditing: boolean;
};
export declare class DetailSelection {
    private viewEle;
    _selection?: DetailViewSelection;
    onSelect: (selection?: DetailViewSelection) => void;
    get selection(): DetailViewSelection | undefined;
    set selection(selection: DetailViewSelection | undefined);
    constructor(viewEle: RecordDetail);
    blur(selection: DetailViewSelection): void;
    deleteProperty(): void;
    focus(selection: DetailViewSelection): void;
    focusDown(): void;
    focusFirstCell(): void;
    focusUp(): void;
    getFocusCellContainer(selection: DetailViewSelection): RecordField | undefined;
    getSelectCard(selection: KanbanCardSelection): KanbanCard | undefined;
}
export {};
//# sourceMappingURL=selection.d.ts.map