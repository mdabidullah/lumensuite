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
import { popMenu } from '@blocksuite/affine-components/context-menu';
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import './card.js';
const styles = css `
  affine-data-view-kanban-header {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }

  .select-group {
    border-radius: 8px;
    padding: 4px 8px;
    cursor: pointer;
  }

  .select-group:hover {
    background-color: var(--affine-hover-color);
  }
`;
let KanbanHeader = (() => {
    let _classDecorators = [customElement('affine-data-view-kanban-header')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    var KanbanHeader = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            KanbanHeader = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        render() {
            return html `
      <div></div>
      <div>
        <div class="select-group" @click="${this.clickGroup}">Group</div>
      </div>
    `;
        }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.clickGroup = (e) => {
                popMenu(e.target, {
                    options: {
                        input: {
                            search: true,
                        },
                        items: this.view.columnManagerList$.value
                            .filter(column => column.id !== this.view.view?.groupBy?.columnId)
                            .map(column => {
                            return {
                                type: 'action',
                                name: column.name$.value,
                                select: () => {
                                    this.view.changeGroup(column.id);
                                },
                            };
                        }),
                    },
                });
            };
            this.#view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
            __runInitializers(this, _view_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return KanbanHeader = _classThis;
})();
export { KanbanHeader };
//# sourceMappingURL=header.js.map