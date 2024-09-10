import type { BaseTextAttributes, DeltaInsert } from '@blocksuite/inline';
import { type Signal } from '@preact/signals-core';
import * as Y from 'yjs';
export interface OptionalAttributes {
    attributes?: Record<string, any>;
}
export type DeltaOperation = {
    insert?: string;
    delete?: number;
    retain?: number;
} & OptionalAttributes;
export type OnTextChange = (data: Y.Text) => void;
export declare class Text {
    private _deltas$;
    private _length$;
    private _onChange?;
    private readonly _yText;
    get deltas$(): Signal<DeltaOperation[]>;
    get length(): number;
    get yText(): Y.Text;
    constructor(input?: Y.Text | string | DeltaInsert[], onChange?: OnTextChange);
    /**
     * @deprecated
     * This method will lose the change observer unless you pass the onChange callback.
     */
    static fromDelta(delta: DeltaOperation[], onChange?: OnTextChange): Text;
    private _transact;
    applyDelta(delta: DeltaOperation[]): void;
    bind(onChange?: OnTextChange): void;
    clear(): void;
    clone(): Text;
    delete(index: number, length: number): void;
    format(index: number, length: number, format: any): void;
    insert(content: string, index: number, attributes?: Record<string, unknown>): void;
    join(other: Text): void;
    replace(index: number, length: number, content: string, attributes?: BaseTextAttributes): void;
    sliceToDelta(begin: number, end?: number): DeltaOperation[];
    /**
     * NOTE: The string included in [index, index + length) will be deleted.
     *
     * Here are three cases for point position(index + length):
     * [{insert: 'abc', ...}, {insert: 'def', ...}, {insert: 'ghi', ...}]
     * 1. abc|de|fghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'f', ...}, {insert: 'ghi', ...}]
     * 2. abc|def|ghi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'ghi', ...}]
     * 3. abc|defg|hi
     *    left: [{insert: 'abc', ...}]
     *    right: [{insert: 'hi', ...}]
     */
    split(index: number, length?: number): Text;
    toDelta(): DeltaOperation[];
    toString(): string;
}
//# sourceMappingURL=text.d.ts.map