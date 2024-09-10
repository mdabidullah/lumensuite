import type { ListBlockModel } from '@blocksuite/affine-model';
import type { BlockComponent } from '@blocksuite/block-std';
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import '@blocksuite/affine-components/rich-text';
import '@blocksuite/affine-shared/commands';
import { type TemplateResult } from 'lit';
import type { ListBlockService } from './list-service.js';
export declare class ListBlockComponent extends CaptionedBlockComponent<ListBlockModel, ListBlockService> {
    static styles: import("lit").CSSResult;
    private _inlineRangeProvider;
    private _onClickIcon;
    get attributeRenderer(): import("@blocksuite/inline").AttributeRenderer<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@blocksuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        bold?: any;
        link?: any;
        strike?: any;
        code?: any;
        italic?: any;
        underline?: any;
        reference?: any;
        background?: any;
        color?: any;
        latex?: any;
    }, {
        bold?: any;
        link?: any;
        strike?: any;
        code?: any;
        italic?: any;
        underline?: any;
        reference?: any;
        background?: any;
        color?: any;
        latex?: any;
    }>;
    get embedChecker(): (delta: import("@blocksuite/inline").DeltaInsert<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>) => boolean;
    get inlineManager(): import("@blocksuite/affine-components/rich-text").InlineManager;
    get markdownShortcutHandler(): (context: import("@blocksuite/inline").KeyboardBindingContext<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>, undoManager: import("yjs").UndoManager) => boolean;
    get topContenteditableElement(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null;
    private _select;
    private _toggleChildren;
    private _toggleTemplate;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    renderBlock(): TemplateResult<1>;
    private accessor _isCollapsedWhenReadOnly;
    private accessor _richTextElement;
    accessor blockContainerStyles: {
        margin: string;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-list': ListBlockComponent;
    }
}
//# sourceMappingURL=list-block.d.ts.map