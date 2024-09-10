type Keyof<T> = T extends unknown ? keyof T : never;
export declare class ASTWalkerContext<TNode extends object> {
    private _defaultProp;
    private _globalContext;
    private _stack;
    _skip: boolean;
    _skipChildrenNum: number;
    setDefaultProp: (parentProp: Keyof<TNode>) => void;
    get stack(): {
        node: TNode;
        prop: Keyof<TNode>;
        context: Record<string, unknown>;
    }[];
    private current;
    closeNode(): this;
    currentNode(): TNode;
    getGlobalContext(key: string): unknown;
    getGlobalContextStack<StackElement>(key: string): StackElement[];
    getNodeContext(key: string): unknown;
    getPreviousNodeContext(key: string): unknown;
    openNode(node: TNode, parentProp?: Keyof<TNode>): this;
    previousNode(): TNode;
    pushGlobalContextStack<StackElement>(key: string, value: StackElement): void;
    setGlobalContext(key: string, value: unknown): this;
    setGlobalContextStack<StackElement>(key: string, value: StackElement[]): void;
    setNodeContext(key: string, value: unknown): this;
    skipAllChildren(): void;
    skipChildren(num?: number): void;
}
export {};
//# sourceMappingURL=context.d.ts.map