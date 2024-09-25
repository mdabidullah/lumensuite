import { ConnectorCWithArrowIcon, ConnectorIcon, ConnectorLWithArrowIcon, ConnectorXWithArrowIcon, } from '@lumensuite/affine-components/icons';
import { ConnectorMode } from '@lumensuite/affine-model';
export const buildConnectorDenseMenu = edgeless => {
    const prevMode = edgeless.service.editPropsStore.lastProps$.value.connector.mode;
    const isSelected = edgeless.tools.edgelessTool.type === 'connector';
    const createSelect = (mode, record = true) => () => {
        edgeless.tools.setEdgelessTool({ type: 'connector', mode });
        record &&
            edgeless.service.editPropsStore.recordLastProps('connector', { mode });
    };
    return {
        type: 'sub-menu',
        name: 'Connector',
        icon: ConnectorIcon,
        select: createSelect(prevMode, false),
        isSelected,
        options: {
            items: [
                {
                    type: 'action',
                    name: 'Curve',
                    icon: ConnectorCWithArrowIcon,
                    select: createSelect(ConnectorMode.Curve),
                    isSelected: isSelected && prevMode === ConnectorMode.Curve,
                },
                {
                    type: 'action',
                    name: 'Elbowed',
                    icon: ConnectorXWithArrowIcon,
                    select: createSelect(ConnectorMode.Orthogonal),
                    isSelected: isSelected && prevMode === ConnectorMode.Orthogonal,
                },
                {
                    type: 'action',
                    name: 'Straight',
                    icon: ConnectorLWithArrowIcon,
                    select: createSelect(ConnectorMode.Straight),
                    isSelected: isSelected && prevMode === ConnectorMode.Straight,
                },
            ],
        },
    };
};
//# sourceMappingURL=connector-dense-menu.js.map