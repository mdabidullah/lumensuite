import { type Command } from '@blocksuite/block-std';
import type { AffineTextAttributes } from '../extension/index.js';
export declare const formatNativeCommand: Command<never, never, {
    range?: Range;
    styles: AffineTextAttributes;
    mode?: 'replace' | 'merge';
}>;
declare global {
    namespace BlockSuite {
        interface Commands {
            formatNative: typeof formatNativeCommand;
        }
    }
}
//# sourceMappingURL=format-native.d.ts.map