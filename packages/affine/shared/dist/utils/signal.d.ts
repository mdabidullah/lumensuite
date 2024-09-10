interface Observable<T> {
    subscribe(observer: (value: T) => void): Unsubscribable;
}
interface Unsubscribable {
    unsubscribe(): void;
}
export declare function createSignalFromObservable<T>(observable$: Observable<T>, initValue: T): {
    signal: import("@preact/signals-core").Signal<T>;
    cleanup: () => void;
};
export { type Signal } from '@lit-labs/preact-signals';
//# sourceMappingURL=signal.d.ts.map