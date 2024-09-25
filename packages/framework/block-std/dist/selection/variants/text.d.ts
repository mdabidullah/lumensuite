import { BaseSelection } from '../base.js';
export type TextRangePoint = {
    blockId: string;
    index: number;
    length: number;
};
export type TextSelectionProps = {
    from: TextRangePoint;
    to: TextRangePoint | null;
    reverse?: boolean;
};
export declare class TextSelection extends BaseSelection {
    static group: string;
    static type: string;
    from: TextRangePoint;
    reverse: boolean;
    to: TextRangePoint | null;
    get end(): TextRangePoint;
    get start(): TextRangePoint;
    constructor({ from, to, reverse }: TextSelectionProps);
    static fromJSON(json: Record<string, unknown>): TextSelection;
    private _equalPoint;
    empty(): boolean;
    equals(other: BaseSelection): boolean;
    isCollapsed(): boolean;
    isInSameBlock(): boolean;
    toJSON(): Record<string, unknown>;
}
declare global {
    namespace LumenSuite {
        interface Selection {
            text: typeof TextSelection;
        }
    }
}
//# sourceMappingURL=text.d.ts.map