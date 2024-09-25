import { textKeymap } from '@lumensuite/affine-components/rich-text';
import {
  type ParagraphBlockModel,
  ParagraphBlockSchema,
} from '@lumensuite/affine-model';
import { BlockService } from '@lumensuite/block-std';

import { paragraphKeymap } from './paragraph-keymap.js';

export class ParagraphBlockService extends BlockService {
  static override readonly flavour = ParagraphBlockSchema.model.flavour;

  placeholderGenerator: (model: ParagraphBlockModel) => string = model => {
    if (model.type === 'text') {
      return "Type '/' for commands";
    }

    const placeholders = {
      h1: 'Heading 1',
      h2: 'Heading 2',
      h3: 'Heading 3',
      h4: 'Heading 4',
      h5: 'Heading 5',
      h6: 'Heading 6',
      quote: '',
    };
    return placeholders[model.type];
  };

  override mounted(): void {
    super.mounted();

    this.bindHotKey(textKeymap(this.std));
    this.bindHotKey(paragraphKeymap(this.std));
  }
}
