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
import { CommonUtils } from '@lumensuite/affine-block-surface';
import { ConnectorCWithArrowIcon } from '@lumensuite/affine-components/icons';
import { cloneGroups, renderToolbarSeparator, } from '@lumensuite/affine-components/toolbar';
import { ConnectorMode, GroupElementModel, ShapeElementModel, } from '@lumensuite/affine-model';
import { ThemeObserver } from '@lumensuite/affine-shared/theme';
import { requestConnectedFrame } from '@lumensuite/affine-shared/utils';
import { WidgetComponent } from '@lumensuite/block-std';
import { atLeastNMatches, groupBy, pickValues } from '@lumensuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { getMoreMenuConfig } from '../../configs/toolbar.js';
import { edgelessElementsBound } from '../../edgeless/utils/bound-utils.js';
import { isAttachmentBlock, isBookmarkBlock, isEdgelessTextBlock, isEmbeddedBlock, isFrameBlock, isImageBlock, isNoteBlock, } from '../../edgeless/utils/query.js';
import { renderAddFrameButton } from './add-frame-button.js';
import { renderAddGroupButton } from './add-group-button.js';
import { renderAlignButton } from './align-button.js';
import { renderAttachmentButton } from './change-attachment-button.js';
import { renderChangeBrushButton } from './change-brush-button.js';
import { renderConnectorButton } from './change-connector-button.js';
import { renderChangeEdgelessTextButton } from './change-edgeless-text-button.js';
import { renderEmbedButton } from './change-embed-card-button.js';
import { renderFrameButton } from './change-frame-button.js';
import { renderGroupButton } from './change-group-button.js';
import { renderChangeImageButton } from './change-image-button.js';
import { renderMindmapButton } from './change-mindmap-button.js';
import { renderNoteButton } from './change-note-button.js';
import { renderChangeShapeButton } from './change-shape-button.js';
import { renderChangeTextButton } from './change-text-button.js';
import './more-menu/button.js';
import { BUILT_IN_GROUPS } from './more-menu/config.js';
import { renderReleaseFromGroupButton } from './release-from-group-button.js';
export const EDGELESS_ELEMENT_TOOLBAR_WIDGET = 'edgeless-element-toolbar-widget';
let EdgelessElementToolbarWidget = (() => {
    let _classDecorators = [customElement(EDGELESS_ELEMENT_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetComponent;
    let __dragging_decorators;
    let __dragging_initializers = [];
    let __dragging_extraInitializers = [];
    let __registeredEntries_decorators;
    let __registeredEntries_initializers = [];
    let __registeredEntries_extraInitializers = [];
    let _enableNoteSlicer_decorators;
    let _enableNoteSlicer_initializers = [];
    let _enableNoteSlicer_extraInitializers = [];
    let _selectedIds_decorators;
    let _selectedIds_initializers = [];
    let _selectedIds_extraInitializers = [];
    let _toolbarVisible_decorators;
    let _toolbarVisible_initializers = [];
    let _toolbarVisible_extraInitializers = [];
    var EdgelessElementToolbarWidget = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __dragging_decorators = [state()];
            __registeredEntries_decorators = [state()];
            _enableNoteSlicer_decorators = [property({ attribute: false })];
            _selectedIds_decorators = [state({
                    hasChanged: (value, oldValue) => {
                        if (value.length !== oldValue?.length) {
                            return true;
                        }
                        return value.some((id, index) => id !== oldValue[index]);
                    },
                })];
            _toolbarVisible_decorators = [state()];
            __esDecorate(this, null, __dragging_decorators, { kind: "accessor", name: "_dragging", static: false, private: false, access: { has: obj => "_dragging" in obj, get: obj => obj._dragging, set: (obj, value) => { obj._dragging = value; } }, metadata: _metadata }, __dragging_initializers, __dragging_extraInitializers);
            __esDecorate(this, null, __registeredEntries_decorators, { kind: "accessor", name: "_registeredEntries", static: false, private: false, access: { has: obj => "_registeredEntries" in obj, get: obj => obj._registeredEntries, set: (obj, value) => { obj._registeredEntries = value; } }, metadata: _metadata }, __registeredEntries_initializers, __registeredEntries_extraInitializers);
            __esDecorate(this, null, _enableNoteSlicer_decorators, { kind: "accessor", name: "enableNoteSlicer", static: false, private: false, access: { has: obj => "enableNoteSlicer" in obj, get: obj => obj.enableNoteSlicer, set: (obj, value) => { obj.enableNoteSlicer = value; } }, metadata: _metadata }, _enableNoteSlicer_initializers, _enableNoteSlicer_extraInitializers);
            __esDecorate(this, null, _selectedIds_decorators, { kind: "accessor", name: "selectedIds", static: false, private: false, access: { has: obj => "selectedIds" in obj, get: obj => obj.selectedIds, set: (obj, value) => { obj.selectedIds = value; } }, metadata: _metadata }, _selectedIds_initializers, _selectedIds_extraInitializers);
            __esDecorate(this, null, _toolbarVisible_decorators, { kind: "accessor", name: "toolbarVisible", static: false, private: false, access: { has: obj => "toolbarVisible" in obj, get: obj => obj.toolbarVisible, set: (obj, value) => { obj.toolbarVisible = value; } }, metadata: _metadata }, _toolbarVisible_initializers, _toolbarVisible_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessElementToolbarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      z-index: 3;
      transform: translateZ(0);
      will-change: transform;
      -webkit-user-select: none;
      user-select: none;
    }
  `; }
        get edgeless() {
            return this.block;
        }
        get selection() {
            return this.edgeless.service.selection;
        }
        get slots() {
            return this.edgeless.slots;
        }
        get surface() {
            return this.edgeless.surface;
        }
        _groupSelected() {
            const result = groupBy(this.selection.selectedElements, model => {
                if (isNoteBlock(model)) {
                    return 'note';
                }
                else if (isFrameBlock(model)) {
                    return 'frame';
                }
                else if (isImageBlock(model)) {
                    return 'image';
                }
                else if (isAttachmentBlock(model)) {
                    return 'attachment';
                }
                else if (isBookmarkBlock(model) || isEmbeddedBlock(model)) {
                    return 'embedCard';
                }
                else if (isEdgelessTextBlock(model)) {
                    return 'edgelessText';
                }
                return model.type;
            });
            return result;
        }
        _recalculatePosition() {
            const { selection, viewport } = this.edgeless.service;
            const elements = selection.selectedElements;
            if (elements.length === 0) {
                this.style.transform = 'translate3d(0, 0, 0)';
                return;
            }
            const bound = edgelessElementsBound(elements);
            const { width, height } = viewport;
            const [x, y] = viewport.toViewCoord(bound.x, bound.y);
            let left = x;
            let top = y;
            let offset = 37 + 12;
            // frame, group, shape
            let hasFrame = false;
            let hasGroup = false;
            if ((hasFrame = elements.some(ele => isFrameBlock(ele))) ||
                (hasGroup = elements.some(ele => ele instanceof GroupElementModel))) {
                offset += 16 + 4;
                if (hasFrame) {
                    offset += 8;
                }
            }
            else if (elements.length === 1 &&
                elements[0] instanceof ShapeElementModel) {
                offset += 22 + 4;
            }
            top = y - offset;
            if (top < 0) {
                top = y + bound.h * viewport.zoom + offset - 37;
                if (hasFrame || hasGroup) {
                    top -= 16 + 4;
                    if (hasFrame) {
                        top -= 8;
                    }
                }
            }
            requestConnectedFrame(() => {
                const rect = this.getBoundingClientRect();
                left = CommonUtils.clamp(x, 10, width - rect.width - 10);
                top = CommonUtils.clamp(top, 10, height - rect.height - 150);
                this.style.transform = `translate3d(${left}px, ${top}px, 0)`;
            }, this);
        }
        _renderQuickConnectButton() {
            return [
                html `
        <editor-icon-button
          aria-label="Draw connector"
          .tooltip=${'Draw connector'}
          .activeMode=${'background'}
          @click=${this._quickConnect}
        >
          ${ConnectorCWithArrowIcon}
        </editor-icon-button>
      `,
            ];
        }
        firstUpdated() {
            const { _disposables, edgeless } = this;
            this.moreGroups = getMoreMenuConfig(this.std).configure(this.moreGroups);
            _disposables.add(edgeless.service.viewport.viewportUpdated.on(() => {
                this._recalculatePosition();
            }));
            _disposables.add(this.selection.slots.updated.on(() => {
                if (this.selection.selectedIds.length === 0 ||
                    this.selection.editing ||
                    this.selection.inoperable) {
                    this.toolbarVisible = false;
                }
                else {
                    this.selectedIds = this.selection.selectedIds;
                    this._recalculatePosition();
                    this.toolbarVisible = true;
                }
            }));
            pickValues(this.edgeless.service.surface, [
                'elementAdded',
                'elementUpdated',
            ]).forEach(slot => _disposables.add(slot.on(this._updateOnSelectedChange)));
            _disposables.add(this.doc.slots.blockUpdated.on(this._updateOnSelectedChange));
            _disposables.add(edgeless.dispatcher.add('dragStart', () => {
                this._dragging = true;
            }));
            _disposables.add(edgeless.dispatcher.add('dragEnd', () => {
                this._dragging = false;
                this._recalculatePosition();
            }));
            _disposables.add(edgeless.slots.elementResizeStart.on(() => {
                this._dragging = true;
            }));
            _disposables.add(edgeless.slots.elementResizeEnd.on(() => {
                this._dragging = false;
                this._recalculatePosition();
            }));
            _disposables.add(edgeless.slots.readonlyUpdated.on(() => this.requestUpdate()));
            this.updateComplete
                .then(() => {
                _disposables.add(ThemeObserver.subscribe(() => this.requestUpdate()));
            })
                .catch(console.error);
        }
        registerEntry(entry) {
            this._registeredEntries.push(entry);
        }
        render() {
            if (this.doc.readonly || this._dragging || !this.toolbarVisible) {
                return nothing;
            }
            const groupedSelected = this._groupSelected();
            const { edgeless, selection } = this;
            const { shape, brush, connector, note, text, frame, group, embedCard, attachment, image, edgelessText, mindmap: mindmaps, } = groupedSelected;
            const { selectedElements } = this.selection;
            const selectedAtLeastTwoTypes = atLeastNMatches(Object.values(groupedSelected), e => !!e.length, 2);
            const quickConnectButton = selectedElements.length === 1 && !connector?.length
                ? this._renderQuickConnectButton()
                : undefined;
            const generalButtons = selectedElements.length !== connector?.length
                ? [
                    renderAddFrameButton(edgeless, selectedElements),
                    renderAddGroupButton(edgeless, selectedElements),
                    renderAlignButton(edgeless, selectedElements),
                ]
                : [];
            const buttons = selectedAtLeastTwoTypes
                ? generalButtons
                : [
                    ...generalButtons,
                    renderMindmapButton(edgeless, mindmaps),
                    renderMindmapButton(edgeless, shape),
                    renderChangeShapeButton(edgeless, shape),
                    renderChangeBrushButton(edgeless, brush),
                    renderConnectorButton(edgeless, connector),
                    renderNoteButton(edgeless, note, quickConnectButton),
                    renderChangeTextButton(edgeless, text),
                    renderChangeEdgelessTextButton(edgeless, edgelessText),
                    renderFrameButton(edgeless, frame),
                    renderGroupButton(edgeless, group),
                    renderEmbedButton(edgeless, embedCard, quickConnectButton),
                    renderAttachmentButton(edgeless, attachment),
                    renderChangeImageButton(edgeless, image),
                ];
            if (selectedElements.length === 1) {
                if (selection.firstElement.group instanceof GroupElementModel) {
                    buttons.unshift(renderReleaseFromGroupButton(this.edgeless));
                }
                if (!connector?.length) {
                    buttons.push(quickConnectButton?.pop() ?? nothing);
                }
            }
            this._registeredEntries
                .filter(entry => entry.when(selectedElements))
                .map(entry => entry.render(this.edgeless))
                .forEach(entry => entry && buttons.unshift(entry));
            buttons.push(html `
      <edgeless-more-button
        .elements=${selectedElements}
        .edgeless=${edgeless}
        .groups=${this.moreGroups}
        .vertical=${true}
      ></edgeless-more-button>
    `);
            return html `
      <editor-toolbar>
        ${join(buttons.filter(b => b !== nothing), renderToolbarSeparator)}
      </editor-toolbar>
    `;
        }
        #_dragging_accessor_storage;
        get _dragging() { return this.#_dragging_accessor_storage; }
        set _dragging(value) { this.#_dragging_accessor_storage = value; }
        #_registeredEntries_accessor_storage;
        get _registeredEntries() { return this.#_registeredEntries_accessor_storage; }
        set _registeredEntries(value) { this.#_registeredEntries_accessor_storage = value; }
        #enableNoteSlicer_accessor_storage;
        get enableNoteSlicer() { return this.#enableNoteSlicer_accessor_storage; }
        set enableNoteSlicer(value) { this.#enableNoteSlicer_accessor_storage = value; }
        #selectedIds_accessor_storage;
        get selectedIds() { return this.#selectedIds_accessor_storage; }
        set selectedIds(value) { this.#selectedIds_accessor_storage = value; }
        #toolbarVisible_accessor_storage;
        get toolbarVisible() { return this.#toolbarVisible_accessor_storage; }
        set toolbarVisible(value) { this.#toolbarVisible_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._quickConnect = ({ x, y }) => {
                const element = this.selection.selectedElements[0];
                const point = this.edgeless.service.viewport.toViewCoordFromClientCoord([
                    x,
                    y,
                ]);
                this.edgeless.doc.captureSync();
                this.edgeless.tools.setEdgelessTool({
                    type: 'connector',
                    mode: ConnectorMode.Curve,
                });
                const ctc = this.edgeless.tools.controllers['connector'];
                ctc.quickConnect(point, element);
            };
            this._updateOnSelectedChange = (element) => {
                const id = typeof element === 'string' ? element : element.id;
                if (this.isConnected && !this._dragging && this.selection.has(id)) {
                    this._recalculatePosition();
                    this.requestUpdate();
                }
            };
            /*
             * Caches the more menu items.
             * Currently only supports configuring more menu.
             */
            this.moreGroups = cloneGroups(BUILT_IN_GROUPS);
            this.#_dragging_accessor_storage = __runInitializers(this, __dragging_initializers, false);
            this.#_registeredEntries_accessor_storage = (__runInitializers(this, __dragging_extraInitializers), __runInitializers(this, __registeredEntries_initializers, []));
            this.#enableNoteSlicer_accessor_storage = (__runInitializers(this, __registeredEntries_extraInitializers), __runInitializers(this, _enableNoteSlicer_initializers, void 0));
            this.#selectedIds_accessor_storage = (__runInitializers(this, _enableNoteSlicer_extraInitializers), __runInitializers(this, _selectedIds_initializers, []));
            this.#toolbarVisible_accessor_storage = (__runInitializers(this, _selectedIds_extraInitializers), __runInitializers(this, _toolbarVisible_initializers, false));
            __runInitializers(this, _toolbarVisible_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessElementToolbarWidget = _classThis;
})();
export { EdgelessElementToolbarWidget };
//# sourceMappingURL=index.js.map