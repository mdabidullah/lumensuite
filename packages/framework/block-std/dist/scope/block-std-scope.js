import { Container } from '@blocksuite/global/di';
import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { Clipboard } from '../clipboard/index.js';
import { CommandManager } from '../command/index.js';
import { UIEventDispatcher } from '../event/index.js';
import { GfxController } from '../gfx/controller.js';
import { BlockServiceIdentifier, BlockViewIdentifier, ConfigIdentifier, LifeCycleWatcherIdentifier, StdIdentifier, } from '../identifier.js';
import { RangeManager } from '../range/index.js';
import { SelectionManager } from '../selection/index.js';
import { ServiceManager } from '../service/index.js';
import { EditorHost } from '../view/element/index.js';
import { ViewStore } from '../view/view-store.js';
const internalExtensions = [
    ServiceManager,
    CommandManager,
    UIEventDispatcher,
    SelectionManager,
    RangeManager,
    ViewStore,
    Clipboard,
    GfxController,
];
export class BlockStdScope {
    get _lifeCycleWatchers() {
        return this.provider.getAll(LifeCycleWatcherIdentifier);
    }
    get clipboard() {
        return this.get(Clipboard);
    }
    get collection() {
        return this.doc.collection;
    }
    get command() {
        return this.get(CommandManager);
    }
    get event() {
        return this.get(UIEventDispatcher);
    }
    get get() {
        return this.provider.get.bind(this.provider);
    }
    get getOptional() {
        return this.provider.getOptional.bind(this.provider);
    }
    get host() {
        return this._getHost();
    }
    get range() {
        return this.get(RangeManager);
    }
    get selection() {
        return this.get(SelectionManager);
    }
    get view() {
        return this.get(ViewStore);
    }
    constructor(options) {
        this._getHost = () => {
            throw new BlockSuiteError(ErrorCode.ValueNotExists, 'Host is not ready to use, the `render` method should be called first');
        };
        this.doc = options.doc;
        this.extensions = [...internalExtensions, ...options.extensions];
        this.container = new Container();
        this.container.addImpl(StdIdentifier, () => this);
        this.extensions.forEach(ext => {
            const container = this.container;
            ext.setup(container);
        });
        this.provider = this.container.provider();
        this._lifeCycleWatchers.forEach(watcher => {
            watcher.created.call(watcher);
        });
    }
    getConfig(flavour) {
        const config = this.provider.getOptional(ConfigIdentifier(flavour));
        if (!config) {
            return null;
        }
        return config;
    }
    getService(flavour) {
        return this.get(BlockServiceIdentifier(flavour));
    }
    getView(flavour) {
        return this.getOptional(BlockViewIdentifier(flavour));
    }
    mount() {
        this._lifeCycleWatchers.forEach(watcher => {
            watcher.mounted.call(watcher);
        });
    }
    render() {
        const element = new EditorHost();
        element.std = this;
        element.doc = this.doc;
        this._getHost = () => element;
        this._lifeCycleWatchers.forEach(watcher => {
            watcher.rendered.call(watcher);
        });
        return element;
    }
    unmount() {
        this._lifeCycleWatchers.forEach(watcher => {
            watcher.unmounted.call(watcher);
        });
    }
}
//# sourceMappingURL=block-std-scope.js.map