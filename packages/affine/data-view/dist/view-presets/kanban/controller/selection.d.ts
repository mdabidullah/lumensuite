import type { ReactiveController } from 'lit';
import type { DataViewKanban } from '../kanban-view.js';
import type { KanbanCardSelection, KanbanCardSelectionCard, KanbanCellSelection, KanbanViewSelection, KanbanViewSelectionWithType } from '../types.js';
import { KanbanCard } from '../card.js';
import { KanbanCell } from '../cell.js';
export declare class KanbanSelectionController implements ReactiveController {
    private host;
    _selection?: KanbanViewSelectionWithType;
    shiftClickCard: (event: MouseEvent) => void;
    get selection(): KanbanViewSelectionWithType | undefined;
    set selection(data: KanbanViewSelection | undefined);
    get view(): import("../kanban-view-manager.js").KanbanSingleView;
    constructor(host: DataViewKanban);
    blur(selection: KanbanViewSelection): void;
    deleteCard(): void;
    focus(selection: KanbanViewSelection): void;
    focusFirstCell(): void;
    focusIn(): void;
    focusNext(position: 'up' | 'down' | 'left' | 'right'): void;
    focusOut(): void;
    getNextFocusCard(selection: KanbanCardSelection, index: number, nextPosition: 'up' | 'down' | 'left' | 'right'): {
        card: KanbanCard;
        cards: KanbanCardSelectionCard[];
    };
    getNextFocusCell(selection: KanbanCellSelection, index: number, nextPosition: 'up' | 'down' | 'left' | 'right'): {
        cell: KanbanCell;
        cardId?: string;
        groupKey?: string;
    };
    hostConnected(): void;
    insertRowAfter(): void;
    insertRowBefore(): void;
    moveCard(rowId: string, key: string): void;
}
//# sourceMappingURL=selection.d.ts.map