import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { LifeCycleWatcherIdentifier, StdIdentifier } from '../identifier.js';
import { Extension } from './extension.js';
/**
 * A life cycle watcher is an extension that watches the life cycle of the editor.
 * It is used to perform actions when the editor is created, mounted, rendered, or unmounted.
 *
 * When creating a life cycle watcher, you must define a key that is unique to the watcher.
 * The key is used to identify the watcher in the dependency injection container.
 * ```ts
 * class MyLifeCycleWatcher extends LifeCycleWatcher {
 *  static override readonly key = 'my-life-cycle-watcher';
 * ```
 *
 * In the life cycle watcher, the methods will be called in the following order:
 * 1. `created`: Called when the std is created.
 * 2. `rendered`: Called when `std.render` is called.
 * 3. `mounted`: Called when the editor host is mounted.
 * 4. `unmounted`: Called when the editor host is unmounted.
 */
export class LifeCycleWatcher extends Extension {
    constructor(std) {
        super();
        this.std = std;
    }
    static setup(di) {
        if (!this.key) {
            throw new LumenSuiteError(ErrorCode.ValueNotExists, 'Key is not defined in the LifeCycleWatcher');
        }
        di.add(this, [
            StdIdentifier,
        ]);
        di.addImpl(LifeCycleWatcherIdentifier(this.key), provider => provider.get(this));
    }
    /**
     * Called when std is created.
     */
    created() { }
    /**
     * Called when editor host is mounted.
     * Which means the editor host emit the `connectedCallback` lifecycle event.
     */
    mounted() { }
    /**
     * Called when `std.render` is called.
     */
    rendered() { }
    /**
     * Called when editor host is unmounted.
     * Which means the editor host emit the `disconnectedCallback` lifecycle event.
     */
    unmounted() { }
}
//# sourceMappingURL=lifecycle-watcher.js.map