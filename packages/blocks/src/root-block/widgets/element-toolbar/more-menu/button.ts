import type { MenuItemGroup } from '@lumensuite/affine-components/toolbar';

import { MoreHorizontalIcon, MoreVerticalIcon } from '@blocksuite/icons/lit';
import { renderGroups } from '@lumensuite/affine-components/toolbar';
import { WithDisposable } from '@lumensuite/block-std';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { EdgelessRootBlockComponent } from '../../../edgeless/edgeless-root-block.js';

import { ElementToolbarMoreMenuContext } from './context.js';

@customElement('edgeless-more-button')
export class EdgelessMoreButton extends WithDisposable(LitElement) {
  override render() {
    const context = new ElementToolbarMoreMenuContext(this.edgeless);
    const actions = renderGroups(this.groups, context);

    return html`
      <editor-menu-button
        .contentPadding=${'8px'}
        .button=${html`
          <editor-icon-button aria-label="More" .tooltip=${'More'}>
            ${this.vertical
              ? MoreVerticalIcon({ width: '20', height: '20' })
              : MoreHorizontalIcon({ width: '20', height: '20' })}
          </editor-icon-button>
        `}
      >
        <div
          class="more-actions-container"
          data-size="large"
          data-orientation="vertical"
        >
          ${actions}
        </div>
      </editor-menu-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;

  @property({ attribute: false })
  accessor elements: LumenSuite.EdgelessModel[] = [];

  @property({ attribute: false })
  accessor groups!: MenuItemGroup<ElementToolbarMoreMenuContext>[];

  @property({ attribute: false })
  accessor vertical = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-more-button': EdgelessMoreButton;
  }
}
