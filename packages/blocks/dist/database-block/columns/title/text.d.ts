import type { Text } from '@blocksuite/store';
import { type RichText } from '@blocksuite/affine-components/rich-text';
import { BaseCellRenderer } from '@blocksuite/data-view';
declare abstract class BaseTextCell extends BaseCellRenderer<Text> {
    static styles: import("lit").CSSResult;
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<import("@blocksuite/affine-components/rich-text").AffineTextAttributes> | undefined;
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
    }> | undefined;
    get inlineEditor(): import("@blocksuite/affine-components/rich-text").AffineInlineEditor;
    get inlineManager(): import("@blocksuite/affine-components/rich-text").InlineManager | undefined;
    get service(): import("../../database-service.js").DatabaseBlockService | undefined;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null | undefined;
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