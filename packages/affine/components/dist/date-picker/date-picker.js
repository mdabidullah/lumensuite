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
import { WithDisposable } from '@lumensuite/block-std';
import { isSameDay, isSameMonth, isToday } from 'date-fns';
import { html, LitElement, nothing, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { arrowLeftIcon } from './icons.js';
import { datePickerStyle } from './style.js';
import { clamp, getMonthMatrix, toDate } from './utils.js';
const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
/**
 * Date picker
 */
let DatePicker = (() => {
    let _classDecorators = [customElement('date-picker')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __matrix_decorators;
    let __matrix_initializers = [];
    let __matrix_extraInitializers = [];
    let __mode_decorators;
    let __mode_initializers = [];
    let __mode_extraInitializers = [];
    let __monthCursor_decorators;
    let __monthCursor_initializers = [];
    let __monthCursor_extraInitializers = [];
    let __monthPickYearCursor_decorators;
    let __monthPickYearCursor_initializers = [];
    let __monthPickYearCursor_extraInitializers = [];
    let __yearCursor_decorators;
    let __yearCursor_initializers = [];
    let __yearCursor_extraInitializers = [];
    let __yearMatrix_decorators;
    let __yearMatrix_initializers = [];
    let __yearMatrix_extraInitializers = [];
    let _gapH_decorators;
    let _gapH_initializers = [];
    let _gapH_extraInitializers = [];
    let _gapV_decorators;
    let _gapV_initializers = [];
    let _gapV_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    let _onEscape_decorators;
    let _onEscape_initializers = [];
    let _onEscape_extraInitializers = [];
    let _padding_decorators;
    let _padding_initializers = [];
    let _padding_extraInitializers = [];
    let _size_decorators;
    let _size_initializers = [];
    let _size_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    var DatePicker = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __matrix_decorators = [property({ attribute: false })];
            __mode_decorators = [property({ attribute: false })];
            __monthCursor_decorators = [property({ attribute: false })];
            __monthPickYearCursor_decorators = [property({ attribute: false })];
            __yearCursor_decorators = [property({ attribute: false })];
            __yearMatrix_decorators = [property({ attribute: false })];
            _gapH_decorators = [property({ type: Number })];
            _gapV_decorators = [property({ type: Number })];
            _onChange_decorators = [property({ attribute: false })];
            _onEscape_decorators = [property({ attribute: false })];
            _padding_decorators = [property({ type: Number })];
            _size_decorators = [property({ type: Number })];
            _value_decorators = [property({ type: Number })];
            __esDecorate(this, null, __matrix_decorators, { kind: "accessor", name: "_matrix", static: false, private: false, access: { has: obj => "_matrix" in obj, get: obj => obj._matrix, set: (obj, value) => { obj._matrix = value; } }, metadata: _metadata }, __matrix_initializers, __matrix_extraInitializers);
            __esDecorate(this, null, __mode_decorators, { kind: "accessor", name: "_mode", static: false, private: false, access: { has: obj => "_mode" in obj, get: obj => obj._mode, set: (obj, value) => { obj._mode = value; } }, metadata: _metadata }, __mode_initializers, __mode_extraInitializers);
            __esDecorate(this, null, __monthCursor_decorators, { kind: "accessor", name: "_monthCursor", static: false, private: false, access: { has: obj => "_monthCursor" in obj, get: obj => obj._monthCursor, set: (obj, value) => { obj._monthCursor = value; } }, metadata: _metadata }, __monthCursor_initializers, __monthCursor_extraInitializers);
            __esDecorate(this, null, __monthPickYearCursor_decorators, { kind: "accessor", name: "_monthPickYearCursor", static: false, private: false, access: { has: obj => "_monthPickYearCursor" in obj, get: obj => obj._monthPickYearCursor, set: (obj, value) => { obj._monthPickYearCursor = value; } }, metadata: _metadata }, __monthPickYearCursor_initializers, __monthPickYearCursor_extraInitializers);
            __esDecorate(this, null, __yearCursor_decorators, { kind: "accessor", name: "_yearCursor", static: false, private: false, access: { has: obj => "_yearCursor" in obj, get: obj => obj._yearCursor, set: (obj, value) => { obj._yearCursor = value; } }, metadata: _metadata }, __yearCursor_initializers, __yearCursor_extraInitializers);
            __esDecorate(this, null, __yearMatrix_decorators, { kind: "accessor", name: "_yearMatrix", static: false, private: false, access: { has: obj => "_yearMatrix" in obj, get: obj => obj._yearMatrix, set: (obj, value) => { obj._yearMatrix = value; } }, metadata: _metadata }, __yearMatrix_initializers, __yearMatrix_extraInitializers);
            __esDecorate(this, null, _gapH_decorators, { kind: "accessor", name: "gapH", static: false, private: false, access: { has: obj => "gapH" in obj, get: obj => obj.gapH, set: (obj, value) => { obj.gapH = value; } }, metadata: _metadata }, _gapH_initializers, _gapH_extraInitializers);
            __esDecorate(this, null, _gapV_decorators, { kind: "accessor", name: "gapV", static: false, private: false, access: { has: obj => "gapV" in obj, get: obj => obj.gapV, set: (obj, value) => { obj.gapV = value; } }, metadata: _metadata }, _gapV_initializers, _gapV_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            __esDecorate(this, null, _onEscape_decorators, { kind: "accessor", name: "onEscape", static: false, private: false, access: { has: obj => "onEscape" in obj, get: obj => obj.onEscape, set: (obj, value) => { obj.onEscape = value; } }, metadata: _metadata }, _onEscape_initializers, _onEscape_extraInitializers);
            __esDecorate(this, null, _padding_decorators, { kind: "accessor", name: "padding", static: false, private: false, access: { has: obj => "padding" in obj, get: obj => obj.padding, set: (obj, value) => { obj.padding = value; } }, metadata: _metadata }, _padding_initializers, _padding_extraInitializers);
            __esDecorate(this, null, _size_decorators, { kind: "accessor", name: "size", static: false, private: false, access: { has: obj => "size" in obj, get: obj => obj.size, set: (obj, value) => { obj.size = value; } }, metadata: _metadata }, _size_initializers, _size_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatePicker = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = datePickerStyle; }
        get _cardStyle() {
            return {
                '--cell-size': `${this.size}px`,
                '--gap-h': `${this.gapH}px`,
                '--gap-v': `${this.gapV}px`,
                'min-width': `${this.cardWidth}px`,
                'min-height': `${this.cardHeight}px`,
                padding: `${this.padding}px`,
            };
        }
        get cardHeight() {
            const rowNum = 7;
            return this.size * rowNum + this.padding * 2 + this.gapV * (rowNum - 1) - 2;
        }
        get cardWidth() {
            const colNum = 7;
            return this.size * colNum + this.padding * 2 + this.gapH * (colNum - 1);
        }
        get date() {
            return this._cursor.getDate();
        }
        get day() {
            return this._cursor.getDay();
        }
        get dayLabel() {
            return days[this.day];
        }
        get minHeight() {
            const rowNum = 8;
            return this.size * rowNum + this.padding * 2 + this.gapV * (rowNum - 1) - 2;
        }
        get month() {
            return this._cursor.getMonth();
        }
        get monthLabel() {
            return months[this.month];
        }
        get year() {
            return this._cursor.getFullYear();
        }
        get yearLabel() {
            return this.year;
        }
        /** Cell */
        _cellRenderer(cell) {
            const classes = classMap({
                interactive: true,
                'date-cell': true,
                'date-cell--today': cell.isToday,
                'date-cell--not-curr-month': cell.notCurrentMonth,
                'date-cell--selected': !!cell.selected,
            });
            const dateRaw = `${cell.date.getFullYear()}-${cell.date.getMonth()}-${cell.date.getDate()}(${cell.date.getDay()})`;
            return html `<button
      tabindex=${cell.tabIndex ?? -1}
      aria-label=${dateRaw}
      data-date=${dateRaw}
      class=${classes}
      @click=${() => {
                this._onChange(cell.date);
            }}
    >
      ${cell.label}
    </button>`;
        }
        _dateContent() {
            return html ` <div class="date-picker-header">
        <div class="date-picker-header__buttons">
          <button
            class="date-picker-header__date interactive"
            @click=${() => this.toggleMonthSelector()}
          >
            <div>${this.monthLabel}</div>
          </button>

          <button
            class="date-picker-header__date interactive"
            @click=${() => this.toggleYearSelector()}
          >
            <div>${this.yearLabel}</div>
          </button>
        </div>

        ${this._navAction(() => this._moveMonth(-1), () => this._moveMonth(1), html `<button
            tabindex="0"
            aria-label="today"
            class="action-label interactive today"
            @click=${() => {
                this._onChange(new Date());
            }}
          >
            <span>TODAY</span>
          </button>`)}
      </div>
      ${this._dayHeaderRenderer()}
      <div class="date-picker-weeks">
        ${this._matrix.map(week => html `<div class="date-picker-week">
              ${week.map(cell => this._cellRenderer(cell))}
            </div>`)}
      </div>`;
        }
        /** Week header */
        _dayHeaderRenderer() {
            return html `<div class="days-header">
      ${days.map(day => html `<div class="date-cell">${day}</div>`)}
    </div>`;
        }
        _getMatrix() {
            this._matrix = getMonthMatrix(this._cursor).map(row => {
                return row.map(date => {
                    const tabIndex = isSameDay(date, this._cursor) ? 0 : -1;
                    return {
                        date,
                        label: date.getDate().toString(),
                        isToday: isToday(date),
                        notCurrentMonth: !isSameMonth(date, this._cursor),
                        selected: this.value ? isSameDay(date, toDate(this.value)) : false,
                        tabIndex,
                    };
                });
            });
        }
        _getYearMatrix() {
            // every decade has 12 years
            const no = Math.floor((this._yearCursor - this._minYear) / 12);
            const decade = no * 12;
            const start = this._minYear + decade;
            const end = start + 12;
            this._yearMatrix = Array.from({ length: end - start }, (_, i) => start + i).filter(v => v >= this._minYear && v <= this._maxYear);
        }
        _modeDecade(offset) {
            this._yearCursor = clamp(this._minYear, this._maxYear, this._yearCursor + offset);
            this._getYearMatrix();
        }
        _monthContent() {
            return html ` <div class="date-picker-header">
        <button
          class="date-picker-header__date interactive"
          @click=${() => this.toggleMonthSelector()}
        >
          <div>${this._monthPickYearCursor}</div>
        </button>

        ${this._navAction({
                action: () => this._monthPickYearCursor--,
                disable: this._monthPickYearCursor <= this._minYear,
            }, {
                action: () => this._monthPickYearCursor++,
                disable: this._monthPickYearCursor >= this._maxYear,
            })}
      </div>
      <div class="date-picker-month">
        ${months.map((month, index) => {
                const isActive = this.value
                    ? isSameMonth(this.value, new Date(this._monthPickYearCursor, index, 1))
                    : false;
                const classes = classMap({
                    'month-cell': true,
                    interactive: true,
                    active: isActive,
                });
                return html `<button
            tabindex=${this._monthCursor === index ? 0 : -1}
            aria-label=${month}
            class=${classes}
            @click=${() => {
                    this._cursor.setMonth(index);
                    this._cursor.setFullYear(this._monthPickYearCursor);
                    this._mode = 'date';
                    this._getMatrix();
                }}
          >
            ${month}
          </button>`;
            })}
      </div>`;
        }
        _moveMonth(offset) {
            this._cursor.setMonth(this._cursor.getMonth() + offset);
            this._getMatrix();
        }
        /** Actions */
        _navAction(prev, curr, slot) {
            const onPrev = typeof prev === 'function' ? prev : prev.action;
            const onNext = typeof curr === 'function' ? curr : curr.action;
            const prevDisable = typeof prev === 'function' ? false : prev.disable;
            const nextDisable = typeof curr === 'function' ? false : curr.disable;
            const classes = classMap({
                'date-picker-header__action': true,
                'with-slot': !!slot,
            });
            return html `<div class=${classes}>
      <button
        aria-label="previous month"
        class="date-picker-small-action interactive left"
        @click=${onPrev}
        ?disabled=${prevDisable}
      >
        ${arrowLeftIcon}
      </button>
      ${slot ?? nothing}
      <button
        aria-label="next month"
        class="date-picker-small-action interactive right"
        @click=${onNext}
        ?disabled=${nextDisable}
      >
        ${arrowLeftIcon}
      </button>
    </div>`;
        }
        _onChange(date, emit = true) {
            this._cursor = date;
            this.value = date.getTime();
            this._getMatrix();
            emit && this.onChange?.(date);
        }
        _switchMode(map) {
            return map[this._mode] ?? nothing;
        }
        _yearContent() {
            const startYear = this._yearMatrix[0];
            const endYear = this._yearMatrix[this._yearMatrix.length - 1];
            return html `<div class="date-picker-header">
        <button
          class="date-picker-header__date interactive"
          @click=${() => this.toggleYearSelector()}
        >
          <div>${startYear}-${endYear}</div>
        </button>
        ${this._navAction({
                action: () => this._modeDecade(-12),
                disable: startYear <= this._minYear,
            }, {
                action: () => this._modeDecade(12),
                disable: endYear >= this._maxYear,
            })}
      </div>
      <div class="date-picker-year">
        ${this._yearMatrix.map(year => {
                const isActive = year === this._cursor.getFullYear();
                const classes = classMap({
                    'year-cell': true,
                    interactive: true,
                    active: isActive,
                });
                return html `<button
            tabindex=${this._yearCursor === year ? 0 : -1}
            aria-label=${year}
            class=${classes}
            @click=${() => {
                    this._cursor.setFullYear(year);
                    this._mode = 'date';
                    this._getMatrix();
                }}
          >
            ${year}
          </button>`;
            })}
      </div>`;
        }
        closeMonthSelector() {
            this._mode = 'date';
        }
        closeYearSelector() {
            this._mode = 'date';
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.value)
                this._cursor = toDate(this.value);
            this._getMatrix();
        }
        firstUpdated() {
            this._disposables.addFromEvent(this, 'keydown', e => {
                e.stopPropagation();
                const directions = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
                if (directions.includes(e.key) && this.isDateCellFocused()) {
                    e.preventDefault();
                    if (e.key === 'ArrowLeft') {
                        this._cursor.setDate(this._cursor.getDate() - 1);
                    }
                    else if (e.key === 'ArrowRight') {
                        this._cursor.setDate(this._cursor.getDate() + 1);
                    }
                    else if (e.key === 'ArrowUp') {
                        this._cursor.setDate(this._cursor.getDate() - 7);
                    }
                    else if (e.key === 'ArrowDown') {
                        this._cursor.setDate(this._cursor.getDate() + 7);
                    }
                    this._getMatrix();
                    setTimeout(this.focusDateCell.bind(this));
                }
                if (directions.includes(e.key) && this.isMonthCellFocused()) {
                    e.preventDefault();
                    if (e.key === 'ArrowLeft') {
                        this._monthCursor = (this._monthCursor - 1 + 12) % 12;
                    }
                    else if (e.key === 'ArrowRight') {
                        this._monthCursor = (this._monthCursor + 1) % 12;
                    }
                    else if (e.key === 'ArrowUp') {
                        this._monthCursor = (this._monthCursor - 3 + 12) % 12;
                    }
                    else if (e.key === 'ArrowDown') {
                        this._monthCursor = (this._monthCursor + 3) % 12;
                    }
                    setTimeout(this.focusMonthCell.bind(this));
                }
                if (directions.includes(e.key) && this.isYearCellFocused()) {
                    e.preventDefault();
                    if (e.key === 'ArrowLeft') {
                        this._modeDecade(-1);
                    }
                    else if (e.key === 'ArrowRight') {
                        this._modeDecade(1);
                    }
                    else if (e.key === 'ArrowUp') {
                        this._modeDecade(-3);
                    }
                    else if (e.key === 'ArrowDown') {
                        this._modeDecade(3);
                    }
                    setTimeout(this.focusYearCell.bind(this));
                }
                if (e.key === 'Tab') {
                    setTimeout(() => {
                        const focused = this.shadowRoot?.activeElement;
                        const firstEl = this.shadowRoot?.querySelector('button');
                        // check if focus the last element, then focus the first element
                        if (!e.shiftKey && !focused)
                            firstEl?.focus();
                        // check if focused element is inside current date-picker
                        if (e.shiftKey && !this.shadowRoot?.contains(focused))
                            this.focusDateCell();
                    });
                }
                if (e.key === 'Escape') {
                    this.onEscape?.(toDate(this.value));
                }
            }, true);
        }
        /**
         * Focus on date-cell
         */
        focusDateCell() {
            const lastEl = this.shadowRoot?.querySelector('button.date-cell[tabindex="0"]');
            lastEl?.focus();
        }
        focusMonthCell() {
            const lastEl = this.shadowRoot?.querySelector('button.month-cell[tabindex="0"]');
            lastEl?.focus();
        }
        focusYearCell() {
            const lastEl = this.shadowRoot?.querySelector('button.year-cell[tabindex="0"]');
            lastEl?.focus();
        }
        /**
         * check if date-cell is focused
         * @returns
         */
        isDateCellFocused() {
            const focused = this.shadowRoot?.activeElement;
            return focused?.classList.contains('date-cell');
        }
        isMonthCellFocused() {
            const focused = this.shadowRoot?.activeElement;
            return focused?.classList.contains('month-cell');
        }
        isYearCellFocused() {
            const focused = this.shadowRoot?.activeElement;
            return focused?.classList.contains('year-cell');
        }
        openMonthSelector() {
            this._monthCursor = this.month;
            this._monthPickYearCursor = this.year;
            this._mode = 'month';
        }
        openYearSelector() {
            this._yearCursor = clamp(this._minYear, this._maxYear, this.year);
            this._mode = 'year';
            this._getYearMatrix();
        }
        render() {
            const classes = classMap({
                'date-picker': true,
                [`date-picker--mode-${this._mode}`]: true,
            });
            const wrapperStyle = styleMap({
                'min-height': `${this.minHeight}px`,
            });
            return html `<div style=${wrapperStyle} class="date-picker-height-wrapper">
      <div class=${classes} style=${styleMap(this._cardStyle)}>
        ${this._switchMode({
                date: this._dateContent(),
                month: this._monthContent(),
                year: this._yearContent(),
            })}
      </div>
    </div>`;
        }
        toggleMonthSelector() {
            if (this._mode === 'month')
                this.closeMonthSelector();
            else
                this.openMonthSelector();
        }
        toggleYearSelector() {
            if (this._mode === 'year')
                this.closeYearSelector();
            else
                this.openYearSelector();
        }
        updated(_changedProperties) {
            if (_changedProperties.has('value')) {
                // this._getMatrix();
                if (this.value)
                    this._onChange(toDate(this.value), false);
                else
                    this._getMatrix();
            }
        }
        #_matrix_accessor_storage;
        /** date matrix */
        get _matrix() { return this.#_matrix_accessor_storage; }
        set _matrix(value) { this.#_matrix_accessor_storage = value; }
        #_mode_accessor_storage;
        get _mode() { return this.#_mode_accessor_storage; }
        set _mode(value) { this.#_mode_accessor_storage = value; }
        #_monthCursor_accessor_storage;
        /** web-accessibility for month select */
        get _monthCursor() { return this.#_monthCursor_accessor_storage; }
        set _monthCursor(value) { this.#_monthCursor_accessor_storage = value; }
        #_monthPickYearCursor_accessor_storage;
        get _monthPickYearCursor() { return this.#_monthPickYearCursor_accessor_storage; }
        set _monthPickYearCursor(value) { this.#_monthPickYearCursor_accessor_storage = value; }
        #_yearCursor_accessor_storage;
        get _yearCursor() { return this.#_yearCursor_accessor_storage; }
        set _yearCursor(value) { this.#_yearCursor_accessor_storage = value; }
        #_yearMatrix_accessor_storage;
        get _yearMatrix() { return this.#_yearMatrix_accessor_storage; }
        set _yearMatrix(value) { this.#_yearMatrix_accessor_storage = value; }
        #gapH_accessor_storage;
        /** horizontal gap between cells in px */
        get gapH() { return this.#gapH_accessor_storage; }
        set gapH(value) { this.#gapH_accessor_storage = value; }
        #gapV_accessor_storage;
        /** vertical gap between cells in px */
        get gapV() { return this.#gapV_accessor_storage; }
        set gapV(value) { this.#gapV_accessor_storage = value; }
        #onChange_accessor_storage;
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        #onEscape_accessor_storage;
        get onEscape() { return this.#onEscape_accessor_storage; }
        set onEscape(value) { this.#onEscape_accessor_storage = value; }
        #padding_accessor_storage;
        /** card padding in px */
        get padding() { return this.#padding_accessor_storage; }
        set padding(value) { this.#padding_accessor_storage = value; }
        #size_accessor_storage;
        /** cell size in px */
        get size() { return this.#size_accessor_storage; }
        set size(value) { this.#size_accessor_storage = value; }
        #value_accessor_storage;
        /** Checked date timestamp */
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        constructor() {
            super(...arguments);
            /** current active month */
            this._cursor = new Date();
            this._maxYear = 2099;
            this._minYear = 1970;
            this.#_matrix_accessor_storage = __runInitializers(this, __matrix_initializers, []);
            this.#_mode_accessor_storage = (__runInitializers(this, __matrix_extraInitializers), __runInitializers(this, __mode_initializers, 'date'));
            this.#_monthCursor_accessor_storage = (__runInitializers(this, __mode_extraInitializers), __runInitializers(this, __monthCursor_initializers, 0));
            this.#_monthPickYearCursor_accessor_storage = (__runInitializers(this, __monthCursor_extraInitializers), __runInitializers(this, __monthPickYearCursor_initializers, 0));
            this.#_yearCursor_accessor_storage = (__runInitializers(this, __monthPickYearCursor_extraInitializers), __runInitializers(this, __yearCursor_initializers, 0));
            this.#_yearMatrix_accessor_storage = (__runInitializers(this, __yearCursor_extraInitializers), __runInitializers(this, __yearMatrix_initializers, []));
            this.#gapH_accessor_storage = (__runInitializers(this, __yearMatrix_extraInitializers), __runInitializers(this, _gapH_initializers, 10));
            this.#gapV_accessor_storage = (__runInitializers(this, _gapH_extraInitializers), __runInitializers(this, _gapV_initializers, 8));
            this.#onChange_accessor_storage = (__runInitializers(this, _gapV_extraInitializers), __runInitializers(this, _onChange_initializers, undefined));
            this.#onEscape_accessor_storage = (__runInitializers(this, _onChange_extraInitializers), __runInitializers(this, _onEscape_initializers, undefined));
            this.#padding_accessor_storage = (__runInitializers(this, _onEscape_extraInitializers), __runInitializers(this, _padding_initializers, 20));
            this.#size_accessor_storage = (__runInitializers(this, _padding_extraInitializers), __runInitializers(this, _size_initializers, 28));
            this.#value_accessor_storage = (__runInitializers(this, _size_extraInitializers), __runInitializers(this, _value_initializers, undefined));
            __runInitializers(this, _value_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatePicker = _classThis;
})();
export { DatePicker };
//# sourceMappingURL=date-picker.js.map