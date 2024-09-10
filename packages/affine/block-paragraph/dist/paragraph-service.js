import { textKeymap } from '@blocksuite/affine-components/rich-text';
import { ParagraphBlockSchema, } from '@blocksuite/affine-model';
import { BlockService } from '@blocksuite/block-std';
import { paragraphKeymap } from './paragraph-keymap.js';
export class ParagraphBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.placeholderGenerator = model => {
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
    }
    static { this.flavour = ParagraphBlockSchema.model.flavour; }
    mounted() {
        super.mounted();
        this.bindHotKey(textKeymap(this.std));
        this.bindHotKey(paragraphKeymap(this.std));
    }
}
//# sourceMappingURL=paragraph-service.js.map