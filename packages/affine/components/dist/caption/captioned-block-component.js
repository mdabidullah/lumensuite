import { BlockComponent } from '@lumensuite/block-std';
import { html, nothing } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
export class CaptionedBlockComponent extends BlockComponent {
    get captionEditor() {
        if (!this.useCaptionEditor || !this._captionEditorRef.value) {
            console.error('Oops! Please enable useCaptionEditor before accessing captionEditor');
        }
        return this._captionEditorRef.value;
    }
    constructor() {
        super();
        this.addRenderer(this._renderWithWidget);
    }
    _renderWithWidget(content) {
        const style = styleMap({
            position: 'relative',
            ...this.blockContainerStyles,
        });
        return html `<div style=${style} class="affine-block-component">
      ${content}
      ${this.useCaptionEditor
            ? html `<block-caption-editor
            ${ref(this._captionEditorRef)}
          ></block-caption-editor>`
            : nothing}
      ${this.showBlockSelection
            ? html `<affine-block-selection .block=${this}></affine-block-selection>`
            : nothing}
      ${this.useZeroWidth
            ? html `<block-zero-width .block=${this}></block-zero-width>`
            : nothing}
    </div>`;
    }
    #_captionEditorRef_accessor_storage = createRef();
    // There may be multiple block-caption-editors in a nested structure.
    get _captionEditorRef() { return this.#_captionEditorRef_accessor_storage; }
    set _captionEditorRef(value) { this.#_captionEditorRef_accessor_storage = value; }
    #blockContainerStyles_accessor_storage = undefined;
    get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
    set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
    #showBlockSelection_accessor_storage = true;
    get showBlockSelection() { return this.#showBlockSelection_accessor_storage; }
    set showBlockSelection(value) { this.#showBlockSelection_accessor_storage = value; }
    #useCaptionEditor_accessor_storage = false;
    get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
    set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
    #useZeroWidth_accessor_storage = false;
    get useZeroWidth() { return this.#useZeroWidth_accessor_storage; }
    set useZeroWidth(value) { this.#useZeroWidth_accessor_storage = value; }
}
//# sourceMappingURL=captioned-block-component.js.map