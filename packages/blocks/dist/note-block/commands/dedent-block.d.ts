import type { Command } from '@blocksuite/block-std';
/**
 * @example
 * before unindent:
 * - aaa
 *   - bbb
 *   - ccc|
 *     - ddd
 *   - eee
 *
 * after unindent:
 * - aaa
 *   - bbb
 * - ccc|
 *   - ddd
 *   - eee
 */
export declare const dedentBlock: Command<never, never, {
    blockId?: string;
    stopCapture?: boolean;
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            dedentBlock: typeof dedentBlock;
        }
    }
}
//# sourceMappingURL=dedent-block.d.ts.map