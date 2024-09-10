import type { ServiceProvider } from '@blocksuite/global/di';
import type { Doc } from '@blocksuite/store';
import { Container } from '@blocksuite/global/di';
import type { BlockService, ExtensionType } from '../extension/index.js';
import { Clipboard } from '../clipboard/index.js';
import { CommandManager } from '../command/index.js';
import { UIEventDispatcher } from '../event/index.js';
import { RangeManager } from '../range/index.js';
import { SelectionManager } from '../selection/index.js';
import { EditorHost } from '../view/element/index.js';
import { ViewStore } from '../view/view-store.js';
export interface BlockStdOptions {
    doc: Doc;
    extensions: ExtensionType[];
}
export declare class BlockStdScope {
    private _getHost;
    readonly container: Container;
    readonly doc: Doc;
    readonly extensions: ExtensionType[];
    readonly provider: ServiceProvider;
    private get _lifeCycleWatchers();
    get clipboard(): Clipboard;
    get collection(): import("@blocksuite/store").DocCollection;
    get command(): CommandManager;
    get event(): UIEventDispatcher;
    get get(): <T>(identifier: import("@blocksuite/global/di").GeneralServiceIdentifier<T>, options?: import("@blocksuite/global/di").ResolveOptions) => T;
    get getOptional(): <T>(identifier: import("@blocksuite/global/di").GeneralServiceIdentifier<T>, options?: import("@blocksuite/global/di").ResolveOptions) => T | null;
    get host(): EditorHost;
    get range(): RangeManager;
    get selection(): SelectionManager;
    get view(): ViewStore;
    constructor(options: BlockStdOptions);
    getConfig<Key extends BlockSuite.ConfigKeys>(flavour: Key): BlockSuite.BlockConfigs[Key] | null;
    /**
     * @deprecated
     * BlockService will be removed in the future.
     */
    getService<Key extends BlockSuite.ServiceKeys>(flavour: Key): BlockSuite.BlockServices[Key];
    getService<Service extends BlockService>(flavour: string): Service;
    getView(flavour: string): import("../index.js").BlockViewType | null;
    mount(): void;
    render(): EditorHost;
    unmount(): void;
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
        }
        interface BlockConfigs {
        }
        type ServiceKeys = string & keyof BlockServices;
        type ConfigKeys = string & keyof BlockConfigs;
        type Std = BlockStdScope;
    }
}
//# sourceMappingURL=block-std-scope.d.ts.map