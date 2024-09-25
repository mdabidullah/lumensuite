import type { Doc } from '@lumensuite/store';

import {
  BlockStdScope,
  EditorHost,
  ShadowlessElement,
  WithDisposable,
} from '@lumensuite/block-std';
import { EdgelessEditorBlockSpecs } from '@lumensuite/blocks';
import { noop } from '@lumensuite/global/utils';
import { css, html, nothing, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { guard } from 'lit/directives/guard.js';

noop(EditorHost);

@customElement('lumen-editor')
export class LumenEditor extends WithDisposable(ShadowlessElement) {
  static override styles = css`
    lumen-editor {
      font-family: var(--affine-font-family);
      background: var(--affine-background-primary-color);
    }

    lumen-editor * {
      box-sizing: border-box;
    }

    @media print {
      lumen-editor {
        height: auto;
      }
    }

    .affine-edgeless-viewport {
      display: block;
      height: 100%;
      position: relative;
      overflow: clip;
      container-name: viewport;
      container-type: inline-size;
    }
  `;

  get host() {
    try {
      return this.std.host;
    } catch {
      return null;
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this._disposables.add(
      this.doc.slots.rootAdded.on(() => this.requestUpdate())
    );
    this.std = new BlockStdScope({
      doc: this.doc,
      extensions: this.specs,
    });
  }

  override async getUpdateComplete(): Promise<boolean> {
    const result = await super.getUpdateComplete();
    await this.host?.updateComplete;
    return result;
  }

  override render() {
    const std = this.std;
    if (!this.doc.root) return nothing;

    return html`
      <div class="affine-edgeless-viewport">
        ${guard([std], () => std.render())}
      </div>
    `;
  }

  override willUpdate(
    changedProperties: Map<string | number | symbol, unknown>
  ) {
    super.willUpdate(changedProperties);
    if (changedProperties.has('doc')) {
      this.std = new BlockStdScope({
        doc: this.doc,
        extensions: this.specs,
      });
    }
  }

  @property({ attribute: false })
  accessor doc!: Doc;

  @property({ attribute: false })
  accessor editor!: TemplateResult;

  @property({ attribute: false })
  accessor specs = EdgelessEditorBlockSpecs;

  @state()
  accessor std!: BlockStdScope;
}

declare global {
  interface HTMLElementTagNameMap {
    'lumen-editor': LumenEditor;
  }
}
