import { assertExists, Point, Rect } from '@blocksuite/global/utils';
import { startDrag } from '../../../core/utils/drag.js';
import { autoScrollOnBoundary } from '../../../core/utils/frame-loop.js';
import { KanbanCard } from '../card.js';
import { KanbanGroup } from '../group.js';
export class KanbanDragController {
    get scrollContainer() {
        const scrollContainer = this.host.querySelector('.affine-data-view-kanban-groups');
        assertExists(scrollContainer);
        return scrollContainer;
    }
    constructor(host) {
        this.host = host;
        this.dragStart = (ele, evt) => {
            const eleRect = ele.getBoundingClientRect();
            const offsetLeft = evt.x - eleRect.left;
            const offsetTop = evt.y - eleRect.top;
            const preview = createDragPreview(ele, evt.x - offsetLeft, evt.y - offsetTop);
            const currentGroup = ele.closest('affine-data-view-kanban-group');
            const cancelScroll = autoScrollOnBoundary(this.scrollContainer);
            startDrag(evt, {
                onDrag: () => undefined,
                onMove: evt => {
                    if (!(evt.target instanceof HTMLElement)) {
                        return;
                    }
                    preview.display(evt.x - offsetLeft, evt.y - offsetTop);
                    if (!Rect.fromDOM(this.host).isPointIn(Point.from(evt))) {
                        const callback = this.host.onDrag;
                        if (callback) {
                            this.dropPreview.remove();
                            return {
                                type: 'out',
                                callback: callback(evt, ele.cardId),
                            };
                        }
                        return;
                    }
                    const result = this.shooIndicator(evt, ele);
                    if (result) {
                        return {
                            type: 'self',
                            key: result.group.group.key,
                            position: result.position,
                        };
                    }
                    return;
                },
                onClear: () => {
                    preview.remove();
                    this.dropPreview.remove();
                    cancelScroll();
                },
                onDrop: result => {
                    if (!result) {
                        return;
                    }
                    if (result.type === 'out') {
                        result.callback();
                        return;
                    }
                    if (result && currentGroup) {
                        currentGroup.group.manager.moveCardTo(ele.cardId, currentGroup.group.key, result.key, result.position);
                    }
                },
            });
        };
        this.dropPreview = createDropPreview();
        this.getInsertPosition = (evt) => {
            const eles = document.elementsFromPoint(evt.x, evt.y);
            const target = eles.find(v => v instanceof KanbanGroup);
            if (target) {
                const card = getCardByPoint(target, evt.y);
                return {
                    group: target,
                    card,
                    position: card
                        ? {
                            before: true,
                            id: card.cardId,
                        }
                        : 'end',
                };
            }
            else {
                return;
            }
        };
        this.shooIndicator = (evt, self) => {
            const position = this.getInsertPosition(evt);
            if (position) {
                this.dropPreview.display(position.group, self, position.card);
            }
            else {
                this.dropPreview.remove();
            }
            return position;
        };
        this.host.addController(this);
    }
    hostConnected() {
        if (this.host.view.readonly$.value) {
            return;
        }
        this.host.disposables.add(this.host.handleEvent('dragStart', context => {
            const event = context.get('pointerState').raw;
            const target = event.target;
            if (target instanceof Element) {
                const cell = target.closest('affine-data-view-kanban-cell');
                if (cell?.editing) {
                    return;
                }
                cell?.selectCurrentCell(false);
                const card = target.closest('affine-data-view-kanban-card');
                if (card) {
                    this.dragStart(card, event);
                }
            }
            return true;
        }));
    }
}
const createDragPreview = (card, x, y) => {
    const preOpacity = card.style.opacity;
    card.style.opacity = '0.5';
    const div = document.createElement('div');
    const kanbanCard = new KanbanCard();
    kanbanCard.cardId = card.cardId;
    kanbanCard.view = card.view;
    kanbanCard.isFocus = true;
    kanbanCard.style.backgroundColor = 'var(--affine-background-primary-color)';
    div.append(kanbanCard);
    div.className = 'with-data-view-css-variable';
    div.style.width = `${card.getBoundingClientRect().width}px`;
    div.style.position = 'fixed';
    // div.style.pointerEvents = 'none';
    div.style.transform = 'rotate(-3deg)';
    div.style.left = `${x}px`;
    div.style.top = `${y}px`;
    div.style.zIndex = '9999';
    document.body.append(div);
    return {
        display(x, y) {
            div.style.left = `${Math.round(x)}px`;
            div.style.top = `${Math.round(y)}px`;
        },
        remove() {
            card.style.opacity = preOpacity;
            div.remove();
        },
    };
};
const createDropPreview = () => {
    const div = document.createElement('div');
    div.style.height = '2px';
    div.style.borderRadius = '1px';
    div.style.backgroundColor = 'var(--affine-primary-color)';
    div.style.boxShadow = '0px 0px 8px 0px rgba(30, 150, 235, 0.35)';
    return {
        display(group, self, card) {
            const target = card ?? group.querySelector('.add-card');
            assertExists(target);
            if (target.previousElementSibling === self || target === self) {
                div.remove();
                return;
            }
            if (target.previousElementSibling === div) {
                return;
            }
            target.insertAdjacentElement('beforebegin', div);
        },
        remove() {
            div.remove();
        },
    };
};
const getCardByPoint = (group, y) => {
    const cards = Array.from(group.querySelectorAll('affine-data-view-kanban-card'));
    const positions = cards.map(v => {
        const rect = v.getBoundingClientRect();
        return (rect.top + rect.bottom) / 2;
    });
    const index = positions.findIndex(v => v > y);
    return cards[index];
};
//# sourceMappingURL=drag.js.map