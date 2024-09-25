import { MindmapElementModel } from '@lumensuite/affine-block-surface';
import { GroupIcon } from '@lumensuite/affine-components/icons';
import { GroupElementModel } from '@lumensuite/affine-model';
import { WithDisposable } from '@lumensuite/block-std';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';

@customElement('edgeless-add-group-button')
export class EdgelessAddGroupButton extends WithDisposable(LitElement) {
  static override styles = css`
    .label {
      padding-left: 4px;
    }
  `;

  private _createGroup = () => {
    this.edgeless.service.createGroupFromSelected();
  };

  protected override render() {
    return html`
      <editor-icon-button
        aria-label="Group"
        .tooltip=${'Group'}
        .labelHeight=${'20px'}
        @click=${this._createGroup}
      >
        ${GroupIcon}<span class="label medium">Group</span>
      </editor-icon-button>
    `;
  }

  @property({ attribute: false })
  accessor edgeless!: EdgelessRootBlockComponent;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-add-group-button': EdgelessAddGroupButton;
  }
}

export function renderAddGroupButton(
  edgeless: EdgelessRootBlockComponent,
  elements: LumenSuite.EdgelessModel[]
) {
  if (elements.length < 2) return nothing;
  if (elements[0] instanceof GroupElementModel) return nothing;
  if (elements.some(e => e.group instanceof MindmapElementModel))
    return nothing;

  return html`
    <edgeless-add-group-button
      .edgeless=${edgeless}
    ></edgeless-add-group-button>
  `;
}
