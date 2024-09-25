import type { BlockCaptionEditor } from '@lumensuite/affine-components/caption';
import type { ImageBlockModel } from '@lumensuite/affine-model';

import '@lumensuite/affine-components/caption';
import { Peekable } from '@lumensuite/affine-components/peek';
import { GfxBlockComponent } from '@lumensuite/block-std';
import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';

import type { ImageBlockFallbackCard } from './components/image-block-fallback.js';
import type { ImageBlockService } from './image-service.js';

import './components/image-block-fallback.js';
import {
  copyImageBlob,
  downloadImageBlob,
  fetchImageBlob,
  resetImageSize,
  turnImageIntoCardView,
} from './utils.js';

@customElement('affine-edgeless-image')
@Peekable()
export class ImageEdgelessBlockComponent extends GfxBlockComponent<
  ImageBlockModel,
  ImageBlockService
> {
  static override styles = css`
    affine-edgeless-image .resizable-img,
    affine-edgeless-image .resizable-img img {
      width: 100%;
      height: 100%;
    }
  `;

  convertToCardView = () => {
    turnImageIntoCardView(this).catch(console.error);
  };

  copy = () => {
    copyImageBlob(this).catch(console.error);
  };

  download = () => {
    downloadImageBlob(this).catch(console.error);
  };

  refreshData = () => {
    this.retryCount = 0;
    fetchImageBlob(this)
      .then(() => {
        const { width, height } = this.model;
        if (!width || !height) {
          return resetImageSize(this);
        }

        return;
      })
      .catch(console.error);
  };

  private _handleError(error: Error) {
    this.dispatchEvent(new CustomEvent('error', { detail: error }));
  }

  override connectedCallback() {
    super.connectedCallback();

    this.refreshData();
    this.contentEditable = 'false';
    this.model.propsUpdated.on(({ key }) => {
      if (key === 'sourceId') {
        this.refreshData();
      }
    });
  }

  override disconnectedCallback() {
    if (this.blobUrl) {
      URL.revokeObjectURL(this.blobUrl);
    }
    super.disconnectedCallback();
  }

  override renderGfxBlock() {
    const containerStyleMap = styleMap({
      position: 'relative',
      width: '100%',
    });

    return html`
      <div class="affine-image-container" style=${containerStyleMap}>
        ${when(
          this.loading || this.error || !this.blobUrl,
          () =>
            html`<affine-image-fallback-card
              .error=${this.error}
              .loading=${this.loading}
              .mode=${'page'}
            ></affine-image-fallback-card>`,
          () =>
            html`<div class="resizable-img">
              <img
                class="drag-target"
                src=${this.blobUrl ?? ''}
                draggable="false"
                @error=${this._handleError}
              />
            </div>`
        )}
        <affine-block-selection .block=${this}></affine-block-selection>
      </div>
      <block-caption-editor></block-caption-editor>

      ${Object.values(this.widgets)}
    `;
  }

  override updated() {
    this.fallbackCard?.requestUpdate();
  }

  @property({ attribute: false })
  accessor blob: Blob | undefined = undefined;

  @property({ attribute: false })
  accessor blobUrl: string | undefined = undefined;

  @query('block-caption-editor')
  accessor captionEditor!: BlockCaptionEditor | null;

  @property({ attribute: false })
  accessor downloading = false;

  @property({ attribute: false })
  accessor error = false;

  @query('affine-image-fallback-card')
  accessor fallbackCard: ImageBlockFallbackCard | null = null;

  @state()
  accessor lastSourceId!: string;

  @property({ attribute: false })
  accessor loading = false;

  @query('.resizable-img')
  accessor resizableImg!: HTMLDivElement;

  @property({ attribute: false })
  accessor retryCount = 0;
}

declare global {
  interface HTMLElementTagNameMap {
    'affine-edgeless-image': ImageEdgelessBlockComponent;
  }
}
