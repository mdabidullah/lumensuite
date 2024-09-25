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
import { matchFlavours } from '@lumensuite/affine-shared/utils';
import { BlockSelection, TextSelection, } from '@lumensuite/block-std';
import { WidgetComponent } from '@lumensuite/block-std';
import { assertExists } from '@lumensuite/global/utils';
import { computed } from '@lit-labs/preact-signals';
import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { RemoteColorManager } from '../../../root-block/remote-color-manager/remote-color-manager.js';
import { cursorStyle, filterCoveringRects, selectionStyle } from './utils.js';
export const AFFINE_DOC_REMOTE_SELECTION_WIDGET = 'affine-doc-remote-selection-widget';
let AffineDocRemoteSelectionWidget = (() => {
    let _classDecorators = [customElement(AFFINE_DOC_REMOTE_SELECTION_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetComponent;
    var AffineDocRemoteSelectionWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._abortController = new AbortController();
            this._remoteColorManager = null;
            this._remoteSelections = computed(() => {
                const status = this.doc.awarenessStore.getStates();
                return [...this.std.selection.remoteSelections.entries()].map(([id, selections]) => {
                    return {
                        id,
                        selections,
                        user: status.get(id)?.user,
                    };
                });
            });
            this._resizeObserver = new ResizeObserver(() => {
                this.requestUpdate();
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineDocRemoteSelectionWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // avoid being unable to select text by mouse click or drag
        static { this.styles = css `
    :host {
      pointer-events: none;
    }
  `; }
        get _config() {
            const config = this.std.getConfig('affine:page')?.docRemoteSelectionWidget ?? {};
            return {
                blockSelectionBackgroundTransparent: block => {
                    return (matchFlavours(block, [
                        'affine:code',
                        'affine:database',
                        'affine:image',
                        'affine:attachment',
                        'affine:bookmark',
                        'affine:surface-ref',
                    ]) || /affine:embed-*/.test(block.flavour));
                },
                ...config,
            };
        }
        get _container() {
            return this.offsetParent;
        }
        get _containerRect() {
            return this.offsetParent?.getBoundingClientRect();
        }
        get _selectionManager() {
            return this.host.selection;
        }
        _getCursorRect(selections) {
            if (this.block.model.flavour !== 'affine:page') {
                console.error('remote selection widget must be used in page component');
                return null;
            }
            const textSelection = selections.find(selection => selection instanceof TextSelection);
            const blockSelections = selections.filter(selection => selection instanceof BlockSelection);
            const container = this._container;
            const containerRect = this._containerRect;
            if (textSelection) {
                const range = this.std.range.textSelectionToRange(this._selectionManager.create('text', {
                    from: {
                        blockId: textSelection.to
                            ? textSelection.to.blockId
                            : textSelection.from.blockId,
                        index: textSelection.to
                            ? textSelection.to.index + textSelection.to.length
                            : textSelection.from.index + textSelection.from.length,
                        length: 0,
                    },
                    to: null,
                }));
                if (!range) {
                    return null;
                }
                const container = this._container;
                const containerRect = this._containerRect;
                const rangeRects = Array.from(range.getClientRects());
                if (rangeRects.length > 0) {
                    const rect = rangeRects.length === 1
                        ? rangeRects[0]
                        : rangeRects[rangeRects.length - 1];
                    return {
                        width: 2,
                        height: rect.height,
                        top: rect.top - (containerRect?.top ?? 0) + (container?.scrollTop ?? 0),
                        left: rect.left -
                            (containerRect?.left ?? 0) +
                            (container?.scrollLeft ?? 0),
                    };
                }
            }
            else if (blockSelections.length > 0) {
                const lastBlockSelection = blockSelections[blockSelections.length - 1];
                const block = this.host.view.getBlock(lastBlockSelection.blockId);
                if (block) {
                    const rect = block.getBoundingClientRect();
                    return {
                        width: 2,
                        height: rect.height,
                        top: rect.top - (containerRect?.top ?? 0) + (container?.scrollTop ?? 0),
                        left: rect.left +
                            rect.width -
                            (containerRect?.left ?? 0) +
                            (container?.scrollLeft ?? 0),
                    };
                }
            }
            return null;
        }
        _getSelectionRect(selections) {
            if (this.block.model.flavour !== 'affine:page') {
                console.error('remote selection widget must be used in page component');
                return [];
            }
            const textSelection = selections.find(selection => selection instanceof TextSelection);
            const blockSelections = selections.filter(selection => selection instanceof BlockSelection);
            const container = this._container;
            const containerRect = this._containerRect;
            if (textSelection) {
                const range = this.std.range.textSelectionToRange(textSelection);
                if (range) {
                    const nativeRects = Array.from(range.getClientRects());
                    const rectsWithoutFiltered = nativeRects
                        .map(rect => ({
                        width: rect.right - rect.left,
                        height: rect.bottom - rect.top,
                        top: rect.top -
                            (containerRect?.top ?? 0) +
                            (container?.scrollTop ?? 0),
                        left: rect.left -
                            (containerRect?.left ?? 0) +
                            (container?.scrollLeft ?? 0),
                    }))
                        .filter(rect => rect.width > 0 && rect.height > 0);
                    return filterCoveringRects(rectsWithoutFiltered);
                }
            }
            else if (blockSelections.length > 0) {
                return blockSelections.flatMap(blockSelection => {
                    const block = this.host.view.getBlock(blockSelection.blockId);
                    if (block) {
                        const rect = block.getBoundingClientRect();
                        const transparent = this._config.blockSelectionBackgroundTransparent(block.model);
                        return {
                            width: rect.width,
                            height: rect.height,
                            top: rect.top -
                                (containerRect?.top ?? 0) +
                                (container?.scrollTop ?? 0),
                            left: rect.left -
                                (containerRect?.left ?? 0) +
                                (container?.scrollLeft ?? 0),
                            transparent,
                        };
                    }
                    return [];
                });
            }
            return [];
        }
        connectedCallback() {
            super.connectedCallback();
            this.handleEvent('wheel', () => {
                this.requestUpdate();
            });
            this.disposables.addFromEvent(window, 'resize', () => {
                this.requestUpdate();
            });
            this._remoteColorManager = new RemoteColorManager(this.host);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._resizeObserver.disconnect();
            this._abortController.abort();
        }
        render() {
            if (this._remoteSelections.value.length === 0) {
                return nothing;
            }
            const remoteUsers = new Set();
            const selections = this._remoteSelections.value.flatMap(({ selections, id, user }) => {
                if (remoteUsers.has(id)) {
                    return [];
                }
                else {
                    remoteUsers.add(id);
                }
                return {
                    id,
                    selections,
                    rects: this._getSelectionRect(selections),
                    user,
                };
            });
            const remoteColorManager = this._remoteColorManager;
            assertExists(remoteColorManager);
            return html `<div>
      ${selections.flatMap(selection => {
                const color = remoteColorManager.get(selection.id);
                if (!color)
                    return;
                const cursorRect = this._getCursorRect(selection.selections);
                return selection.rects
                    .map(r => html `<div style="${selectionStyle(r, color)}"></div>`)
                    .concat([
                    html `
              <div
                style="${cursorRect
                        ? cursorStyle(cursorRect, color)
                        : styleMap({
                            display: 'none',
                        })}"
              >
                <div
                  style="${styleMap({
                        position: 'relative',
                        height: '100%',
                    })}"
                >
                  <div
                    style="${styleMap({
                        position: 'absolute',
                        left: '-4px',
                        bottom: `${cursorRect?.height ? cursorRect.height - 4 : 0}px`,
                        backgroundColor: color,
                        color: 'white',
                        maxWidth: '160px',
                        padding: '0 3px',
                        border: '1px solid var(--affine-pure-black-20)',
                        boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.16)',
                        borderRadius: '4px',
                        fontSize: '12px',
                        lineHeight: '18px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        display: selection.user ? 'block' : 'none',
                    })}"
                  >
                    ${selection.user?.name}
                  </div>
                </div>
              </div>
            `,
                ]);
            })}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineDocRemoteSelectionWidget = _classThis;
})();
export { AffineDocRemoteSelectionWidget };
//# sourceMappingURL=doc-remote-selection.js.map