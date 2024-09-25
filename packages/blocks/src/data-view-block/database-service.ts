import { BlockService } from '@lumensuite/block-std';
import { DatabaseSelection } from '@lumensuite/data-view';

import { DataViewBlockSchema } from './data-view-model.js';

export class DataViewBlockService extends BlockService {
  static override readonly flavour = DataViewBlockSchema.model.flavour;

  override mounted(): void {
    super.mounted();
    this.selectionManager.register(DatabaseSelection);
  }
}
