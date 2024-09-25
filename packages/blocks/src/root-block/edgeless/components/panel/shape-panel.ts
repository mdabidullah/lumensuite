import { ShapeStyle } from '@lumensuite/affine-model';
import { Slot } from '@lumensuite/global/utils';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import type { ShapeTool } from '../../tools/shape-tool.js';

import '../buttons/tool-icon-button.js';
import { ShapeComponentConfig } from '../toolbar/shape/shape-menu-config.js';

@customElement('edgeless-shape-panel')
export class EdgelessShapePanel extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
  `;

  slots = {
    select: new Slot<ShapeTool['shapeName']>(),
  };

  private _onSelect(value: ShapeTool['shapeName']) {
    this.selectedShape = value;
    this.slots.select.emit(value);
  }

  override disconnectedCallback(): void {
    this.slots.select.dispose();
    super.disconnectedCallback();
  }

  override render() {
    return repeat(
      ShapeComponentConfig,
      item => item.name,
      ({ name, generalIcon, scribbledIcon, tooltip, disabled }) =>
        html`<edgeless-tool-icon-button
          .disabled=${disabled}
          .tooltip=${tooltip}
          .active=${this.selectedShape === name}
          .activeMode=${'background'}
          @click=${() => {
            if (disabled) return;
            this._onSelect(name);
          }}
        >
          ${this.shapeStyle === ShapeStyle.General
            ? generalIcon
            : scribbledIcon}
        </edgeless-tool-icon-button>`
    );
  }

  @property({ attribute: false })
  accessor selectedShape: ShapeTool['shapeName'] | null | undefined = undefined;

  @property({ attribute: false })
  accessor shapeStyle: ShapeStyle = ShapeStyle.Scribbled;
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-shape-panel': EdgelessShapePanel;
  }
}
