import type { ParagraphBlockModel } from '@blocksuite/affine-model';
import type { BlockComponent } from '@blocksuite/block-std';
import { CaptionedBlockComponent } from '@blocksuite/affine-components/caption';
import '@blocksuite/affine-components/rich-text';
import { type TemplateResult } from 'lit';
import type { ParagraphBlockService } from './paragraph-service.js';
export declare class ParagraphBlockComponent extends CaptionedBlockComponent<ParagraphBlockModel, ParagraphBlockService> {
    static styles: import("lit").CSSResult;
    private _composing;
    private _displayPlaceholder;
    private _inlineRangeProvider;
    private _isInDatabase;
    get attributeRenderer(): import("@blocksuite/inline").AttributeRenderer<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@blocksuite/affine-components/rich-text").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        bold?: any;
        link?: any;
        strike?: any;
        color?: any;
        background?: any;
        latex?: any;
        reference?: any;
        code?: any;
        italic?: any;
        underline?: any;
    }, {
        bold?: any;
        link?: any;
        strike?: any;
        color?: any;
        background?: any;
        latex?: any;
        reference?: any;
        code?: any;
        italic?: any;
        underline?: any;
    }>;
    get embedChecker(): (delta: import("@blocksuite/inline").DeltaInsert<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>) => boolean;
    get inEdgelessText(): boolean;
    get inlineEditor(): import("@blocksuite/affine-components/rich-text").AffineInlineEditor | null | undefined;
    get inlineManager(): import("@blocksuite/affine-components/rich-text").InlineManager;
    get markdownShortcutHandler(): (context: import("@blocksuite/inline").KeyboardBindingContext<import("@blocksuite/affine-components/rich-text").AffineTextAttributes>, undoManager: import("yjs").UndoManager) => boolean;
    get topContenteditableElement(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null;
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