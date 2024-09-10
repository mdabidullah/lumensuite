import { BlockSuiteError, ErrorCode } from '@blocksuite/global/exceptions';
import { Job } from '@blocksuite/store';
import * as lz from 'lz-string';
import rehypeParse from 'rehype-parse';
import { unified } from 'unified';
import { LifeCycleWatcher } from '../extension/index.js';
export function onlyContainImgElement(ast) {
    if (ast.type === 'element') {
        switch (ast.tagName) {
            case 'html':
            case 'body':
                return ast.children.map(onlyContainImgElement).reduce((a, b) => {
                    if (a === 'no' || b === 'no') {
                        return 'no';
                    }
                    if (a === 'maybe' && b === 'maybe') {
                        return 'maybe';
                    }
                    return 'yes';
                }, 'maybe');
            case 'img':
                return 'yes';
            case 'head':
                return 'maybe';
            default:
                return 'no';
        }
    }
    return 'maybe';
}
export class Clipboard extends LifeCycleWatcher {
    constructor() {
        super(...arguments);
        this._adapterMap = new Map();
        // Need to be cloned to a map for later use
        this._getDataByType = (clipboardData) => {
            const data = new Map();
            for (const type of clipboardData.types) {
                if (type === 'Files') {
                    data.set(type, Array.from(clipboardData.files));
                }
                else {
                    data.set(type, clipboardData.getData(type));
                }
            }
            if (data.get('Files') && data.get('text/html')) {
                const htmlAst = unified()
                    .use(rehypeParse)
                    .parse(data.get('text/html'));
                const isImgOnly = htmlAst.children.map(onlyContainImgElement).reduce((a, b) => {
                    if (a === 'no' || b === 'no') {
                        return 'no';
                    }
                    if (a === 'maybe' && b === 'maybe') {
                        return 'maybe';
                    }
                    return 'yes';
                }, 'maybe') === 'yes';
                if (isImgOnly) {
                    data.delete('text/html');
                }
            }
            return (type) => {
                const item = data.get(type);
                if (item) {
                    return item;
                }
                const files = (data.get('Files') ?? []);
                if (files.length > 0) {
                    return files;
                }
                return '';
            };
        };
        this._getSnapshotByPriority = async (getItem, doc, parent, index) => {
            const byPriority = Array.from(this._adapterMap.entries()).sort((a, b) => b[1].priority - a[1].priority);
            for (const [type, { adapter }] of byPriority) {
                const item = getItem(type);
                if (Array.isArray(item)) {
                    if (item.length === 0) {
                        continue;
                    }
                    if (
                    // if all files are not the same target type, fallback to */*
                    !item
                        .map(f => f.type === type || type === '*/*')
                        .reduce((a, b) => a && b, true)) {
                        continue;
                    }
                }
                if (item) {
                    const job = this._getJob();
                    const adapterInstance = new adapter(job);
                    const payload = {
                        file: item,
                        assets: job.assetsManager,
                        blockVersions: doc.collection.meta.blockVersions,
                        pageVersion: doc.collection.meta.pageVersion,
                        workspaceVersion: doc.collection.meta.workspaceVersion,
                        workspaceId: doc.collection.id,
                        pageId: doc.id,
                    };
                    const result = await adapterInstance.toSlice(payload, doc, parent, index);
                    if (result) {
                        return result;
                    }
                }
            }
            return null;
        };
        this._jobMiddlewares = [];
        this.copy = async (slice) => {
            return this.copySlice(slice);
        };
        // Gated by https://developer.mozilla.org/en-US/docs/Glossary/Transient_activation
        this.copySlice = async (slice) => {
            const adapterKeys = Array.from(this._adapterMap.keys());
            await this.writeToClipboard(async (_items) => {
                const items = { ..._items };
                await Promise.all(adapterKeys.map(async (type) => {
                    const item = await this._getClipboardItem(slice, type);
                    if (typeof item === 'string') {
                        items[type] = item;
                    }
                }));
                return items;
            });
        };
        this.duplicateSlice = async (slice, doc, parent, index, type = 'BLOCKSUITE/SNAPSHOT') => {
            const items = {
                [type]: await this._getClipboardItem(slice, type),
            };
            await this._getSnapshotByPriority(type => items[type] ?? '', doc, parent, index);
        };
        this.paste = async (event, doc, parent, index) => {
            const data = event.clipboardData;
            if (!data)
                return;
            try {
                const json = this.readFromClipboard(data);
                const slice = await this._getSnapshotByPriority(type => json[type], doc, parent, index);
                if (!slice) {
                    throw new BlockSuiteError(ErrorCode.TransformerError, 'No snapshot found');
                }
                return slice;
            }
            catch {
                const getDataByType = this._getDataByType(data);
                const slice = await this._getSnapshotByPriority(type => getDataByType(type), doc, parent, index);
                return slice;
            }
        };
        this.pasteBlockSnapshot = async (snapshot, doc, parent, index) => {
            return this._getJob().snapshotToBlock(snapshot, doc, parent, index);
        };
        this.registerAdapter = (mimeType, adapter, priority = 0) => {
            this._adapterMap.set(mimeType, { adapter, priority });
        };
        this.unregisterAdapter = (mimeType) => {
            this._adapterMap.delete(mimeType);
        };
        this.unuse = (middleware) => {
            this._jobMiddlewares = this._jobMiddlewares.filter(m => m !== middleware);
        };
        this.use = (middleware) => {
            this._jobMiddlewares.push(middleware);
        };
    }
    static { this.key = 'clipboard'; }
    get configs() {
        return this._getJob().adapterConfigs;
    }
    async _getClipboardItem(slice, type) {
        const job = this._getJob();
        const adapterItem = this._adapterMap.get(type);
        if (!adapterItem) {
            return;
        }
        const { adapter } = adapterItem;
        const adapterInstance = new adapter(job);
        const result = await adapterInstance.fromSlice(slice);
        if (!result) {
            return;
        }
        return result.file;
    }
    _getJob() {
        return new Job({
            middlewares: this._jobMiddlewares,
            collection: this.std.collection,
        });
    }
    readFromClipboard(clipboardData) {
        const items = clipboardData.getData('text/html');
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(items, 'text/html');
        const dom = doc.querySelector('[data-blocksuite-snapshot]');
        if (!dom) {
            throw new BlockSuiteError(ErrorCode.TransformerError, 'No snapshot found');
        }
        const json = JSON.parse(lz.decompressFromEncodedURIComponent(dom.dataset.blocksuiteSnapshot));
        return json;
    }
    async writeToClipboard(updateItems) {
        const _items = {
            'text/plain': '',
            'text/html': '',
            'image/png': '',
        };
        const items = await updateItems(_items);
        const text = items['text/plain'];
        const innerHTML = items['text/html'];
        const png = items['image/png'];
        delete items['text/plain'];
        delete items['text/html'];
        delete items['image/png'];
        const snapshot = lz.compressToEncodedURIComponent(JSON.stringify(items));
        const html = `<div data-blocksuite-snapshot=${snapshot}>${innerHTML}</div>`;
        const htmlBlob = new Blob([html], {
            type: 'text/html',
        });
        const clipboardItems = {
            'text/html': htmlBlob,
        };
        if (text.length > 0) {
            const textBlob = new Blob([text], {
                type: 'text/plain',
            });
            clipboardItems['text/plain'] = textBlob;
        }
        if (png instanceof Blob) {
            clipboardItems['image/png'] = png;
        }
        else if (png.length > 0) {
            const pngBlob = new Blob([png], {
                type: 'image/png',
            });
            clipboardItems['image/png'] = pngBlob;
        }
        await navigator.clipboard.write([new ClipboardItem(clipboardItems)]);
    }
}
//# sourceMappingURL=index.js.map