import { html, nothing } from 'lit';
import './change-text-menu.js';
export function renderChangeTextButton(edgeless, elements) {
    if (!elements?.length)
        return nothing;
    return html `
    <edgeless-change-text-menu
      .elementType=${'text'}
      .elements=${elements}
      .edgeless=${edgeless}
    ></edgeless-change-text-menu>
  `;
}
//# sourceMappingURL=change-text-button.js.map