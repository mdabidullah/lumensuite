import { computed } from '@lit-labs/preact-signals';
import { CellBase } from './cell.js';
export class RowBase {
    constructor(singleView, rowId) {
        this.singleView = singleView;
        this.rowId = rowId;
        this.cells$ = computed(() => {
            return this.singleView.columns$.value.map(columnId => {
                return new CellBase(this.singleView, columnId, this.rowId);
            });
        });
    }
}
//# sourceMappingURL=row.js.map