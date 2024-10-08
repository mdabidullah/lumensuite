import type { Command } from '@lumensuite/block-std';
/**
 * @example
 * before indent:
 * - aaa
 *   - bbb
 * - ccc|
 *   - ddd
 *   - eee
 *
 * after indent:
 * - aaa
 *   - bbb
 *   - ccc|
 *     - ddd
 *     - eee
 */
export declare const indentBlock: Command<never, never, {
    blockId?: string;
    stopCapture?: boolean;
}>;
declare global {
    namespace LumenSuite {
        interface Commands {
            indentBlock: typeof indentBlock;
        }
    }
}
//# sourceMappingURL=indent-block.d.ts.map