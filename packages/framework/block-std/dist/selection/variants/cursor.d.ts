import { BaseSelection } from '../base.js';
export declare class CursorSelection extends BaseSelection {
    static group: string;
    static type: string;
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    static fromJSON(json: Record<string, unknown>): CursorSelection;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            cursor: typeof CursorSelection;
        }
    }
}
//# sourceMappingURL=cursor.d.ts.map