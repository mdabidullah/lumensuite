import type { ListBlockModel } from '@lumensuite/affine-model';
import type { BlockComponent } from '@lumensuite/block-std';
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import '@lumensuite/affine-components/rich-text';
import '@lumensuite/affine-shared/commands';
import { type TemplateResult } from 'lit';
import type { ListBlockService } from './list-service.js';
export declare class ListBlockComponent extends CaptionedBlockComponent<ListBlockModel, ListBlockService> {
    static styles: import("lit").CSSResult;
    private _inlineRangeProvider;
    private _onClickIcon;
    get attributeRenderer(): import("@lumensuite/inline").AttributeRenderer<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@lumensuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        bold?: any;
        link?: any;
        strike?: any;
        italic?: any;
        underline?: any;
        code?: any;
        reference?: any;
        background?: any;
        color?: any;
        latex?: any;
    }, {
        bold?: any;
        link?: any;
        strike?: any;
        italic?: any;
        underline?: any;
        code?: any;
        reference?: any;
        background?: any;
        color?: any;
        latex?: any;
    }>;
    get embedChecker(): (delta: import("@lumensuite/inline").DeltaInsert<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>) => boolean;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager;
    get markdownShortcutHandler(): (context: import("@lumensuite/inline").KeyboardBindingContext<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>, undoManager: import("yjs").UndoManager) => boolean;
    get topContenteditableElement(): BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
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