type DisposeCallback = () => void;
export interface Disposable {
    dispose: DisposeCallback;
}
export declare class DisposableGroup implements Disposable {
    private _disposables;
    private _disposed;
    get disposed(): boolean;
    /**
     * Add to group to be disposed with others.
     * This will be immediately disposed if this group has already been disposed.
     */
    add(d: Disposable | DisposeCallback): void;
    addFromEvent<N extends keyof WindowEventMap>(element: Window, eventName: N, handler: (e: WindowEventMap[N]) => void, options?: boolean | AddEventListenerOptions): void;
    addFromEvent<N extends keyof DocumentEventMap>(element: Document, eventName: N, handler: (e: DocumentEventMap[N]) => void, eventOptions?: boolean | AddEventListenerOptions): void;
    addFromEvent<N extends keyof HTMLElementEventMap>(element: HTMLElement, eventName: N, handler: (e: HTMLElementEventMap[N]) => void, eventOptions?: boolean | AddEventListenerOptions): void;
    dispose(): void;
}
export declare function flattenDisposables(disposables: Disposable[]): Disposable;
export {};
//# sourceMappingURL=disposable.d.ts.map