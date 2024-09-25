import type { ServiceProvider } from '@lumensuite/global/di';
import type { Doc } from '@lumensuite/store';
import { Container } from '@lumensuite/global/di';
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
    get collection(): import("@lumensuite/store").DocCollection;
    get command(): CommandManager;
    get event(): UIEventDispatcher;
    get get(): <T>(identifier: import("@lumensuite/global/di").GeneralServiceIdentifier<T>, options?: import("@lumensuite/global/di").ResolveOptions) => T;
    get getOptional(): <T>(identifier: import("@lumensuite/global/di").GeneralServiceIdentifier<T>, options?: import("@lumensuite/global/di").ResolveOptions) => T | null;
    get host(): EditorHost;
    get range(): RangeManager;
    get selection(): SelectionManager;
    get view(): ViewStore;
    constructor(options: BlockStdOptions);
    getConfig<Key extends LumenSuite.ConfigKeys>(flavour: Key): LumenSuite.BlockConfigs[Key] | null;
    /**
     * @deprecated
     * BlockService will be removed in the future.
     */
    getService<Key extends LumenSuite.ServiceKeys>(flavour: Key): LumenSuite.BlockServices[Key];
    getService<Service extends BlockService>(flavour: string): Service;
    getView(flavour: string): import("../index.js").BlockViewType | null;
    mount(): void;
    render(): EditorHost;
    unmount(): void;
}
declare global {
    namespace LumenSuite {
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