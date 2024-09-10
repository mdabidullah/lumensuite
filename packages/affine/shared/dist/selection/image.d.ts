import { BaseSelection } from '@blocksuite/block-std';
export declare class ImageSelection extends BaseSelection {
    static group: string;
    static type: string;
    static fromJSON(json: Record<string, unknown>): ImageSelection;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace BlockSuite {
        interface Selection {
            image: typeof ImageSelection;
        }
    }
}
//# sourceMappingURL=image.d.ts.map