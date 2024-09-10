var _a;
import { Slot } from '@blocksuite/global/utils';
import { computed, signal } from '@preact/signals-core';
import { z } from 'zod';
import { Boxed } from '../reactive/boxed.js';
import { Text } from '../reactive/text.js';
const FlavourSchema = z.string();
const ParentSchema = z.array(z.string()).optional();
const ContentSchema = z.array(z.string()).optional();
const role = ['root', 'hub', 'content'];
const RoleSchema = z.enum(role);
export const internalPrimitives = Object.freeze({
    Text: (input = '') => new Text(input),
    Boxed: (input) => new Boxed(input),
});
export const BlockSchema = z.object({
    version: z.number(),
    model: z.object({
        role: RoleSchema,
        flavour: FlavourSchema,
        parent: ParentSchema,
        children: ContentSchema,
        props: z
            .function()
            .args(z.custom())
            .returns(z.record(z.any()))
            .optional(),
        toModel: z.function().args().returns(z.custom()).optional(),
    }),
    transformer: z
        .function()
        .args()
        .returns(z.custom())
        .optional(),
    onUpgrade: z
        .function()
        .args(z.any(), z.number(), z.number())
        .returns(z.void())
        .optional(),
});
export function defineBlockSchema({ flavour, props, metadata, onUpgrade, toModel, transformer, }) {
    const schema = {
        version: metadata.version,
        model: {
            role: metadata.role,
            parent: metadata.parent,
            children: metadata.children,
            flavour,
            props,
            toModel,
        },
        onUpgrade,
        transformer,
    };
    BlockSchema.parse(schema);
    return schema;
}
/**
 * The MagicProps function is used to append the props to the class.
 * For example:
 *
 * ```ts
 * class MyBlock extends MagicProps()<{ foo: string }> {}
 * const myBlock = new MyBlock();
 * // You'll get type checking for the foo prop
 * myBlock.foo = 'bar';
 * ```
 */
function MagicProps() {
    return class {
    };
}
const modelLabel = Symbol('model_label');
// @ts-ignore
export class BlockModel extends MagicProps() {
    get children() {
        return this._childModels.value;
    }
    get doc() {
        return this.page;
    }
    set doc(doc) {
        this.page = doc;
    }
    get parent() {
        return this.doc.getParent(this);
    }
    constructor() {
        super();
        this._childModels = computed(() => {
            const value = [];
            this._children.value.map(id => {
                const block = this.page.getBlock$(id);
                if (block) {
                    value.push(block.model);
                }
            });
            return value;
        });
        this._children = signal([]);
        this.childMap = computed(() => this._children.value.reduce((map, id, index) => {
            map.set(id, index);
            return map;
        }, new Map()));
        this.created = new Slot();
        this.deleted = new Slot();
        this.isEmpty = computed(() => {
            return this._children.value.length === 0;
        });
        // This is used to avoid https://stackoverflow.com/questions/55886792/infer-typescript-generic-class-type
        this[_a] = 'type_info_label';
        this.propsUpdated = new Slot();
        this._onCreated = this.created.once(() => {
            this._children.value = this.yBlock.get('sys:children').toArray();
            this.yBlock.get('sys:children').observe(event => {
                this._children.value = event.target.toArray();
            });
            this.yBlock.observe(event => {
                if (event.keysChanged.has('sys:children')) {
                    this._children.value = this.yBlock.get('sys:children').toArray();
                }
            });
        });
        this._onDeleted = this.deleted.once(() => {
            this._onCreated.dispose();
        });
    }
    dispose() {
        this.created.dispose();
        this.deleted.dispose();
        this.propsUpdated.dispose();
    }
    firstChild() {
        return this.children[0] || null;
    }
    lastChild() {
        if (!this.children.length) {
            return this;
        }
        return this.children[this.children.length - 1].lastChild();
    }
    [(_a = modelLabel, Symbol.dispose)]() {
        this._onCreated.dispose();
        this._onDeleted.dispose();
    }
}
//# sourceMappingURL=base.js.map