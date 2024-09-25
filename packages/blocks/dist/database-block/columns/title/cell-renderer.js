import { createFromBaseCellRenderer, createIcon, uniMap, } from '@lumensuite/data-view';
import { TableSingleView } from '@lumensuite/data-view/view-presets';
import { titlePureColumnConfig } from './define.js';
import { HeaderAreaTextCell, HeaderAreaTextCellEditing } from './text.js';
export const titleColumnConfig = titlePureColumnConfig.createColumnMeta({
    icon: createIcon('TitleIcon'),
    cellRenderer: {
        view: uniMap(createFromBaseCellRenderer(HeaderAreaTextCell), (props) => ({
            ...props,
            showIcon: props.cell.view instanceof TableSingleView,
        })),
        edit: uniMap(createFromBaseCellRenderer(HeaderAreaTextCellEditing), (props) => ({
            ...props,
            showIcon: props.cell.view instanceof TableSingleView,
        })),
    },
});
//# sourceMappingURL=cell-renderer.js.map