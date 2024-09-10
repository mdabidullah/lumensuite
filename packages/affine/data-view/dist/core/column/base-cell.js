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
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { computed } from '@lit-labs/preact-signals';
import { property } from 'lit/decorators.js';
let BaseCellRenderer = (() => {
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _cell_decorators;
    let _cell_initializers = [];
    let _cell_extraInitializers = [];
    let _isEditing_decorators;
    let _isEditing_initializers = [];
    let _isEditing_extraInitializers = [];
    let _selectCurrentCell_decorators;
    let _selectCurrentCell_initializers = [];
    let _selectCurrentCell_extraInitializers = [];
    return class BaseCellRenderer extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _cell_decorators = [property({ attribute: false })];
            _isEditing_decorators = [property({ attribute: false })];
            _selectCurrentCell_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _cell_decorators, { kind: "accessor", name: "cell", static: false, private: false, access: { has: obj => "cell" in obj, get: obj => obj.cell, set: (obj, value) => { obj.cell = value; } }, metadata: _metadata }, _cell_initializers, _cell_extraInitializers);
            __esDecorate(this, null, _isEditing_decorators, { kind: "accessor", name: "isEditing", static: false, private: false, access: { has: obj => "isEditing" in obj, get: obj => obj.isEditing, set: (obj, value) => { obj.isEditing = value; } }, metadata: _metadata }, _isEditing_initializers, _isEditing_extraInitializers);
            __esDecorate(this, null, _selectCurrentCell_decorators, { kind: "accessor", name: "selectCurrentCell", static: false, private: false, access: { has: obj => "selectCurrentCell" in obj, get: obj => obj.selectCurrentCell, set: (obj, value) => { obj.selectCurrentCell = value; } }, metadata: _metadata }, _selectCurrentCell_initializers, _selectCurrentCell_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get column() {
            return this.cell.column;
        }
        get readonly() {
            return this.readonly$.value;
        }
        get row() {
            return this.cell.row;
        }
        get value() {
            return this.value$.value;
        }
        get view() {
            return this.cell.view;
        }
        beforeEnterEditMode() {
            return true;
        }
        blurCell() {
            return true;
        }
        connectedCallback() {
            super.connectedCallback();
            this.style.width = '100%';
            this._disposables.addFromEvent(this, 'click', e => {
                if (this.isEditing) {
                    e.stopPropagation();
                }
            });
            this._disposables.addFromEvent(this, 'copy', e => {
                if (!this.isEditing)
                    return;
                e.stopPropagation();
                this.onCopy(e);
            });
            this._disposables.addFromEvent(this, 'cut', e => {
                if (!this.isEditing)
                    return;
                e.stopPropagation();
                this.onCut(e);
            });
            this._disposables.addFromEvent(this, 'paste', e => {
                if (!this.isEditing)
                    return;
                e.stopPropagation();
                this.onPaste(e);
            });
        }
        focusCell() {
            return true;
        }
        forceUpdate() {
            this.requestUpdate();
        }
        onChange(value) {
            this.cell.setValue(value);
        }
        onCopy(_e) { }
        onCut(_e) { }
        onEnterEditMode() {
            // do nothing
        }
        onExitEditMode() {
            // do nothing
        }
        onPaste(_e) { }
        #cell_accessor_storage;
        get cell() { return this.#cell_accessor_storage; }
        set cell(value) { this.#cell_accessor_storage = value; }
        #isEditing_accessor_storage;
        get isEditing() { return this.#isEditing_accessor_storage; }
        set isEditing(value) { this.#isEditing_accessor_storage = value; }
        #selectCurrentCell_accessor_storage;
        get selectCurrentCell() { return this.#selectCurrentCell_accessor_storage; }
        set selectCurrentCell(value) { this.#selectCurrentCell_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.readonly$ = computed(() => {
                return this.cell.column.readonly$.value;
            });
            this.value$ = computed(() => {
                return this.cell.value$.value;
            });
            this.#cell_accessor_storage = __runInitializers(this, _cell_initializers, void 0);
            this.#isEditing_accessor_storage = (__runInitializers(this, _cell_extraInitializers), __runInitializers(this, _isEditing_initializers, void 0));
            this.#selectCurrentCell_accessor_storage = (__runInitializers(this, _isEditing_extraInitializers), __runInitializers(this, _selectCurrentCell_initializers, void 0));
            __runInitializers(this, _selectCurrentCell_extraInitializers);
        }
    };
})();
export { BaseCellRenderer };
//# sourceMappingURL=base-cell.js.map