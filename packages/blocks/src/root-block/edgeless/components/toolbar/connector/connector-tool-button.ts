import { computed } from '@lit-labs/preact-signals';
import {
  ArrowUpIcon,
  ConnectorCWithArrowIcon,
  ConnectorLWithArrowIcon,
  ConnectorXWithArrowIcon,
} from '@lumensuite/affine-components/icons';
import { ConnectorMode, getConnectorModeName } from '@lumensuite/affine-model';
import { SignalWatcher } from '@lumensuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import '../../buttons/toolbar-button.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
import './connector-menu.js';

const IcomMap = {
  [ConnectorMode.Straight]: ConnectorLWithArrowIcon,
  [ConnectorMode.Orthogonal]: ConnectorXWithArrowIcon,
  [ConnectorMode.Curve]: ConnectorCWithArrowIcon,
};

@customElement('edgeless-connector-tool-button')
export class EdgelessConnectorToolButton extends QuickToolMixin(
  SignalWatcher(LitElement)
) {
  static override styles = css`
    :host {
      display: flex;
    }
    .edgeless-connector-button {
      display: flex;
      position: relative;
    }
    .arrow-up-icon {
      position: absolute;
      top: 4px;
      right: 2px;
      font-size: 0;
    }
  `;

  private _mode$ = computed(() => {
    return this.edgeless.service.editPropsStore.lastProps$.value.connector.mode;
  });

  override type = 'connector' as const;

  private _toggleMenu() {
    if (this.tryDisposePopper()) return;

    const menu = this.createPopper('edgeless-connector-menu', this);
    menu.element.edgeless = this.edgeless;
    menu.element.onChange = (props: Record<string, unknown>) => {
      this.edgeless.service.editPropsStore.recordLastProps('connector', props);
      this.setEdgelessTool({
        type: this.type,
        mode: this._mode$.value,
      });
    };
  }

  override render() {
    const { active } = this;
    const mode = this._mode$.value;
    const arrowColor = active ? 'currentColor' : 'var(--affine-icon-secondary)';
    return html`
      <edgeless-tool-icon-button
        .tooltip=${this.popper
          ? ''
          : getTooltipWithShortcut(getConnectorModeName(mode), 'C')}
        .tooltipOffset=${17}
        .active=${active}
        .iconContainerPadding=${6}
        class="edgeless-connector-button"
        @click=${() => {
          // don't update tool before toggling menu
          this._toggleMenu();
          this.edgeless.tools.setEdgelessTool({
            type: 'connector',
            mode: mode,
          });
        }}
      >
        ${IcomMap[mode]}
        <span class="arrow-up-icon" style=${styleMap({ color: arrowColor })}>
          ${ArrowUpIcon}
        </span>
      </edgeless-tool-icon-button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'edgeless-connector-tool-button': EdgelessConnectorToolButton;
  }
}
