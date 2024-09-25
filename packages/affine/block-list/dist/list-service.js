import { textKeymap } from '@lumensuite/affine-components/rich-text';
import { ListBlockSchema } from '@lumensuite/affine-model';
import { matchFlavours } from '@lumensuite/affine-shared/utils';
import { BlockService } from '@lumensuite/block-std';
import { correctNumberedListsOrderToPrev } from './commands/utils.js';
import { listKeymap } from './list-keymap.js';
import { listPrefix, toggleStyles } from './styles.js';
import { getListIcon } from './utils/get-list-icon.js';
export class ListBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.styles = {
            icon: getListIcon,
            prefix: listPrefix,
            toggle: toggleStyles,
        };
    }
    static { this.flavour = ListBlockSchema.model.flavour; }
    mounted() {
        super.mounted();
        this.bindHotKey(listKeymap(this.std));
        this.bindHotKey(textKeymap(this.std));
        const rootId = this.std.doc.root?.id;
        if (!rootId)
            return;
        requestAnimationFrame(() => {
            const widget = this.host.view.getWidget('affine-drag-handle-widget', rootId);
            if (!widget)
                return;
            this.disposables.add(
            // @ts-expect-error TODO: fix after migrate drag handle widget to a standalone package
            widget.constructor.registerOption({
                flavour: ListBlockSchema.model.flavour,
                onDragEnd: ({ draggingElements, }) => {
                    draggingElements.forEach((el) => {
                        const model = el.model;
                        const doc = el.doc;
                        if (matchFlavours(model, ['affine:list']) &&
                            model.type === 'numbered') {
                            const next = el.doc.getNext(model);
                            this.host.updateComplete
                                .then(() => {
                                correctNumberedListsOrderToPrev(doc, model);
                                if (next) {
                                    correctNumberedListsOrderToPrev(doc, next);
                                }
                            })
                                .catch(console.error);
                        }
                    });
                    return false;
                },
            }));
        });
    }
}
//# sourceMappingURL=list-service.js.map