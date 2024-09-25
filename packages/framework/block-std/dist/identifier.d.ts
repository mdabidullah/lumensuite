import type { Command } from './command/index.js';
import type { BlockService, LifeCycleWatcher } from './extension/index.js';
import type { BlockStdScope } from './scope/index.js';
import type { BlockViewType, WidgetViewMapType } from './spec/type.js';
export declare const BlockServiceIdentifier: import("@lumensuite/global/di").ServiceIdentifier<BlockService> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<BlockService>);
export declare const BlockFlavourIdentifier: import("@lumensuite/global/di").ServiceIdentifier<{
    flavour: string;
}> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<{
    flavour: string;
}>);
export declare const CommandIdentifier: import("@lumensuite/global/di").ServiceIdentifier<Command> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<Command>);
export declare const ConfigIdentifier: import("@lumensuite/global/di").ServiceIdentifier<Record<string, unknown>> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<Record<string, unknown>>);
export declare const BlockViewIdentifier: import("@lumensuite/global/di").ServiceIdentifier<BlockViewType> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<BlockViewType>);
export declare const WidgetViewMapIdentifier: import("@lumensuite/global/di").ServiceIdentifier<WidgetViewMapType> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<WidgetViewMapType>);
export declare const LifeCycleWatcherIdentifier: import("@lumensuite/global/di").ServiceIdentifier<LifeCycleWatcher> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<LifeCycleWatcher>);
export declare const StdIdentifier: import("@lumensuite/global/di").ServiceIdentifier<BlockStdScope> & ((variant: import("@lumensuite/global/di").ServiceVariant) => import("@lumensuite/global/di").ServiceIdentifier<BlockStdScope>);
//# sourceMappingURL=identifier.d.ts.map