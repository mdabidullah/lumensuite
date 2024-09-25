import type { Text } from '@lumensuite/store';
import { type RichText } from '@lumensuite/affine-components/rich-text';
import { BaseCellRenderer } from '@lumensuite/data-view';
declare abstract class BaseTextCell extends BaseCellRenderer<Text> {
    static styles: import("lit").CSSResult;
    get attributeRenderer(): import("@lumensuite/inline/types").AttributeRenderer<import("@lumensuite/affine-components/rich-text").AffineTextAttributes> | undefined;
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
    }> | undefined;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager | undefined;
    get service(): import("../../database-service.js").DatabaseBlockService | undefined;
    get topContenteditableElement(): import("@lumensuite/block-std").BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null | undefined;
    renderIcon(): import("lit").TemplateResult | undefined;
    accessor richText: RichText;
    accessor showIcon: boolean;
}
export declare class HeaderAreaTextCell extends BaseTextCell {
    render(): import("lit").TemplateResult;
}
export declare class HeaderAreaTextCellEditing extends BaseTextCell {
    private _onCopy;
    private _onCut;
    private _onPaste;
    private get std();
    connectedCallback(): void;
    firstUpdated(props: Map<string, unknown>): void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-area-text': HeaderAreaTextCell;
        'data-view-header-area-text-editing': HeaderAreaTextCellEditing;
    }
}
export {};
//# sourceMappingURL=text.d.ts.map