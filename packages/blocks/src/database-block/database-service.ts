import type { BlockModel, Doc } from '@lumensuite/store';

import {
  type DatabaseBlockModel,
  DatabaseBlockSchema,
} from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
import { DatabaseSelection, type ViewMeta } from '@lumensuite/data-view';
import { viewPresets } from '@lumensuite/data-view/view-presets';
import { assertExists } from '@lumensuite/global/utils';

import {
  addColumn,
  applyColumnUpdate,
  databaseViewAddView,
  databaseViewInitEmpty,
  databaseViewInitTemplate,
  updateCell,
  updateView,
} from './utils.js';

export class DatabaseBlockService extends BlockService {
  static override readonly flavour = DatabaseBlockSchema.model.flavour;

  addColumn = addColumn;

  applyColumnUpdate = applyColumnUpdate;

  databaseViewAddView = databaseViewAddView;

  databaseViewInitEmpty = databaseViewInitEmpty;

  updateCell = updateCell;

  updateView = updateView;

  viewPresets = viewPresets;

  initDatabaseBlock(
    doc: Doc,
    model: BlockModel,
    databaseId: string,
    viewMeta: ViewMeta,
    isAppendNewRow = true
  ) {
    const blockModel = doc.getBlockById(databaseId) as DatabaseBlockModel;
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

  override mounted(): void {
    super.mounted();
    this.selectionManager.register(DatabaseSelection);
  }
}
