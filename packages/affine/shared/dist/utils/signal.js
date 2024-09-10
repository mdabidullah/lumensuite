import { signal } from '@lit-labs/preact-signals';
export function createSignalFromObservable(observable$, initValue) {
    const newSignal = signal(initValue);
    const subscription = observable$.subscribe(value => {
        newSignal.value = value;
    });
    return {
        signal: newSignal,
        cleanup: () => subscription.unsubscribe(),
    };
}
export {} from '@lit-labs/preact-signals';
//# sourceMappingURL=signal.js.map