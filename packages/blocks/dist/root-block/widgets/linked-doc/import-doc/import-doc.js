var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { CloseIcon, ExportToHTMLIcon, ExportToMarkdownIcon, HelpIcon, NewIcon, NotionIcon, } from '@lumensuite/affine-components/icons';
import { WithDisposable } from '@lumensuite/block-std';
import { sha } from '@lumensuite/global/utils';
import { extMimeMap, } from '@lumensuite/store';
import { Job } from '@lumensuite/store';
import { html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { MarkdownAdapter } from '../../../../_common/adapters/markdown.js';
import { NotionHtmlAdapter } from '../../../../_common/adapters/notion-html.js';
import '../../../../_common/components/loader.js';
import { defaultImageProxyMiddleware } from '../../../../_common/transformers/middlewares.js';
import { Unzip } from '../../../../_common/transformers/utils.js';
import { openFileOrFiles } from '../../../../_common/utils/index.js';
import { styles } from './styles.js';
const SHOW_LOADING_SIZE = 1024 * 200;
export async function importMarkDown(collection, text, fileName) {
    const fileNameMiddleware = ({ slots }) => {
        slots.beforeImport.on(payload => {
            if (payload.type !== 'page') {
                return;
            }
            if (!fileName) {
                return;
            }
            payload.snapshot.meta.title = fileName;
            payload.snapshot.blocks.props.title = {
                '$lumensuite:internal:text$': true,
                delta: [
                    {
                        insert: fileName,
                    },
                ],
            };
        });
    };
    const job = new Job({
        collection,
        middlewares: [defaultImageProxyMiddleware, fileNameMiddleware],
    });
    const mdAdapter = new MarkdownAdapter(job);
    const page = await mdAdapter.toDoc({
        file: text,
        assets: job.assetsManager,
    });
    if (!page) {
        return;
    }
    return page.id;
}
export async function importHtml(collection, text) {
    const job = new Job({
        collection,
        middlewares: [defaultImageProxyMiddleware],
    });
    const htmlAdapter = new NotionHtmlAdapter(job);
    const snapshot = await htmlAdapter.toDocSnapshot({
        file: text,
        assets: job.assetsManager,
    });
    const page = await job.snapshotToDoc(snapshot);
    if (!page) {
        return;
    }
    return page.id;
}
export async function importNotion(collection, file) {
    const pageIds = [];
    let isWorkspaceFile = false;
    let hasMarkdown = false;
    let entryId;
    const parseZipFile = async (path) => {
        const unzip = new Unzip();
        await unzip.load(path);
        const zipFile = new Map();
        const pageMap = new Map();
        const pagePaths = [];
        const promises = [];
        const pendingAssets = new Map();
        const pendingPathBlobIdMap = new Map();
        for (const { path, content, index } of unzip) {
            if (path.startsWith('__MACOSX/'))
                continue;
            zipFile.set(path, content);
            const lastSplitIndex = path.lastIndexOf('/');
            const fileName = path.substring(lastSplitIndex + 1);
            if (fileName.endsWith('.md')) {
                hasMarkdown = true;
                continue;
            }
            if (fileName.endsWith('.html')) {
                if (path.endsWith('/index.html')) {
                    isWorkspaceFile = true;
                    continue;
                }
                if (lastSplitIndex !== -1) {
                    const text = await content.text();
                    const doc = new DOMParser().parseFromString(text, 'text/html');
                    const pageBody = doc.querySelector('.page-body');
                    if (pageBody && pageBody.children.length == 0) {
                        // Skip empty pages
                        continue;
                    }
                }
                const id = collection.idGenerator();
                const splitPath = path.split('/');
                while (splitPath.length > 0) {
                    pageMap.set(splitPath.join('/'), id);
                    splitPath.shift();
                }
                pagePaths.push(path);
                if (entryId === undefined && lastSplitIndex === -1) {
                    entryId = id;
                }
                continue;
            }
            if (index === 0 && fileName.endsWith('.csv')) {
                window.open('https://affine.pro/blog/import-your-data-from-notion-into-affine', '_blank');
                continue;
            }
            if (fileName.endsWith('.zip')) {
                const innerZipFile = content;
                if (innerZipFile) {
                    promises.push(...(await parseZipFile(innerZipFile)));
                }
                continue;
            }
            const blob = content;
            const ext = path.split('.').at(-1) ?? '';
            const mime = extMimeMap.get(ext) ?? '';
            const key = await sha(await blob.arrayBuffer());
            const filePathSplit = path.split('/');
            while (filePathSplit.length > 1) {
                pendingPathBlobIdMap.set(filePathSplit.join('/'), key);
                filePathSplit.shift();
            }
            pendingAssets.set(key, new File([blob], fileName, { type: mime }));
        }
        const pagePromises = Array.from(pagePaths).map(async (path) => {
            const job = new Job({
                collection: collection,
                middlewares: [defaultImageProxyMiddleware],
            });
            const htmlAdapter = new NotionHtmlAdapter(job);
            const assets = job.assetsManager.getAssets();
            const pathBlobIdMap = job.assetsManager.getPathBlobIdMap();
            for (const [key, value] of pendingAssets.entries()) {
                if (!assets.has(key)) {
                    assets.set(key, value);
                }
            }
            for (const [key, value] of pendingPathBlobIdMap.entries()) {
                if (!pathBlobIdMap.has(key)) {
                    pathBlobIdMap.set(key, value);
                }
            }
            const page = await htmlAdapter.toDoc({
                file: await zipFile.get(path).text(),
                pageId: pageMap.get(path),
                pageMap,
                assets: job.assetsManager,
            });
            if (page) {
                pageIds.push(page.id);
            }
        });
        promises.push(...pagePromises);
        return promises;
    };
    const allPromises = await parseZipFile(file);
    await Promise.all(allPromises.flat());
    entryId = entryId ?? pageIds[0];
    return { entryId, pageIds, isWorkspaceFile, hasMarkdown };
}
let ImportDoc = (() => {
    let _classDecorators = [customElement('import-doc')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __loading_decorators;
    let __loading_initializers = [];
    let __loading_extraInitializers = [];
    let __startX_decorators;
    let __startX_initializers = [];
    let __startX_extraInitializers = [];
    let __startY_decorators;
    let __startY_initializers = [];
    let __startY_extraInitializers = [];
    let _containerEl_decorators;
    let _containerEl_initializers = [];
    let _containerEl_extraInitializers = [];
    let _x_decorators;
    let _x_initializers = [];
    let _x_extraInitializers = [];
    let _y_decorators;
    let _y_initializers = [];
    let _y_extraInitializers = [];
    var ImportDoc = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __loading_decorators = [state()];
            __startX_decorators = [state()];
            __startY_decorators = [state()];
            _containerEl_decorators = [query('.container')];
            _x_decorators = [state()];
            _y_decorators = [state()];
            __esDecorate(this, null, __loading_decorators, { kind: "accessor", name: "_loading", static: false, private: false, access: { has: obj => "_loading" in obj, get: obj => obj._loading, set: (obj, value) => { obj._loading = value; } }, metadata: _metadata }, __loading_initializers, __loading_extraInitializers);
            __esDecorate(this, null, __startX_decorators, { kind: "accessor", name: "_startX", static: false, private: false, access: { has: obj => "_startX" in obj, get: obj => obj._startX, set: (obj, value) => { obj._startX = value; } }, metadata: _metadata }, __startX_initializers, __startX_extraInitializers);
            __esDecorate(this, null, __startY_decorators, { kind: "accessor", name: "_startY", static: false, private: false, access: { has: obj => "_startY" in obj, get: obj => obj._startY, set: (obj, value) => { obj._startY = value; } }, metadata: _metadata }, __startY_initializers, __startY_extraInitializers);
            __esDecorate(this, null, _containerEl_decorators, { kind: "accessor", name: "containerEl", static: false, private: false, access: { has: obj => "containerEl" in obj, get: obj => obj.containerEl, set: (obj, value) => { obj.containerEl = value; } }, metadata: _metadata }, _containerEl_initializers, _containerEl_extraInitializers);
            __esDecorate(this, null, _x_decorators, { kind: "accessor", name: "x", static: false, private: false, access: { has: obj => "x" in obj, get: obj => obj.x, set: (obj, value) => { obj.x = value; } }, metadata: _metadata }, _x_initializers, _x_extraInitializers);
            __esDecorate(this, null, _y_decorators, { kind: "accessor", name: "y", static: false, private: false, access: { has: obj => "y" in obj, get: obj => obj.y, set: (obj, value) => { obj.y = value; } }, metadata: _metadata }, _y_initializers, _y_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ImportDoc = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        constructor(collection, onSuccess, onFail, abortController = new AbortController()) {
            super();
            __runInitializers(this, _y_extraInitializers);
            this.collection = collection;
            this.onSuccess = onSuccess;
            this.onFail = onFail;
            this.abortController = abortController;
            this._loading = false;
            this.x = 0;
            this.y = 0;
            this._startX = 0;
            this._startY = 0;
            this._onMouseMove = this._onMouseMove.bind(this);
        }
        async _importHtml() {
            const files = await openFileOrFiles({ acceptType: 'Html', multiple: true });
            if (!files)
                return;
            const pageIds = [];
            for (const file of files) {
                const text = await file.text();
                const needLoading = file.size > SHOW_LOADING_SIZE;
                if (needLoading) {
                    this.hidden = false;
                    this._loading = true;
                }
                else {
                    this.abortController.abort();
                }
                const pageId = await importHtml(this.collection, text);
                needLoading && this.abortController.abort();
                if (pageId) {
                    pageIds.push(pageId);
                }
            }
            this._onImportSuccess(pageIds);
        }
        async _importMarkDown() {
            const files = await openFileOrFiles({
                acceptType: 'Markdown',
                multiple: true,
            });
            if (!files)
                return;
            const pageIds = [];
            for (const file of files) {
                const text = await file.text();
                const fileName = file.name.split('.').slice(0, -1).join('.');
                const needLoading = file.size > SHOW_LOADING_SIZE;
                if (needLoading) {
                    this.hidden = false;
                    this._loading = true;
                }
                else {
                    this.abortController.abort();
                }
                const pageId = await importMarkDown(this.collection, text, fileName);
                needLoading && this.abortController.abort();
                if (pageId) {
                    pageIds.push(pageId);
                }
            }
            this._onImportSuccess(pageIds);
        }
        async _importNotion() {
            const file = await openFileOrFiles({ acceptType: 'Zip' });
            if (!file)
                return;
            const needLoading = file.size > SHOW_LOADING_SIZE;
            if (needLoading) {
                this.hidden = false;
                this._loading = true;
            }
            else {
                this.abortController.abort();
            }
            const { entryId, pageIds, isWorkspaceFile, hasMarkdown } = await importNotion(this.collection, file);
            needLoading && this.abortController.abort();
            if (hasMarkdown) {
                this._onFail('Importing markdown files from Notion is deprecated. Please export your Notion pages as HTML.');
                return;
            }
            this._onImportSuccess([entryId], {
                isWorkspaceFile,
                importedCount: pageIds.length,
            });
        }
        _onCloseClick(event) {
            event.stopPropagation();
            this.abortController.abort();
        }
        _onFail(message) {
            this.onFail?.(message);
        }
        _onImportSuccess(pageIds, options = {}) {
            const { isWorkspaceFile = false, importedCount: pagesImportedCount = pageIds.length, } = options;
            this.onSuccess?.(pageIds, {
                isWorkspaceFile,
                importedCount: pagesImportedCount,
            });
        }
        _onMouseDown(event) {
            this._startX = event.clientX - this.x;
            this._startY = event.clientY - this.y;
            window.addEventListener('mousemove', this._onMouseMove);
        }
        _onMouseMove(event) {
            this.x = event.clientX - this._startX;
            this.y = event.clientY - this._startY;
        }
        _onMouseUp() {
            window.removeEventListener('mousemove', this._onMouseMove);
        }
        _openLearnImportLink(event) {
            event.stopPropagation();
            window.open('https://affine.pro/blog/import-your-data-from-notion-into-affine', '_blank');
        }
        render() {
            if (this._loading) {
                return html `
        <div class="overlay-mask"></div>
        <div class="container">
          <header
            class="loading-header"
            @mousedown="${this._onMouseDown}"
            @mouseup="${this._onMouseUp}"
          >
            <div>Import</div>
            <loader-element .width=${'50px'}></loader-element>
          </header>
          <div>
            Importing the file may take some time. It depends on document size
            and complexity.
          </div>
        </div>
      `;
            }
            return html `
      <div
        class="overlay-mask"
        @click="${() => this.abortController.abort()}"
      ></div>
      <div class="container">
        <header @mousedown="${this._onMouseDown}" @mouseup="${this._onMouseUp}">
          <icon-button height="28px" @click="${this._onCloseClick}">
            ${CloseIcon}
          </icon-button>
          <div>Import</div>
        </header>
        <div>
          AFFiNE will gradually support more file formats for import.
          <a
            href="https://community.affine.pro/c/feature-requests/import-export"
            target="_blank"
            >Provide feedback.</a
          >
        </div>
        <div class="button-container">
          <icon-button
            class="button-item"
            text="Markdown"
            @click="${this._importMarkDown}"
          >
            ${ExportToMarkdownIcon}
          </icon-button>
          <icon-button
            class="button-item"
            text="HTML"
            @click="${this._importHtml}"
          >
            ${ExportToHTMLIcon}
          </icon-button>
        </div>
        <div class="button-container">
          <icon-button
            class="button-item"
            text="Notion"
            @click="${this._importNotion}"
          >
            ${NotionIcon}
            <div
              slot="suffix"
              class="button-suffix"
              @click="${this._openLearnImportLink}"
            >
              ${HelpIcon}
              <affine-tooltip>
                Learn how to Import your Notion pages into AFFiNE.
              </affine-tooltip>
            </div>
          </icon-button>
          <icon-button class="button-item" text="Coming soon..." disabled>
            ${NewIcon}
          </icon-button>
        </div>
        <!-- <div class="footer">
        <div>Migrate from other versions of AFFiNE?</div>
      </div> -->
      </div>
    `;
        }
        updated(changedProps) {
            if (changedProps.has('x') || changedProps.has('y')) {
                this.containerEl.style.transform = `translate(${this.x}px, ${this.y}px)`;
            }
        }
        #_loading_accessor_storage = __runInitializers(this, __loading_initializers, false);
        get _loading() { return this.#_loading_accessor_storage; }
        set _loading(value) { this.#_loading_accessor_storage = value; }
        #_startX_accessor_storage = (__runInitializers(this, __loading_extraInitializers), __runInitializers(this, __startX_initializers, 0));
        get _startX() { return this.#_startX_accessor_storage; }
        set _startX(value) { this.#_startX_accessor_storage = value; }
        #_startY_accessor_storage = (__runInitializers(this, __startX_extraInitializers), __runInitializers(this, __startY_initializers, 0));
        get _startY() { return this.#_startY_accessor_storage; }
        set _startY(value) { this.#_startY_accessor_storage = value; }
        #containerEl_accessor_storage = (__runInitializers(this, __startY_extraInitializers), __runInitializers(this, _containerEl_initializers, void 0));
        get containerEl() { return this.#containerEl_accessor_storage; }
        set containerEl(value) { this.#containerEl_accessor_storage = value; }
        #x_accessor_storage = (__runInitializers(this, _containerEl_extraInitializers), __runInitializers(this, _x_initializers, 0));
        get x() { return this.#x_accessor_storage; }
        set x(value) { this.#x_accessor_storage = value; }
        #y_accessor_storage = (__runInitializers(this, _x_extraInitializers), __runInitializers(this, _y_initializers, 0));
        get y() { return this.#y_accessor_storage; }
        set y(value) { this.#y_accessor_storage = value; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ImportDoc = _classThis;
})();
export { ImportDoc };
//# sourceMappingURL=import-doc.js.map