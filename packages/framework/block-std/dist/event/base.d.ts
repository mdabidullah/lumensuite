type MatchEvent<T extends string> = T extends UIEventStateType ? LumenSuiteUIEventState[T] : UIEventState;
export declare class UIEventState {
    event: Event;
    /** when extends, override it with pattern `xxxState` */
    type: string;
    constructor(event: Event);
}
export declare class UIEventStateContext {
    private _map;
    add: <State extends UIEventState = UIEventState>(state: State) => void;
    get: <Type extends UIEventStateType = keyof LumenSuiteUIEventState>(type: Type) => MatchEvent<Type>;
    has: (type: UIEventStateType) => boolean;
    static from(...states: UIEventState[]): UIEventStateContext;
}
export type UIEventHandler = (context: UIEventStateContext) => boolean | null | undefined | void;
declare global {
    interface LumenSuiteUIEventState {
        defaultState: UIEventState;
    }
    type UIEventStateType = keyof LumenSuiteUIEventState;
}
export {};
//# sourceMappingURL=base.d.ts.map