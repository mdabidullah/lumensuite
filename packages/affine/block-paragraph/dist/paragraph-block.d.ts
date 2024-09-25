import type { ParagraphBlockModel } from '@lumensuite/affine-model';
import type { BlockComponent } from '@lumensuite/block-std';
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import '@lumensuite/affine-components/rich-text';
import { type TemplateResult } from 'lit';
import type { ParagraphBlockService } from './paragraph-service.js';
export declare class ParagraphBlockComponent extends CaptionedBlockComponent<ParagraphBlockModel, ParagraphBlockService> {
    static styles: import("lit").CSSResult;
    private _composing;
    private _displayPlaceholder;
    private _inlineRangeProvider;
    private _isInDatabase;
    get attributeRenderer(): import("@lumensuite/inline").AttributeRenderer<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@lumensuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        bold?: any;
        link?: any;
        strike?: any;
        color?: any;
        background?: any;
        latex?: any;
        reference?: any;
        italic?: any;
        underline?: any;
        code?: any;
    }, {
        bold?: any;
        link?: any;
        strike?: any;
        color?: any;
        background?: any;
        latex?: any;
        reference?: any;
        italic?: any;
        underline?: any;
        code?: any;
    }>;
    get embedChecker(): (delta: import("@lumensuite/inline").DeltaInsert<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>) => boolean;
    get inEdgelessText(): boolean;
    get inlineEditor(): import("@lumensuite/affine-components/rich-text").AffineInlineEditor | null | undefined;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager;
    get markdownShortcutHandler(): (context: import("@lumensuite/inline").KeyboardBindingContext<import("@lumensuite/affine-components/rich-text").AffineTextAttributes>, undoManager: import("yjs").UndoManager) => boolean;
    get topContenteditableElement(): BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
    connectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    renderBlock(): TemplateResult<1>;
    private accessor _richTextElement;
    accessor blockContainerStyles: {
        margin: string;
    };
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-paragraph': ParagraphBlockComponent;
    }
}
//# sourceMappingURL=paragraph-block.d.ts.map