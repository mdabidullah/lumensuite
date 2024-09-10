import { type Chain, type Command, type CommandKeyToData, type InitCommandCtx } from '@blocksuite/block-std';
import { type InlineEditor } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../extension/index.js';
export declare function generateTextStyleCommand(key: Extract<keyof AffineTextAttributes, 'bold' | 'italic' | 'underline' | 'strike' | 'code'>): Command;
export declare function getCombinedTextStyle(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<"textStyle">>;
export declare function isFormatSupported(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<keyof BlockSuite.CommandContext>>;
export declare function clearMarksOnDiscontinuousInput(inlineEditor: InlineEditor): void;
//# sourceMappingURL=utils.d.ts.map