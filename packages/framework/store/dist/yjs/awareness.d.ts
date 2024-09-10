import type { Awareness as YAwareness } from 'y-protocols/awareness.js';
import { Slot } from '@blocksuite/global/utils';
import type { BlockCollection } from '../store/index.js';
export interface UserInfo {
    name: string;
}
type UserSelection = Array<Record<string, unknown>>;
export type RawAwarenessState<Flags extends Record<string, unknown> = BlockSuiteFlags> = {
    user?: UserInfo;
    color?: string;
    flags: Flags;
    selectionV2: Record<string, UserSelection>;
};
export interface AwarenessEvent<Flags extends Record<string, unknown> = BlockSuiteFlags> {
    id: number;
    type: 'add' | 'update' | 'remove';
    state?: RawAwarenessState<Flags>;
}
export declare class AwarenessStore<Flags extends Record<string, unknown> = BlockSuiteFlags> {
    private _flags;
    private _onAwarenessChange;
    readonly awareness: YAwareness<RawAwarenessState<Flags>>;
    readonly slots: {
        update: Slot<AwarenessEvent<Flags>>;
    };
    constructor(awareness: YAwareness<RawAwarenessState<Flags>>, defaultFlags: Flags);
    private _initFlags;
    destroy(): void;
    getFlag<Key extends keyof Flags>(field: Key): Flags[Key];
    getLocalSelection(selectionManagerId: string): ReadonlyArray<Record<string, unknown>>;
    getStates(): Map<number, RawAwarenessState<Flags>>;
    isReadonly(blockCollection: BlockCollection): boolean;
    setFlag<Key extends keyof Flags>(field: Key, value: Flags[Key]): void;
    setLocalSelection(selectionManagerId: string, selection: UserSelection): void;
    setReadonly(blockCollection: BlockCollection, value: boolean): void;
}
export {};
//# sourceMappingURL=awareness.d.ts.map