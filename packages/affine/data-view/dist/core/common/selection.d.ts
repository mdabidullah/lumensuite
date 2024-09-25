import { BaseSelection } from '@lumensuite/block-std';
import type { DataViewSelection, GetDataViewSelection } from '../types.js';
export declare class DatabaseSelection extends BaseSelection {
    static group: string;
    static type: string;
    readonly viewSelection: DataViewSelection;
    get viewId(): string;
    constructor({ blockId, viewSelection, }: {
        blockId: string;
        viewSelection: DataViewSelection;
    });
    static fromJSON(json: Record<string, unknown>): DatabaseSelection;
    equals(other: BaseSelection): boolean;
    getSelection<T extends DataViewSelection['type']>(type: T): GetDataViewSelection<T> | undefined;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            database: typeof DatabaseSelection;
        }
    }
}
//# sourceMappingURL=selection.d.ts.map