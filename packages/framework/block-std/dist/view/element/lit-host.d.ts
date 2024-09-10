import { Slot } from '@blocksuite/global/utils';
import { Doc } from '@blocksuite/store';
import { type BlockModel } from '@blocksuite/store';
import { nothing, type TemplateResult } from 'lit';
import type { CommandManager } from '../../command/index.js';
import type { UIEventDispatcher } from '../../event/index.js';
import type { RangeManager } from '../../range/index.js';
import type { BlockStdScope } from '../../scope/block-std-scope.js';
import type { SelectionManager } from '../../selection/index.js';
import type { ViewStore } from '../view-store.js';
import { ShadowlessElement } from './shadowless-element.js';
export declare const docContext: {
    __context__: Doc;
};
export declare const stdContext: {
    __context__: BlockStdScope;
};
declare const EditorHost_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class EditorHost extends EditorHost_base {
    static styles: import("lit").CSSResult;
    private _renderModel;
    /**
     * Render a block model manually instead of let blocksuite render it.
     * If you render the same block model multiple times,
     * the event flow and data binding will be broken.
     * Only use this method as a last resort.
     */
    dangerouslyRenderModel: (model: BlockModel) => TemplateResult;
    renderChildren: (model: BlockModel, filter?: (model: BlockModel) => boolean) => TemplateResult;
    readonly slots: {
        unmounted: Slot<void>;
    };
    get command(): CommandManager;
    get event(): UIEventDispatcher;
    get range(): RangeManager;
    get selection(): SelectionManager;
    get view(): ViewStore;
    connectedCallback(): void;
    disconnectedCallback(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): TemplateResult | typeof nothing;
    accessor doc: Doc;
    accessor std: BlockSuite.Std;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-host': EditorHost;
    }
}
export {};
//# sourceMappingURL=lit-host.d.ts.map