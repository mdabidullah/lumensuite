import type { BlockComponent } from '@lumensuite/block-std';
interface MoveBlockConfig {
    name: string;
    hotkey: string[];
    action: (block: BlockComponent) => void;
}
export declare const moveBlockConfigs: MoveBlockConfig[];
export {};
//# sourceMappingURL=move-block.d.ts.map