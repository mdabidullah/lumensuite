import type { BlockModel, Doc } from '@blocksuite/store';
import { LitElement } from 'lit';
import type { EventName, UIEventHandler } from '../../event/index.js';
import type { BlockService } from '../../extension/index.js';
import type { BlockStdScope } from '../../scope/index.js';
import type { BlockComponent } from './block-component.js';
declare const WidgetComponent_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class WidgetComponent<Model extends BlockModel = BlockModel, B extends BlockComponent = BlockComponent, S extends BlockService = BlockService> extends WidgetComponent_base {
    handleEvent: (name: EventName, handler: UIEventHandler, options?: {
        global?: boolean;
    }) => void;
    get block(): B;
    get doc(): Doc;
    get flavour(): string;
    get host(): import("./lit-host.js").EditorHost;
    get model(): Model;
    get service(): S;
    get std(): BlockStdScope;
    get widgetId(): string;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global: boolean;
    }): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): unknown;
    private accessor _doc;
    private accessor _model;
    private accessor _service;
    private accessor _std;
}
export {};
//# sourceMappingURL=widget-component.d.ts.map