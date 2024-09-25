import { type Chain, type Command, type CommandKeyToData, type InitCommandCtx } from '@lumensuite/block-std';
import { type InlineEditor } from '@lumensuite/inline';
import type { AffineTextAttributes } from '../extension/index.js';
export declare function generateTextStyleCommand(key: Extract<keyof AffineTextAttributes, 'bold' | 'italic' | 'underline' | 'strike' | 'code'>): Command;
export declare function getCombinedTextStyle(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<"textStyle">>;
export declare function isFormatSupported(chain: Chain<InitCommandCtx>): Chain<InitCommandCtx & CommandKeyToData<keyof LumenSuite.CommandContext>>;
export declare function clearMarksOnDiscontinuousInput(inlineEditor: InlineEditor): void;
//# sourceMappingURL=utils.d.ts.map