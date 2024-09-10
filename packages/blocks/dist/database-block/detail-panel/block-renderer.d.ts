import type { EditorHost } from '@blocksuite/block-std';
import type { DetailSlotProps } from '@blocksuite/data-view';
import type { KanbanSingleView, TableSingleView } from '@blocksuite/data-view/view-presets';
import { ShadowlessElement } from '@blocksuite/block-std';
declare const BlockRenderer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BlockRenderer extends BlockRenderer_base implements DetailSlotProps {
    static styles: import("lit").CSSResult;
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@blocksuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        color?: any;
        code?: any;
        link?: any;
        strike?: any;
        bold?: any;
        reference?: any;
        italic?: any;
        underline?: any;
        background?: any;
        latex?: any;
    }, {
        color?: any;
        code?: any;
        link?: any;
        strike?: any;
        bold?: any;
        reference?: any;
        italic?: any;
        underline?: any;
        background?: any;
        latex?: any;
    }>;
    get inlineManager(): import("@blocksuite/affine-components/rich-text").InlineManager;
    get model(): import("@blocksuite/store").BlockModel<object, object> | undefined;
    get service(): import("../database-service.js").DatabaseBlockService;
    connectedCallback(): void;
    protected render(): unknown;
    renderIcon(): import("lit").TemplateResult<1> | undefined;
    accessor host: EditorHost;
    accessor rowId: string;
    accessor view: TableSingleView | KanbanSingleView;
}
export {};
//# sourceMappingURL=block-renderer.d.ts.map