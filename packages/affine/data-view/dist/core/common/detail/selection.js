import { KanbanCell } from '../../../view-presets/kanban/cell.js';
import { RecordField } from './field.js';
export class DetailSelection {
    get selection() {
        return this._selection;
    }
    set selection(selection) {
        if (!selection) {
            this.onSelect();
            return;
        }
        if (selection.isEditing) {
            const container = this.getFocusCellContainer(selection);
            const cell = container?.cell;
            const isEditing = cell
                ? cell.beforeEnterEditMode()
                    ? selection.isEditing
                    : false
                : false;
            this.onSelect({
                propertyId: selection.propertyId,
                isEditing,
            });
        }
        else {
            this.onSelect(selection);
        }
    }
    constructor(viewEle) {
        this.viewEle = viewEle;
        this.onSelect = (selection) => {
            const old = this._selection;
            if (old) {
                this.blur(old);
            }
            this._selection = selection;
            if (selection) {
                this.focus(selection);
            }
        };
    }
    blur(selection) {
        const container = this.getFocusCellContainer(selection);
        if (!container) {
            return;
        }
        container.isFocus = false;
        const cell = container.cell;
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
    deleteProperty() {
        //
    }
    focus(selection) {
        const container = this.getFocusCellContainer(selection);
        if (!container) {
            return;
        }
        container.isFocus = true;
        const cell = container.cell;
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
    focusDown() {
        const selection = this.selection;
        if (!selection || selection?.isEditing) {
            return;
        }
        const nextContainer = this.getFocusCellContainer(selection)?.nextElementSibling;
        if (nextContainer instanceof KanbanCell) {
            this.selection = {
                propertyId: nextContainer.column.id,
                isEditing: false,
            };
        }
    }
    focusFirstCell() {
        const firstId = this.viewEle.querySelector('affine-data-view-record-field')
            ?.column.id;
        if (firstId) {
            this.selection = {
                propertyId: firstId,
                isEditing: true,
            };
        }
    }
    focusUp() {
        const selection = this.selection;
        if (!selection || selection?.isEditing) {
            return;
        }
        const preContainer = this.getFocusCellContainer(selection)?.previousElementSibling;
        if (preContainer instanceof RecordField) {
            this.selection = {
                propertyId: preContainer.column.id,
                isEditing: false,
            };
        }
    }
    getFocusCellContainer(selection) {
        return this.viewEle.querySelector(`affine-data-view-record-field[data-column-id="${selection.propertyId}"]`);
    }
    getSelectCard(selection) {
        const { groupKey, cardId } = selection.cards[0];
        return this.viewEle
            .querySelector(`affine-data-view-kanban-group[data-key="${groupKey}"]`)
            ?.querySelector(`affine-data-view-kanban-card[data-card-id="${cardId}"]`);
    }
}
//# sourceMappingURL=selection.js.map