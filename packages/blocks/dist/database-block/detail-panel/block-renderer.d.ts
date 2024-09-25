import type { EditorHost } from '@lumensuite/block-std';
import type { DetailSlotProps } from '@lumensuite/data-view';
import type { KanbanSingleView, TableSingleView } from '@lumensuite/data-view/view-presets';
import { ShadowlessElement } from '@lumensuite/block-std';
declare const BlockRenderer_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class BlockRenderer extends BlockRenderer_base implements DetailSlotProps {
    static styles: import("lit").CSSResult;
    get attributeRenderer(): import("@lumensuite/inline/types").AttributeRenderer<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@lumensuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager;
    get model(): import("@lumensuite/store").BlockModel<object, object> | undefined;
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