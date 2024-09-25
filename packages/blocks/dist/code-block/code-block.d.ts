import type { CodeBlockModel } from '@lumensuite/affine-model';
import type { BlockComponent } from '@lumensuite/block-std';
import type { ThemedToken } from 'shiki';
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import '@lumensuite/affine-components/rich-text';
import { type Signal } from '@lit-labs/preact-signals';
import { type TemplateResult } from 'lit';
import type { CodeBlockService } from './code-block-service.js';
import { CodeClipboardController } from './clipboard/index.js';
import './highlight/affine-code-unit.js';
export declare class CodeBlockComponent extends CaptionedBlockComponent<CodeBlockModel, CodeBlockService> {
    static styles: import("lit").CSSResult;
    private _inlineRangeProvider;
    clipboardController: CodeClipboardController;
    highlightTokens$: Signal<ThemedToken[][]>;
    languageName$: Signal<string>;
    get inlineEditor(): import("@lumensuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }> | undefined;
    get inlineManager(): import("@lumensuite/affine-components/rich-text").InlineManager;
    get readonly(): boolean;
    get topContenteditableElement(): BlockComponent<import("@lumensuite/store").BlockModel<object, object & {}>, import("@lumensuite/block-std").BlockService, string> | null;
    private _updateHighlightTokens;
    connectedCallback(): void;
    copyCode(): void;
    disconnectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    renderBlock(): TemplateResult<1>;
    setWrap(wrap: boolean): void;
    private accessor _richTextElement;
    accessor blockContainerStyles: {
        margin: string;
    };
    accessor useCaptionEditor: boolean;
    accessor useZeroWidth: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-code': CodeBlockComponent;
    }
}
//# sourceMappingURL=code-block.d.ts.map