import { ConnectorPathGenerator } from '../managers/connector-manager.js';
export const connectorMiddleware = (surface) => {
    const hasElementById = (id) => surface.hasElementById(id) || surface.doc.hasBlockById(id);
    const elementGetter = (id) => surface.getElementById(id) ?? surface.doc.getBlockById(id);
    const updateConnectorPath = (connector) => {
        if (((connector.source?.id && hasElementById(connector.source.id)) ||
            (!connector.source?.id && connector.source?.position)) &&
            ((connector.target?.id && hasElementById(connector.target.id)) ||
                (!connector.target?.id && connector.target?.position))) {
            ConnectorPathGenerator.updatePath(connector, null, elementGetter);
        }
    };
    const pendingList = new Set();
    let pendingFlag = false;
    const addToUpdateList = (connector) => {
        pendingList.add(connector);
        if (!pendingFlag) {
            pendingFlag = true;
            queueMicrotask(() => {
                pendingList.forEach(updateConnectorPath);
                pendingList.clear();
                pendingFlag = false;
            });
        }
    };
    const disposables = [
        surface.elementAdded.on(({ id }) => {
            const element = elementGetter(id);
            if (!element)
                return;
            if ('type' in element && element.type === 'connector') {
                addToUpdateList(element);
            }
            else {
                surface.getConnectors(id).forEach(addToUpdateList);
            }
        }),
        surface.elementUpdated.on(({ id, props }) => {
            const element = elementGetter(id);
            if (props['xywh'] || props['rotate']) {
                surface.getConnectors(id).forEach(addToUpdateList);
            }
            if ('type' in element &&
                element.type === 'connector' &&
                (props['mode'] !== undefined ||
                    props['target'] ||
                    props['source'] ||
                    (props['xywh'] && !element.updatingPath))) {
                addToUpdateList(element);
            }
        }),
        surface.doc.slots.blockUpdated.on(payload => {
            if (payload.type === 'add' ||
                (payload.type === 'update' && payload.props.key === 'xywh')) {
                surface.getConnectors(payload.id).forEach(addToUpdateList);
            }
        }),
    ];
    surface
        .getElementsByType('connector')
        .forEach(connector => updateConnectorPath(connector));
    return () => {
        disposables.forEach(d => d.dispose());
    };
};
//# sourceMappingURL=connector.js.map