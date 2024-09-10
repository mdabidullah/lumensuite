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
import { popFilterableSimpleMenu, } from '@blocksuite/affine-components/context-menu';
import { ShadowlessElement, SignalWatcher, WithDisposable, } from '@blocksuite/block-std';
import { ArrowDownSmallIcon } from '@blocksuite/icons/lit';
import { Text } from '@blocksuite/store';
import { computed, signal } from '@lit-labs/preact-signals';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { statsFunctions } from '../../../core/common/stats/index.js';
import { typesystem } from '../../../core/logical/typesystem.js';
import { DEFAULT_COLUMN_MIN_WIDTH } from '../consts.js';
const styles = css `
  .stats-cell {
    cursor: pointer;
    transition: opacity 230ms ease;
    font-size: 12px;
    color: var(--affine-text-secondary-color);
    display: flex;
    opacity: 0;
    min-width: ${DEFAULT_COLUMN_MIN_WIDTH}px;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
  }

  .affine-database-column-stats:hover .stats-cell {
    opacity: 1;
  }

  .stats-cell:hover {
    background-color: var(--affine-hover-color);
    cursor: pointer;
  }

  .stats-cell[calculated='true'] {
    opacity: 1;
  }

  .stats-cell .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    margin-inline: 5px;
  }

  .label {
    text-transform: uppercase;
    color: var(--affine-text-secondary-color);
  }

  .value {
    color: var(--affine-text-primary-color);
  }
`;
let DatabaseColumnStatsCell = (() => {
    let _classDecorators = [customElement('affine-database-column-stats-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(ShadowlessElement));
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _group_decorators;
    let _group_initializers = [];
    let _group_extraInitializers = [];
    var DatabaseColumnStatsCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _column_decorators = [property({ attribute: false })];
            _group_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _group_decorators, { kind: "accessor", name: "group", static: false, private: false, access: { has: obj => "group" in obj, get: obj => obj.group, set: (obj, value) => { obj.group = value; } }, metadata: _metadata }, _group_initializers, _group_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseColumnStatsCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'click', this.openMenu);
            this.disposables.add(this.cellValues$.subscribe(values => {
                const map = new Map();
                values.forEach(value => {
                    if (value instanceof Text) {
                        const unsub = this.subscriptionMap.get(value);
                        if (unsub) {
                            map.set(value, unsub);
                            this.subscriptionMap.delete(value);
                        }
                        else {
                            const f = () => {
                                this.values$.value = [...this.cellValues$.value];
                            };
                            value.yText.observe(f);
                            map.set(value, () => {
                                value.yText.unobserve(f);
                            });
                        }
                    }
                });
                this.subscriptionMap.forEach(unsub => {
                    unsub();
                });
                this.subscriptionMap = map;
                this.values$.value = this.cellValues$.value;
            }));
            this.disposables.add(() => {
                this.subscriptionMap.forEach(unsub => {
                    unsub();
                });
            });
        }
        render() {
            const style = {
                width: `${this.column.width$.value}px`,
            };
            return html ` <div
      calculated="${!!this.column.statCalcOp$.value}"
      style="${styleMap(style)}"
      class="stats-cell"
    >
      <div class="content">
        ${!this.statsResult$.value
                ? html `Calculate ${ArrowDownSmallIcon()}`
                : html `
              <span class="label">${this.statsResult$.value.name}</span>
              <span class="value">${this.statsResult$.value.value} </span>
            `}
      </div>
    </div>`;
        }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #group_accessor_storage;
        get group() { return this.#group_accessor_storage; }
        set group(value) { this.#group_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this.cellValues$ = computed(() => {
                if (this.group) {
                    return this.group.rows.map(id => {
                        return this.column.getValue(id);
                    });
                }
                return this.column.cells$.value.map(cell => cell.value$.value);
            });
            this.groups$ = computed(() => {
                const groups = {};
                statsFunctions.forEach(func => {
                    if (!typesystem.isSubtype(func.dataType, this.column.dataType$.value)) {
                        return;
                    }
                    if (!groups[func.group]) {
                        groups[func.group] = {};
                    }
                    const oldFunc = groups[func.group][func.type];
                    if (!oldFunc || typesystem.isSubtype(oldFunc.dataType, func.dataType)) {
                        if (!func.impl) {
                            delete groups[func.group][func.type];
                        }
                        else {
                            groups[func.group][func.type] = func;
                        }
                    }
                });
                return groups;
            });
            this.openMenu = (ev) => {
                const menus = Object.entries(this.groups$.value).map(([group, funcs]) => {
                    return {
                        type: 'sub-menu',
                        name: group,
                        options: {
                            input: { search: true },
                            items: Object.values(funcs).map(func => {
                                return {
                                    type: 'action',
                                    isSelected: func.type === this.column.statCalcOp$.value,
                                    name: func.menuName ?? func.type,
                                    select: () => {
                                        this.column.updateStatCalcOp(func.type);
                                    },
                                };
                            }),
                        },
                    };
                });
                popFilterableSimpleMenu(ev.target, [
                    {
                        type: 'action',
                        isSelected: !this.column.statCalcOp$.value,
                        name: 'None',
                        select: () => {
                            this.column.updateStatCalcOp();
                        },
                    },
                    ...menus,
                ]);
            };
            this.statsFunc$ = computed(() => {
                return Object.values(this.groups$.value)
                    .flatMap(group => Object.values(group))
                    .find(func => func.type === this.column.statCalcOp$.value);
            });
            this.statsResult$ = computed(() => {
                const meta = this.column.view.columnGetMeta(this.column.type$.value);
                if (!meta) {
                    return null;
                }
                const func = this.statsFunc$.value;
                if (!func) {
                    return null;
                }
                return {
                    name: func.displayName,
                    value: func.impl?.(this.values$.value, { meta }) ?? '',
                };
            });
            this.subscriptionMap = new Map();
            this.values$ = signal([]);
            this.#column_accessor_storage = __runInitializers(this, _column_initializers, void 0);
            this.#group_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _group_initializers, undefined));
            __runInitializers(this, _group_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseColumnStatsCell = _classThis;
})();
export { DatabaseColumnStatsCell };
//# sourceMappingURL=column-stats-column.js.map