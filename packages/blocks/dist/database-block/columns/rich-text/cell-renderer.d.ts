import { type AffineInlineEditor, type AffineTextAttributes } from '@lumensuite/affine-components/rich-text';
import { BaseCellRenderer } from '@lumensuite/data-view';
import { Text } from '@lumensuite/store';
import { nothing, type PropertyValues } from 'lit';
export declare class RichTextCell extends BaseCellRenderer<Text> {
    static styles: import("lit").CSSResult;
    get attributeRenderer(): import("@lumensuite/inline/types").AttributeRenderer<AffineTextAttributes> | undefined;
    get attributesSchema(): import("zod").ZodObject<Record<keyof AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
    }> | undefined;
    get inlineEditor(): AffineInlineEditor;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager | undefined;
    get service(): import("../../database-service.js").DatabaseBlockService | undefined;
    get topContenteditableElement(): import("@lumensuite/block-std").BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null | undefined;
    private changeUserSelectAccordToReadOnly;
    connectedCallback(): void;
    render(): import("lit/async-directive.js").DirectiveResult<typeof import("lit/directives/keyed.js").Keyed>;
    updated(changedProperties: PropertyValues): void;
    private accessor _richTextElement;
}
export declare class RichTextCellEditing extends BaseCellRenderer<Text> {
    static styles: import("lit").CSSResult;
    private _handleKeyDown;
    private _initYText;
    private _onSoftEnter;
    get attributeRenderer(): import("@lumensuite/inline/types").AttributeRenderer<AffineTextAttributes> | undefined;
    get attributesSchema(): import("zod").ZodObject<Record<keyof AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
    }> | undefined;
    get inlineEditor(): AffineInlineEditor;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager | undefined;
    get service(): import("../../database-service.js").DatabaseBlockService | undefined;
    get topContenteditableElement(): import("@lumensuite/block-std").BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null | undefined;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult | typeof nothing;
    private accessor _richTextElement;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-rich-text-cell-editing': RichTextCellEditing;
    }
}
export declare const richTextColumnConfig: import("@lumensuite/data-view").ColumnMeta<"rich-text", Record<string, never>, import("../utils.js").RichTextCellType>;
//# sourceMappingURL=cell-renderer.d.ts.map