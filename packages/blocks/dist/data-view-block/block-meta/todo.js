import { ListBlockSchema } from '@lumensuite/affine-model';
import { columnPresets } from '@lumensuite/data-view/column-presets';
import { richTextColumnConfig } from '../../database-block/columns/rich-text/cell-renderer.js';
import { createBlockMeta } from './base.js';
export const todoMeta = createBlockMeta({
    selector: block => {
        if (block.flavour !== ListBlockSchema.model.flavour) {
            return false;
        }
        return block.model.type === 'todo';
    },
});
todoMeta.addProperty({
    name: 'Content',
    key: 'todo-title',
    columnMeta: richTextColumnConfig,
    get: block => block.text.yText,
    set: (_block, _value) => {
        //
    },
    updated: (block, callback) => {
        block.text?.yText.observe(callback);
        return {
            dispose: () => {
                block.text?.yText.unobserve(callback);
            },
        };
    },
});
todoMeta.addProperty({
    name: 'Checked',
    key: 'todo-checked',
    columnMeta: columnPresets.checkboxColumnConfig,
    get: block => block.checked,
    set: (block, value) => {
        block.checked = value;
    },
    updated: (block, callback) => {
        return block.propsUpdated.on(({ key }) => {
            if (key === 'checked') {
                callback();
            }
        });
    },
});
todoMeta.addProperty({
    name: 'Source',
    key: 'todo-source',
    columnMeta: columnPresets.textColumnConfig,
    get: block => block.doc.meta?.title ?? '',
    updated: (block, callback) => {
        return block.doc.collection.meta.docMetaUpdated.on(() => {
            callback();
        });
    },
});
//# sourceMappingURL=todo.js.map