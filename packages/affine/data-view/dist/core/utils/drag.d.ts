export declare const startDrag: <T extends Record<string, unknown> | void, P = {
    x: number;
}>(evt: MouseEvent, ops: {
    transform?: (evt: MouseEvent) => P;
    onDrag: (p: P) => T;
    onMove: (p: P) => T;
    onDrop: (result: T) => void;
    onClear: () => void;
}) => {
    data: T;
    last: P;
    move: (p: P) => void;
};
//# sourceMappingURL=drag.d.ts.map