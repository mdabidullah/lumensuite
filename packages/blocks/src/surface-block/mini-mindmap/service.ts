import { RootBlockSchema } from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';
import { Slot } from '@lumensuite/store';

export class MindmapService extends BlockService {
  static override readonly flavour = RootBlockSchema.model.flavour;

  requestCenter = new Slot();

  center() {
    this.requestCenter.emit();
  }

  override mounted(): void {}
}
