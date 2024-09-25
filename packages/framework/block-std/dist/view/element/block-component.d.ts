import { Doc } from '@lumensuite/store';
import { type BlockModel, BlockViewType } from '@lumensuite/store';
import { type PropertyValues, type TemplateResult } from 'lit';
import type { EventName, UIEventHandler } from '../../event/index.js';
import type { BlockService } from '../../extension/index.js';
import type { BlockStdScope } from '../../scope/index.js';
import type { WidgetComponent } from './widget-component.js';
import { blockComponentSymbol } from './consts.js';
import { ShadowlessElement } from './shadowless-element.js';
declare const BlockComponent_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("../utils/with-disposable.js").DisposableClass>;
export declare class BlockComponent<Model extends BlockModel = BlockModel, Service extends BlockService = BlockService, WidgetName extends string = string> extends BlockComponent_base {
    private _selected;
    [blockComponentSymbol]: boolean;
    handleEvent: (name: EventName, handler: UIEventHandler, options?: {
        global?: boolean;
        flavour?: boolean;
    }) => void;
    get blockId(): string;
    get childBlocks(): BlockComponent<BlockModel<object, object & {}>, BlockService, string>[];
    get flavour(): string;
    get host(): import("./lit-host.js").EditorHost;
    get isVersionMismatch(): boolean;
    get model(): Model;
    get parentComponent(): BlockComponent | null;
    get renderChildren(): (model: BlockModel, filter?: (model: BlockModel) => boolean) => TemplateResult;
    get rootComponent(): BlockComponent | null;
    get selected(): import("../../index.js").BaseSelection | null;
    get selection(): import("../../index.js").SelectionManager;
    get service(): Service;
    get topContenteditableElement(): BlockComponent | null;
    get widgetComponents(): Partial<Record<WidgetName, WidgetComponent>>;
    private _renderMismatchBlock;
    private _renderViewType;
    addRenderer(renderer: (content: unknown) => unknown): void;
    bindHotKey(keymap: Record<string, UIEventHandler>, options?: {
        global?: boolean;
        flavour?: boolean;
    }): () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected getUpdateComplete(): Promise<boolean>;
    render(): unknown;
    renderBlock(): unknown;
    /**
     * Render a warning message when the block version is mismatched.
     * @param expectedVersion If the schema is not found, the expected version is -1.
     *        Which means the block is not supported in the current editor.
     * @param actualVersion The version of the block's crdt data.
     */
    renderVersionMismatch(expectedVersion: number, actualVersion: number): TemplateResult;
    protected update(changedProperties: PropertyValues): void;
    private accessor _model;
    protected accessor _renderers: Array<(content: unknown) => unknown>;
    private accessor _service;
    accessor dirty: boolean;
    accessor doc: Doc;
    accessor std: BlockStdScope;
    accessor viewType: BlockViewType;
    accessor widgets: Record<WidgetName, TemplateResult>;
}
export {};
//# sourceMappingURL=block-component.d.ts.map