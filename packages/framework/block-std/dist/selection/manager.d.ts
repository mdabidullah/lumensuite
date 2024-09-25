import { DisposableGroup, Slot } from '@lumensuite/global/utils';
import type { BlockStdScope } from '../scope/index.js';
import type { BaseSelection } from './base.js';
import { LifeCycleWatcher } from '../extension/index.js';
interface SelectionConstructor {
    type: string;
    new (...args: any[]): BaseSelection;
    fromJSON(json: Record<string, unknown>): BaseSelection;
}
export declare class SelectionManager extends LifeCycleWatcher {
    static readonly key = "selectionManager";
    private _id;
    private _itemAdded;
    private _itemPopped;
    private _jsonToSelection;
    private _remoteSelections;
    private _selectionConstructors;
    private _selections;
    disposables: DisposableGroup;
    slots: {
        changed: Slot<BaseSelection[]>;
        remoteChanged: Slot<Map<number, BaseSelection[]>>;
    };
    private get _store();
    get id(): string;
    get remoteSelections(): Map<number, BaseSelection[]>;
    get value(): BaseSelection[];
    constructor(std: BlockStdScope);
    private _setupDefaultSelections;
    clear(types?: string[]): void;
    create<T extends LumenSuite.SelectionType>(type: T, ...args: ConstructorParameters<LumenSuite.Selection[T]>): LumenSuite.SelectionInstance[T];
    dispose(): void;
    filter<T extends LumenSuite.SelectionType>(type: T): LumenSuite.SelectionInstance[T][];
    filter$<T extends LumenSuite.SelectionType>(type: T): import("@preact/signals-core").ReadonlySignal<LumenSuite.SelectionInstance[T][]>;
    find<T extends LumenSuite.SelectionType>(type: T): LumenSuite.SelectionInstance[T] | undefined;
    find$<T extends LumenSuite.SelectionType>(type: T): import("@preact/signals-core").ReadonlySignal<LumenSuite.SelectionInstance[T] | undefined>;
    fromJSON(json: Record<string, unknown>[]): void;
    getGroup(group: string): BaseSelection[];
    mounted(): void;
    register(ctor: SelectionConstructor | SelectionConstructor[]): this;
    set(selections: BaseSelection[]): void;
    setGroup(group: string, selections: BaseSelection[]): void;
    unmounted(): void;
    update(fn: (currentSelections: BaseSelection[]) => BaseSelection[]): void;
}
export {};
//# sourceMappingURL=manager.d.ts.map