import { DatabaseBlockSchema, } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
import { DatabaseSelection } from '@blocksuite/data-view';
import { viewPresets } from '@blocksuite/data-view/view-presets';
import { assertExists } from '@blocksuite/global/utils';
import { addColumn, applyColumnUpdate, databaseViewAddView, databaseViewInitEmpty, databaseViewInitTemplate, updateCell, updateView, } from './utils.js';
export class DatabaseBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.addColumn = addColumn;
        this.applyColumnUpdate = applyColumnUpdate;
        this.databaseViewAddView = databaseViewAddView;
        this.databaseViewInitEmpty = databaseViewInitEmpty;
        this.updateCell = updateCell;
        this.updateView = updateView;
        this.viewPresets = viewPresets;
    }
    static { this.flavour = DatabaseBlockSchema.model.flavour; }
    initDatabaseBlock(doc, model, databaseId, viewMeta, isAppendNewRow = true) {
        const blockModel = doc.getBlockById(databaseId);
        assertExists(blockModel);
        databaseViewInitTemplate(blockModel, viewMeta);
        if (isAppendNewRow) {
            // Add a paragraph after database
            const parent = doc.getParent(model);
            assertExists(parent);
            doc.addBlock('affine:paragraph', {}, parent.id);
        }
        applyColumnUpdate(blockModel);
    }
    mounted() {
        super.mounted();
        this.selectionManager.register(DatabaseSelection);
    }
}
//# sourceMappingURL=database-service.js.map