import { BaseSelection } from '@lumensuite/block-std';
export declare class ImageSelection extends BaseSelection {
    static group: string;
    static type: string;
    static fromJSON(json: Record<string, unknown>): ImageSelection;
    equals(other: BaseSelection): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            image: typeof ImageSelection;
        }
    }
}
//# sourceMappingURL=image.d.ts.map