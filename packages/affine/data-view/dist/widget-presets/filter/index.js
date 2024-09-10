import { html } from 'lit';
import { defineUniComponent } from '../../core/index.js';
import './filter-bar.js';
export const widgetFilterBar = defineUniComponent((props) => {
    const view = props.view;
    if (!view.filterVisible$.value) {
        return html ``;
    }
    return html `<filter-bar
      .vars=${view.vars$.value}
      .data=${view.filter$.value}
      .setData=${view.updateFilter.bind(view)}
    ></filter-bar>`;
});
//# sourceMappingURL=index.js.map