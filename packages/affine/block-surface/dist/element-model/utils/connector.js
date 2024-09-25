import { ConnectorElementModel } from '@lumensuite/affine-model';
export function isConnectorWithLabel(model) {
    return model instanceof ConnectorElementModel && model.hasLabel();
}
//# sourceMappingURL=connector.js.map