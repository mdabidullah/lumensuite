import { BaseSelection } from '../base.js';
export declare class BlockSelection extends BaseSelection {
    static group: string;
    static type: string;
    static fromJSON(json: Record<string, unknown>): BlockSelection;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            block: typeof BlockSelection;
        }
    }
}
//# sourceMappingURL=block.d.ts.map