import { ConnectorElementModel } from '@blocksuite/affine-model';
export function isConnectorWithLabel(model) {
    return model instanceof ConnectorElementModel && model.hasLabel();
}
//# sourceMappingURL=connector.js.map