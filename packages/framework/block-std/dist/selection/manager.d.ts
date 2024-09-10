import { DisposableGroup, Slot } from '@blocksuite/global/utils';
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
    create<T extends BlockSuite.SelectionType>(type: T, ...args: ConstructorParameters<BlockSuite.Selection[T]>): BlockSuite.SelectionInstance[T];
    dispose(): void;
    filter<T extends BlockSuite.SelectionType>(type: T): BlockSuite.SelectionInstance[T][];
    filter$<T extends BlockSuite.SelectionType>(type: T): import("@preact/signals-core").ReadonlySignal<BlockSuite.SelectionInstance[T][]>;
    find<T extends BlockSuite.SelectionType>(type: T): BlockSuite.SelectionInstance[T] | undefined;
    find$<T extends BlockSuite.SelectionType>(type: T): import("@preact/signals-core").ReadonlySignal<BlockSuite.SelectionInstance[T] | undefined>;
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