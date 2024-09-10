import type { ConnectorElementModel } from '@blocksuite/affine-model';
import { LitElement } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const EdgelessConnectorHandle_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessConnectorHandle extends EdgelessConnectorHandle_base {
    static styles: import("lit").CSSResult;
    private _lastZoom;
    private _bindEvent;
    private _capPointerDown;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
    private accessor _endHandler;
    private accessor _startHandler;
    accessor connector: ConnectorElementModel;
    accessor edgeless: EdgelessRootBlockComponent;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-handle': EdgelessConnectorHandle;
    }
}
export {};
//# sourceMappingURL=connector-handle.d.ts.map