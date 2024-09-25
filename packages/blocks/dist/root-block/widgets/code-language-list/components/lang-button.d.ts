import { LitElement } from 'lit';
import type { CodeBlockComponent } from '../../../../code-block/code-block.js';
declare const LanguageListButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class LanguageListButton extends LanguageListButton_base {
    static styles: import("lit").CSSResult;
    private _abortController?;
    private _clickLangBtn;
    private _sortedBundledLanguages;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
    private accessor _langButton;
    accessor blockComponent: CodeBlockComponent;
    accessor onActiveStatusChange: (active: boolean) => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'language-list-button': LanguageListButton;
    }
}
export {};
//# sourceMappingURL=lang-button.d.ts.map