import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { Array as YArray, Map as YMap } from 'yjs';
import { Boxed } from './boxed.js';
import { Text } from './text.js';
import { BaseReactiveYData, native2Y, y2Native } from './utils.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const proxies = new WeakMap();
export class ReactiveYArray extends BaseReactiveYData {
    constructor(_source, _ySource, _options) {
        super();
        this._source = _source;
        this._ySource = _ySource;
        this._options = _options;
        this._observer = (event) => {
            this._onObserve(event, () => {
                let retain = 0;
                event.changes.delta.forEach(change => {
                    if (change.retain) {
                        retain += change.retain;
                        return;
                    }
                    if (change.delete) {
                        this._updateWithSkip(() => {
                            this._source.splice(retain, change.delete);
                        });
                        return;
                    }
                    if (change.insert) {
                        const _arr = [change.insert].flat();
                        const proxyList = _arr.map(value => createYProxy(value));
                        this._updateWithSkip(() => {
                            this._source.splice(retain, 0, ...proxyList);
                        });
                        retain += change.insert.length;
                    }
                });
            });
        };
        this._getProxy = () => {
            return new Proxy(this._source, {
                has: (target, p) => {
                    return Reflect.has(target, p);
                },
                set: (target, p, value, receiver) => {
                    if (typeof p !== 'string') {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'key cannot be a symbol');
                    }
                    const index = Number(p);
                    if (this._skipNext || Number.isNaN(index)) {
                        return Reflect.set(target, p, value, receiver);
                    }
                    if (this._stashed.has(index)) {
                        const result = Reflect.set(target, p, value, receiver);
                        this._options.onChange?.(this._proxy);
                        return result;
                    }
                    const reactive = proxies.get(this._ySource);
                    if (!reactive) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
                    }
                    const doc = this._ySource.doc;
                    if (!doc) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not bound to a Y.Doc');
                    }
                    const yData = native2Y(value);
                    this._transact(doc, () => {
                        if (index < this._ySource.length) {
                            this._ySource.delete(index, 1);
                        }
                        this._ySource.insert(index, [yData]);
                    });
                    const data = createYProxy(yData, this._options);
                    return Reflect.set(target, p, data, receiver);
                },
                get: (target, p, receiver) => {
                    return Reflect.get(target, p, receiver);
                },
                deleteProperty: (target, p) => {
                    if (typeof p !== 'string') {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'key cannot be a symbol');
                    }
                    const proxied = proxies.get(this._ySource);
                    if (!proxied) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
                    }
                    const doc = this._ySource.doc;
                    if (!doc) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not bound to a Y.Doc');
                    }
                    const index = Number(p);
                    if (this._skipNext || Number.isNaN(index)) {
                        return Reflect.deleteProperty(target, p);
                    }
                    this._transact(doc, () => {
                        this._ySource.delete(index, 1);
                    });
                    return Reflect.deleteProperty(target, p);
                },
            });
        };
        this._proxy = this._getProxy();
        proxies.set(_ySource, this);
        _ySource.observe(this._observer);
    }
    pop(prop) {
        const value = this._source[prop];
        this._stashed.delete(prop);
        this._proxy[prop] = value;
    }
    stash(prop) {
        this._stashed.add(prop);
    }
}
export class ReactiveYMap extends BaseReactiveYData {
    constructor(_source, _ySource, _options) {
        super();
        this._source = _source;
        this._ySource = _ySource;
        this._options = _options;
        this._observer = (event) => {
            this._onObserve(event, () => {
                event.keysChanged.forEach(key => {
                    const type = event.changes.keys.get(key);
                    if (!type) {
                        return;
                    }
                    if (type.action === 'delete') {
                        this._updateWithSkip(() => {
                            delete this._source[key];
                        });
                    }
                    else if (type.action === 'add' || type.action === 'update') {
                        const current = this._ySource.get(key);
                        this._updateWithSkip(() => {
                            this._source[key] = proxies.has(current)
                                ? proxies.get(current)
                                : createYProxy(current, this._options);
                        });
                    }
                });
            });
        };
        this._getProxy = () => {
            return new Proxy(this._source, {
                has: (target, p) => {
                    return Reflect.has(target, p);
                },
                set: (target, p, value, receiver) => {
                    if (typeof p !== 'string') {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'key cannot be a symbol');
                    }
                    if (this._skipNext) {
                        return Reflect.set(target, p, value, receiver);
                    }
                    if (this._stashed.has(p)) {
                        const result = Reflect.set(target, p, value, receiver);
                        this._options.onChange?.(this._proxy);
                        return result;
                    }
                    const reactive = proxies.get(this._ySource);
                    if (!reactive) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
                    }
                    const doc = this._ySource.doc;
                    if (!doc) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not bound to a Y.Doc');
                    }
                    const yData = native2Y(value);
                    this._transact(doc, () => {
                        this._ySource.set(p, yData);
                    });
                    const data = createYProxy(yData, this._options);
                    return Reflect.set(target, p, data, receiver);
                },
                get: (target, p, receiver) => {
                    return Reflect.get(target, p, receiver);
                },
                deleteProperty: (target, p) => {
                    if (typeof p !== 'string') {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'key cannot be a symbol');
                    }
                    if (this._skipNext) {
                        return Reflect.deleteProperty(target, p);
                    }
                    const proxied = proxies.get(this._ySource);
                    if (!proxied) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
                    }
                    const doc = this._ySource.doc;
                    if (!doc) {
                        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not bound to a Y.Doc');
                    }
                    this._transact(doc, () => {
                        this._ySource.delete(p);
                    });
                    return Reflect.deleteProperty(target, p);
                },
            });
        };
        this._proxy = this._getProxy();
        proxies.set(_ySource, this);
        _ySource.observe(this._observer);
    }
    pop(prop) {
        const value = this._source[prop];
        this._stashed.delete(prop);
        this._proxy[prop] = value;
    }
    stash(prop) {
        this._stashed.add(prop);
    }
}
export function createYProxy(yAbstract, options = {}) {
    if (proxies.has(yAbstract)) {
        return proxies.get(yAbstract).proxy;
    }
    return y2Native(yAbstract, {
        transform: (value, origin) => {
            if (value instanceof Text) {
                value.bind(options.onChange);
                return value;
            }
            if (Boxed.is(origin)) {
                value.bind(options.onChange);
                return value;
            }
            if (origin instanceof YArray) {
                const data = new ReactiveYArray(value, origin, options);
                return data.proxy;
            }
            if (origin instanceof YMap) {
                const data = new ReactiveYMap(value, origin, options);
                return data.proxy;
            }
            return value;
        },
    });
}
export function stashProp(yAbstract, prop) {
    const proxy = proxies.get(yAbstract);
    if (!proxy) {
        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
    }
    proxy.stash(prop);
}
export function popProp(yAbstract, prop) {
    const proxy = proxies.get(yAbstract);
    if (!proxy) {
        throw new LumenSuiteError(ErrorCode.ReactiveProxyError, 'YData is not subscribed before changes');
    }
    proxy.pop(prop);
}
//# sourceMappingURL=proxy.js.map