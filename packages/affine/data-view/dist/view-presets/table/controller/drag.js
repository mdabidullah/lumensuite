// related component
import { startDrag } from '../../../core/utils/drag.js';
import { TableRow } from '../row/row.js';
export class TableDragController {
    constructor(host) {
        this.host = host;
        this.dragStart = (row, evt) => {
            const eleRect = row.getBoundingClientRect();
            const offsetLeft = evt.x - eleRect.left;
            const offsetTop = evt.y - eleRect.top;
            const preview = createDragPreview(row, evt.x - offsetLeft, evt.y - offsetTop);
            const fromGroup = row.groupKey;
            startDrag(evt, {
                onDrag: () => undefined,
                onMove: evt => {
                    preview.display(evt.x - offsetLeft, evt.y - offsetTop);
                    if (!this.host.contains(evt.target)) {
                        const callback = this.host.onDrag;
                        if (callback) {
                            this.dropPreview.remove();
                            return {
                                type: 'out',
                                callback: callback(evt, row.rowId),
                            };
                        }
                        return;
                    }
                    const result = this.showIndicator(evt);
                    if (result) {
                        return {
                            type: 'self',
                            groupKey: result.groupKey,
                            position: result.position,
                        };
                    }
                    return;
                },
                onClear: () => {
                    preview.remove();
                    this.dropPreview.remove();
                },
                onDrop: result => {
                    if (!result) {
                        return;
                    }
                    if (result.type === 'out') {
                        result.callback();
                        return;
                    }
                    if (result.type === 'self') {
                        this.host.view.rowMove(row.rowId, result.position, fromGroup, result.groupKey);
                    }
                },
            });
        };
        this.dropPreview = createDropPreview();
        this.getInsertPosition = (evt) => {
            const y = evt.y;
            const tableRect = this.host.getBoundingClientRect();
            const rows = this.host.querySelectorAll('data-view-table-row');
            if (!rows || !tableRect || y < tableRect.top) {
                return;
            }
            for (let i = 0; i < rows.length; i++) {
                const row = rows.item(i);
                const rect = row.getBoundingClientRect();
                const mid = (rect.top + rect.bottom) / 2;
                if (y < rect.bottom) {
                    return {
                        groupKey: row.groupKey,
                        position: {
                            id: row.dataset.rowId,
                            before: y < mid,
                        },
                        y: y < mid ? rect.top : rect.bottom,
                        width: tableRect.width,
                        x: tableRect.left,
                    };
                }
            }
            return;
        };
        this.showIndicator = (evt) => {
            const position = this.getInsertPosition(evt);
            if (position) {
                this.dropPreview.display(position.x, position.y, position.width);
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
            if (target instanceof Element &&
                this.host.contains(target) &&
                target.closest('.data-view-table-view-drag-handler')) {
                event.preventDefault();
                const row = target.closest('data-view-table-row');
                if (row) {
                    getSelection()?.removeAllRanges();
                    this.dragStart(row, event);
                }
                return true;
            }
            return false;
        }));
    }
}
const createDragPreview = (row, x, y) => {
    const div = document.createElement('div');
    const cloneRow = new TableRow();
    cloneRow.view = row.view;
    cloneRow.rowIndex = row.rowIndex;
    cloneRow.rowId = row.rowId;
    cloneRow.dataViewEle = row.dataViewEle;
    div.append(cloneRow);
    div.className = 'with-data-view-css-variable';
    div.style.width = `${row.getBoundingClientRect().width}px`;
    div.style.position = 'fixed';
    div.style.pointerEvents = 'none';
    div.style.backgroundColor = 'var(--affine-background-primary-color)';
    div.style.boxShadow = 'var(--affine-shadow-2)';
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
            div.remove();
        },
    };
};
const createDropPreview = () => {
    const div = document.createElement('div');
    div.dataset.isDropPreview = 'true';
    div.style.pointerEvents = 'none';
    div.style.position = 'fixed';
    div.style.zIndex = '9999';
    div.style.height = '2px';
    div.style.borderRadius = '1px';
    div.style.backgroundColor = 'var(--affine-primary-color)';
    div.style.boxShadow = '0px 0px 8px 0px rgba(30, 150, 235, 0.35)';
    return {
        display(x, y, width) {
            document.body.append(div);
            div.style.left = `${x}px`;
            div.style.top = `${y - 2}px`;
            div.style.width = `${width}px`;
        },
        remove() {
            div.remove();
        },
    };
};
//# sourceMappingURL=drag.js.map