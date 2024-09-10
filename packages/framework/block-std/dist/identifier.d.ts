import type { Command } from './command/index.js';
import type { BlockService, LifeCycleWatcher } from './extension/index.js';
import type { BlockStdScope } from './scope/index.js';
import type { BlockViewType, WidgetViewMapType } from './spec/type.js';
export declare const BlockServiceIdentifier: import("@blocksuite/global/di").ServiceIdentifier<BlockService> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<BlockService>);
export declare const BlockFlavourIdentifier: import("@blocksuite/global/di").ServiceIdentifier<{
    flavour: string;
}> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<{
    flavour: string;
}>);
export declare const CommandIdentifier: import("@blocksuite/global/di").ServiceIdentifier<Command> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<Command>);
export declare const ConfigIdentifier: import("@blocksuite/global/di").ServiceIdentifier<Record<string, unknown>> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<Record<string, unknown>>);
export declare const BlockViewIdentifier: import("@blocksuite/global/di").ServiceIdentifier<BlockViewType> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<BlockViewType>);
export declare const WidgetViewMapIdentifier: import("@blocksuite/global/di").ServiceIdentifier<WidgetViewMapType> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<WidgetViewMapType>);
export declare const LifeCycleWatcherIdentifier: import("@blocksuite/global/di").ServiceIdentifier<LifeCycleWatcher> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<LifeCycleWatcher>);
export declare const StdIdentifier: import("@blocksuite/global/di").ServiceIdentifier<BlockStdScope> & ((variant: import("@blocksuite/global/di").ServiceVariant) => import("@blocksuite/global/di").ServiceIdentifier<BlockStdScope>);
//# sourceMappingURL=identifier.d.ts.map