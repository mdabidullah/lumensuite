export type BaseSelectionOptions = {
    blockId: string;
};
export declare abstract class BaseSelection {
    static readonly group: string;
    static readonly type: string;
    readonly blockId: string;
    get group(): string;
    get type(): LumenSuite.SelectionType;
    constructor({ blockId }: BaseSelectionOptions);
    static fromJSON(_: Record<string, unknown>): BaseSelection;
    abstract equals(other: BaseSelection): boolean;
    is<T extends LumenSuite.SelectionType>(type: T): this is LumenSuite.SelectionInstance[T];
    abstract toJSON(): Record<string, unknown>;
}
//# sourceMappingURL=base.d.ts.map