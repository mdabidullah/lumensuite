import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { assertExists } from '@lumensuite/global/utils';
import { KanbanCard } from '../card.js';
import { KanbanCell } from '../cell.js';
export class KanbanSelectionController {
    get selection() {
        return this._selection;
    }
    set selection(data) {
        if (!data) {
            this.host.setSelection();
            return;
        }
        const selection = {
            ...data,
            viewId: this.host.view.id,
            type: 'kanban',
        };
        if (selection.selectionType === 'cell' && selection.isEditing) {
            const container = getFocusCell(this.host, selection);
            const cell = container?.cell;
            const isEditing = cell
                ? cell.beforeEnterEditMode()
                    ? selection.isEditing
                    : false
                : false;
            this.host.setSelection({
                ...selection,
                isEditing,
            });
        }
        else {
            this.host.setSelection(selection);
        }
    }
    get view() {
        return this.host.view;
    }
    constructor(host) {
        this.host = host;
        this.shiftClickCard = (event) => {
            event.preventDefault();
            const selection = this.selection;
            const target = event.target;
            const closestCardId = target.closest('affine-data-view-kanban-card')?.cardId;
            const closestGroupKey = target.closest('affine-data-view-kanban-group')
                ?.group.key;
            if (!closestCardId)
                return;
            if (!closestGroupKey)
                return;
            const cards = selection?.selectionType === 'card' ? selection.cards : [];
            const newCards = cards.some(card => card.cardId === closestCardId)
                ? cards.filter(card => card.cardId !== closestCardId)
                : [...cards, { cardId: closestCardId, groupKey: closestGroupKey }];
            this.selection = atLeastOne(newCards)
                ? {
                    selectionType: 'card',
                    cards: newCards,
                }
                : undefined;
        };
        this.host.addController(this);
    }
    blur(selection) {
        if (selection.selectionType !== 'cell') {
            const selectCards = getSelectedCards(this.host, selection);
            selectCards.forEach(card => (card.isFocus = false));
            return;
        }
        const container = getFocusCell(this.host, selection);
        if (!container) {
            return;
        }
        container.isFocus = false;
        const cell = container?.cell;
        if (selection.isEditing) {
            requestAnimationFrame(() => {
                cell?.onExitEditMode();
            });
            if (cell?.blurCell()) {
                container.blur();
            }
            container.editing = false;
        }
        else {
            container.blur();
        }
    }
    deleteCard() {
        const selection = this.selection;
        if (!selection || selection.selectionType === 'cell') {
            return;
        }
        if (selection.selectionType === 'card') {
            this.host.view.rowDelete(selection.cards.map(v => v.cardId));
            this.selection = undefined;
        }
    }
    focus(selection) {
        if (selection.selectionType !== 'cell') {
            const selectCards = getSelectedCards(this.host, selection);
            selectCards.forEach((card, index) => {
                if (index === 0) {
                    card.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
                card.isFocus = true;
            });
            return;
        }
        const container = getFocusCell(this.host, selection);
        if (!container) {
            return;
        }
        container.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        container.isFocus = true;
        const cell = container?.cell;
        if (selection.isEditing) {
            cell?.onEnterEditMode();
            if (cell?.focusCell()) {
                container.focus();
            }
            container.editing = true;
        }
        else {
            container.focus();
        }
    }
    focusFirstCell() {
        const group = this.host.groupManager?.groupsDataList$.value?.[0];
        const card = group?.rows[0];
        const columnId = card && this.host.view.getHeaderTitle(card)?.id;
        if (group && card && columnId) {
            this.selection = {
                selectionType: 'cell',
                groupKey: group.key,
                cardId: card,
                columnId,
                isEditing: false,
            };
        }
    }
    focusIn() {
        const selection = this.selection;
        if (!selection)
            return;
        if (selection.selectionType === 'cell' && selection.isEditing)
            return;
        if (selection.selectionType === 'cell') {
            this.selection = {
                ...selection,
                isEditing: true,
            };
            return;
        }
        if (selection.selectionType === 'card') {
            const card = getSelectedCards(this.host, selection)[0];
            const cell = card?.querySelector('affine-data-view-kanban-cell');
            if (cell) {
                this.selection = {
                    groupKey: card.groupKey,
                    cardId: card.cardId,
                    selectionType: 'cell',
                    columnId: cell.column.id,
                    isEditing: false,
                };
            }
        }
        else {
            // Not yet implement
        }
    }
    focusNext(position) {
        const selection = this.selection;
        if (!selection) {
            return;
        }
        if (selection.selectionType === 'cell' && !selection.isEditing) {
            // cell focus
            const kanbanCells = getCardCellsBySelection(this.host, selection);
            const index = kanbanCells.findIndex(cell => cell.column.id === selection.columnId);
            const { cell, cardId, groupKey } = this.getNextFocusCell(selection, index, position);
            if (cell instanceof KanbanCell) {
                this.selection = {
                    ...selection,
                    cardId: cardId ?? selection.cardId,
                    groupKey: groupKey ?? selection.groupKey,
                    columnId: cell.column.id,
                };
            }
        }
        else if (selection.selectionType === 'card') {
            // card focus
            const group = this.host.querySelector(`affine-data-view-kanban-group[data-key="${selection.cards[0].groupKey}"]`);
            const cardElements = Array.from(group?.querySelectorAll('affine-data-view-kanban-card') ?? []);
            const index = cardElements.findIndex(card => card.cardId === selection.cards[0].cardId);
            const { card, cards } = this.getNextFocusCard(selection, index, position);
            if (card instanceof KanbanCard) {
                const newCards = cards ?? selection.cards;
                this.selection = atLeastOne(newCards)
                    ? {
                        ...selection,
                        cards: newCards,
                    }
                    : undefined;
            }
        }
    }
    focusOut() {
        const selection = this.selection;
        if (selection?.selectionType === 'card') {
            if (atLeastOne(selection.cards)) {
                this.selection = {
                    ...selection,
                    cards: [selection.cards[0]],
                };
            }
            else {
                // Not yet implement
                return;
            }
        }
        if (selection?.selectionType !== 'cell') {
            return;
        }
        if (selection.isEditing) {
            this.selection = {
                ...selection,
                isEditing: false,
            };
        }
        else {
            this.selection = {
                selectionType: 'card',
                cards: [
                    {
                        cardId: selection.cardId,
                        groupKey: selection.groupKey,
                    },
                ],
            };
        }
    }
    getNextFocusCard(selection, index, nextPosition) {
        const group = this.host.querySelector(`affine-data-view-kanban-group[data-key="${selection.cards[0].groupKey}"]`);
        const kanbanCards = Array.from(group?.querySelectorAll('affine-data-view-kanban-card') ?? []);
        if (nextPosition === 'up') {
            const nextIndex = index - 1;
            const nextCardIndex = nextIndex < 0 ? kanbanCards.length - 1 : nextIndex;
            const card = kanbanCards[nextCardIndex];
            return {
                card,
                cards: [
                    {
                        cardId: card.cardId,
                        groupKey: card.groupKey,
                    },
                ],
            };
        }
        if (nextPosition === 'down') {
            const nextIndex = index + 1;
            const nextCardIndex = nextIndex > kanbanCards.length - 1 ? 0 : nextIndex;
            const card = kanbanCards[nextCardIndex];
            return {
                card,
                cards: [
                    {
                        cardId: card.cardId,
                        groupKey: card.groupKey,
                    },
                ],
            };
        }
        const groups = Array.from(this.host.querySelectorAll('affine-data-view-kanban-group'));
        if (nextPosition === 'right') {
            return getNextGroupFocusElement(this.host, groups, selection, groupIndex => (groupIndex === groups.length - 1 ? 0 : groupIndex + 1));
        }
        if (nextPosition === 'left') {
            return getNextGroupFocusElement(this.host, groups, selection, groupIndex => (groupIndex === 0 ? groups.length - 1 : groupIndex - 1));
        }
        throw new LumenSuiteError(ErrorCode.DatabaseBlockError, 'Unknown arrow keys, only support: up, down, left, and right keys.');
    }
    getNextFocusCell(selection, index, nextPosition) {
        const kanbanCells = getCardCellsBySelection(this.host, selection);
        const group = this.host.querySelector(`affine-data-view-kanban-group[data-key="${selection.groupKey}"]`);
        const cards = Array.from(group?.querySelectorAll('affine-data-view-kanban-card') ?? []);
        if (nextPosition === 'up') {
            const nextIndex = index - 1;
            if (nextIndex < 0) {
                if (cards.length > 1) {
                    return getNextCardFocusCell(nextPosition, cards, selection, cardIndex => (cardIndex === 0 ? cards.length - 1 : cardIndex - 1));
                }
                else {
                    return {
                        cell: kanbanCells[kanbanCells.length - 1],
                    };
                }
            }
            return {
                cell: kanbanCells[nextIndex],
            };
        }
        if (nextPosition === 'down') {
            const nextIndex = index + 1;
            if (nextIndex >= kanbanCells.length) {
                if (cards.length > 1) {
                    return getNextCardFocusCell(nextPosition, cards, selection, cardIndex => (cardIndex === cards.length - 1 ? 0 : cardIndex + 1));
                }
                else {
                    return {
                        cell: kanbanCells[0],
                    };
                }
            }
            return {
                cell: kanbanCells[nextIndex],
            };
        }
        const groups = Array.from(this.host.querySelectorAll('affine-data-view-kanban-group'));
        if (nextPosition === 'right') {
            return getNextGroupFocusElement(this.host, groups, selection, groupIndex => (groupIndex === groups.length - 1 ? 0 : groupIndex + 1));
        }
        if (nextPosition === 'left') {
            return getNextGroupFocusElement(this.host, groups, selection, groupIndex => (groupIndex === 0 ? groups.length - 1 : groupIndex - 1));
        }
        throw new LumenSuiteError(ErrorCode.DatabaseBlockError, 'Unknown arrow keys, only support: up, down, left, and right keys.');
    }
    hostConnected() {
        this.host.disposables.add(this.host.selection$.subscribe(selection => {
            const old = this._selection;
            if (old) {
                this.blur(old);
            }
            this._selection = selection;
            if (selection) {
                this.focus(selection);
            }
        }));
    }
    insertRowAfter() {
        const selection = this.selection;
        if (selection?.selectionType !== 'card') {
            return;
        }
        const { cardId, groupKey } = selection.cards[0];
        const id = this.view.addCard({ before: false, id: cardId }, groupKey);
        requestAnimationFrame(() => {
            const columnId = this.view.header$.value.titleColumn;
            if (columnId) {
                this.selection = {
                    selectionType: 'cell',
                    groupKey,
                    cardId: id,
                    columnId,
                    isEditing: true,
                };
            }
            else {
                this.selection = {
                    selectionType: 'card',
                    cards: [
                        {
                            cardId: id,
                            groupKey,
                        },
                    ],
                };
            }
        });
    }
    insertRowBefore() {
        const selection = this.selection;
        if (selection?.selectionType !== 'card') {
            return;
        }
        const { cardId, groupKey } = selection.cards[0];
        const id = this.view.addCard({ before: true, id: cardId }, groupKey);
        requestAnimationFrame(() => {
            const columnId = this.view.header$.value.titleColumn;
            if (columnId) {
                this.selection = {
                    selectionType: 'cell',
                    groupKey,
                    cardId: id,
                    columnId,
                    isEditing: true,
                };
            }
            else {
                this.selection = {
                    selectionType: 'card',
                    cards: [
                        {
                            cardId: id,
                            groupKey,
                        },
                    ],
                };
            }
        });
    }
    moveCard(rowId, key) {
        const selection = this.selection;
        if (selection?.selectionType !== 'card') {
            return;
        }
        this.view.groupManager.moveCardTo(rowId, selection.cards[0].groupKey, key, 'start');
        requestAnimationFrame(() => {
            if (this.selection?.selectionType !== 'card')
                return;
            const newCards = selection.cards.map(card => ({
                ...card,
                groupKey: card.groupKey,
            }));
            this.selection = atLeastOne(newCards)
                ? {
                    ...selection,
                    cards: newCards,
                }
                : undefined;
        });
    }
}
function getNextGroupFocusElement(viewElement, groups, selection, getNextGroupIndex) {
    const groupIndex = groups.findIndex(group => {
        if (selection.selectionType === 'cell') {
            return group.group.key === selection.groupKey;
        }
        return group.group.key === selection.cards[0].groupKey;
    });
    let nextGroupIndex = getNextGroupIndex(groupIndex);
    let nextGroup = groups[nextGroupIndex];
    while (nextGroup.group.rows.length === 0) {
        nextGroupIndex = getNextGroupIndex(nextGroupIndex);
        nextGroup = groups[nextGroupIndex];
    }
    const element = selection.selectionType === 'cell'
        ? getFocusCell(viewElement, selection)
        : getSelectedCards(viewElement, selection)[0];
    assertExists(element);
    const rect = element.getBoundingClientRect();
    const nextCards = Array.from(nextGroup.querySelectorAll('affine-data-view-kanban-card'));
    const cardPos = nextCards
        .map((card, index) => {
        const targetRect = card.getBoundingClientRect();
        return {
            offsetY: getYOffset(rect, targetRect),
            index,
        };
    })
        .reduce((prev, curr) => {
        if (prev.offsetY < curr.offsetY) {
            return prev;
        }
        return curr;
    });
    const nextCard = nextCards[cardPos.index];
    if (selection.selectionType === 'card') {
        return {
            card: nextCard,
            cards: [
                {
                    cardId: nextCard.cardId,
                    groupKey: nextGroup.group.key,
                },
            ],
        };
    }
    const cells = Array.from(nextCard.querySelectorAll('affine-data-view-kanban-cell'));
    const cellPos = cells
        .map((card, index) => {
        const targetRect = card.getBoundingClientRect();
        return {
            offsetY: getYOffset(rect, targetRect),
            index,
        };
    })
        .reduce((prev, curr) => {
        if (prev.offsetY < curr.offsetY) {
            return prev;
        }
        return curr;
    });
    const nextCell = cells[cellPos.index];
    return {
        cell: nextCell,
        cardId: nextCard.cardId,
        groupKey: nextGroup.group.key,
    };
}
function getNextCardFocusCell(nextPosition, cards, selection, getNextCardIndex) {
    const cardIndex = cards.findIndex(card => card.cardId === selection.cardId);
    const nextCardIndex = getNextCardIndex(cardIndex);
    const nextCard = cards[nextCardIndex];
    const nextCells = Array.from(nextCard.querySelectorAll('affine-data-view-kanban-cell'));
    const nextCellIndex = nextPosition === 'up' ? nextCells.length - 1 : 0;
    return {
        cell: nextCells[nextCellIndex],
        cardId: nextCard.cardId,
    };
}
function getCardCellsBySelection(viewElement, selection) {
    const card = getSelectedCard(viewElement, selection);
    return Array.from(card?.querySelectorAll('affine-data-view-kanban-cell') ?? []);
}
function getSelectedCard(viewElement, selection) {
    const group = viewElement.querySelector(`affine-data-view-kanban-group[data-key="${selection.groupKey}"]`);
    if (!group)
        return null;
    return group.querySelector(`affine-data-view-kanban-card[data-card-id="${selection.cardId}"]`);
}
function getSelectedCards(viewElement, selection) {
    if (selection.selectionType === 'group')
        return [];
    const groupKeys = selection.cards.map(card => card.groupKey);
    const groups = groupKeys
        .map(key => viewElement.querySelector(`affine-data-view-kanban-group[data-key="${key}"]`))
        .filter((group) => group !== null);
    const cardIds = selection.cards.map(card => card.cardId);
    const cards = groups
        .flatMap(group => cardIds.map(id => group.querySelector(`affine-data-view-kanban-card[data-card-id="${id}"]`)))
        .filter((card) => card !== null);
    return cards;
}
function getFocusCell(viewElement, selection) {
    const card = getSelectedCard(viewElement, selection);
    return card?.querySelector(`affine-data-view-kanban-cell[data-column-id="${selection.columnId}"]`);
}
function getYOffset(srcRect, targetRect) {
    return Math.abs(srcRect.top +
        (srcRect.bottom - srcRect.top) / 2 -
        (targetRect.top + (targetRect.bottom - targetRect.top) / 2));
}
const atLeastOne = (v) => {
    return v.length > 0;
};
//# sourceMappingURL=selection.js.map