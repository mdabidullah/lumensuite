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
import { SignalWatcher, WithDisposable } from '@lumensuite/block-std';
import { BlocksUtils, NoteDisplayMode } from '@lumensuite/blocks';
import { Bound, DisposableGroup } from '@lumensuite/global/utils';
import { effect, signal } from '@lit-labs/preact-signals';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import '../card/outline-card.js';
import { startDragging } from '../utils/drag.js';
import { getHeadingBlocksFromDoc, getNotesFromDoc, isHeadingBlock, } from '../utils/query.js';
import { observeActiveHeadingDuringScroll, scrollToBlockWithHighlight, } from '../utils/scroll.js';
import './outline-notice.js';
const styles = css `
  .outline-panel-body-container {
    position: relative;
    display: flex;
    align-items: start;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 8px;
  }

  .panel-list {
    position: relative;
    width: 100%;
  }

  .panel-list .hidden-title {
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color: var(--affine-text-secondary-color);
    padding-left: 8px;
    height: 40px;
    box-sizing: border-box;
    padding: 6px 8px;
    margin-top: 8px;
  }

  .insert-indicator {
    height: 2px;
    border-radius: 1px;
    background-color: var(--affine-brand-color);
    border-radius: 1px;
    position: absolute;
    contain: layout size;
    width: 100%;
  }

  .no-note-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .note-placeholder {
    margin-top: 240px;
    align-self: center;
    width: 190px;
    height: 48px;
    color: var(--affine-text-secondary-color, #8e8d91);
    text-align: center;
    /* light/base */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;
export const AFFINE_OUTLINE_PANEL_BODY = 'affine-outline-panel-body';
let OutlinePanelBody = (() => {
    let _classDecorators = [customElement(AFFINE_OUTLINE_PANEL_BODY)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = SignalWatcher(WithDisposable(LitElement));
    let __dragging_decorators;
    let __dragging_initializers = [];
    let __dragging_extraInitializers = [];
    let __edgelessOnlyNotes_decorators;
    let __edgelessOnlyNotes_initializers = [];
    let __edgelessOnlyNotes_extraInitializers = [];
    let __pageVisibleNotes_decorators;
    let __pageVisibleNotes_initializers = [];
    let __pageVisibleNotes_extraInitializers = [];
    let __selected_decorators;
    let __selected_initializers = [];
    let __selected_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _domHost_decorators;
    let _domHost_initializers = [];
    let _domHost_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _enableNotesSorting_decorators;
    let _enableNotesSorting_initializers = [];
    let _enableNotesSorting_extraInitializers = [];
    let _fitPadding_decorators;
    let _fitPadding_initializers = [];
    let _fitPadding_extraInitializers = [];
    let _insertIndex_decorators;
    let _insertIndex_initializers = [];
    let _insertIndex_extraInitializers = [];
    let _noticeVisible_decorators;
    let _noticeVisible_initializers = [];
    let _noticeVisible_extraInitializers = [];
    let _OutlinePanelContainer_decorators;
    let _OutlinePanelContainer_initializers = [];
    let _OutlinePanelContainer_extraInitializers = [];
    let _panelListElement_decorators;
    let _panelListElement_initializers = [];
    let _panelListElement_extraInitializers = [];
    let _renderEdgelessOnlyNotes_decorators;
    let _renderEdgelessOnlyNotes_initializers = [];
    let _renderEdgelessOnlyNotes_extraInitializers = [];
    let _setNoticeVisibility_decorators;
    let _setNoticeVisibility_initializers = [];
    let _setNoticeVisibility_extraInitializers = [];
    let _showPreviewIcon_decorators;
    let _showPreviewIcon_initializers = [];
    let _showPreviewIcon_extraInitializers = [];
    let _toggleNotesSorting_decorators;
    let _toggleNotesSorting_initializers = [];
    let _toggleNotesSorting_extraInitializers = [];
    var OutlinePanelBody = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __dragging_decorators = [state()];
            __edgelessOnlyNotes_decorators = [state()];
            __pageVisibleNotes_decorators = [state()];
            __selected_decorators = [state()];
            _doc_decorators = [property({ attribute: false })];
            _domHost_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _editor_decorators = [property({ attribute: false })];
            _enableNotesSorting_decorators = [property({ attribute: false })];
            _fitPadding_decorators = [property({ attribute: false })];
            _insertIndex_decorators = [property({ attribute: false })];
            _noticeVisible_decorators = [property({ attribute: false })];
            _OutlinePanelContainer_decorators = [query('.outline-panel-body-container')];
            _panelListElement_decorators = [query('.panel-list')];
            _renderEdgelessOnlyNotes_decorators = [property({ attribute: false })];
            _setNoticeVisibility_decorators = [property({ attribute: false })];
            _showPreviewIcon_decorators = [property({ attribute: false })];
            _toggleNotesSorting_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __dragging_decorators, { kind: "accessor", name: "_dragging", static: false, private: false, access: { has: obj => "_dragging" in obj, get: obj => obj._dragging, set: (obj, value) => { obj._dragging = value; } }, metadata: _metadata }, __dragging_initializers, __dragging_extraInitializers);
            __esDecorate(this, null, __edgelessOnlyNotes_decorators, { kind: "accessor", name: "_edgelessOnlyNotes", static: false, private: false, access: { has: obj => "_edgelessOnlyNotes" in obj, get: obj => obj._edgelessOnlyNotes, set: (obj, value) => { obj._edgelessOnlyNotes = value; } }, metadata: _metadata }, __edgelessOnlyNotes_initializers, __edgelessOnlyNotes_extraInitializers);
            __esDecorate(this, null, __pageVisibleNotes_decorators, { kind: "accessor", name: "_pageVisibleNotes", static: false, private: false, access: { has: obj => "_pageVisibleNotes" in obj, get: obj => obj._pageVisibleNotes, set: (obj, value) => { obj._pageVisibleNotes = value; } }, metadata: _metadata }, __pageVisibleNotes_initializers, __pageVisibleNotes_extraInitializers);
            __esDecorate(this, null, __selected_decorators, { kind: "accessor", name: "_selected", static: false, private: false, access: { has: obj => "_selected" in obj, get: obj => obj._selected, set: (obj, value) => { obj._selected = value; } }, metadata: _metadata }, __selected_initializers, __selected_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _domHost_decorators, { kind: "accessor", name: "domHost", static: false, private: false, access: { has: obj => "domHost" in obj, get: obj => obj.domHost, set: (obj, value) => { obj.domHost = value; } }, metadata: _metadata }, _domHost_initializers, _domHost_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _enableNotesSorting_decorators, { kind: "accessor", name: "enableNotesSorting", static: false, private: false, access: { has: obj => "enableNotesSorting" in obj, get: obj => obj.enableNotesSorting, set: (obj, value) => { obj.enableNotesSorting = value; } }, metadata: _metadata }, _enableNotesSorting_initializers, _enableNotesSorting_extraInitializers);
            __esDecorate(this, null, _fitPadding_decorators, { kind: "accessor", name: "fitPadding", static: false, private: false, access: { has: obj => "fitPadding" in obj, get: obj => obj.fitPadding, set: (obj, value) => { obj.fitPadding = value; } }, metadata: _metadata }, _fitPadding_initializers, _fitPadding_extraInitializers);
            __esDecorate(this, null, _insertIndex_decorators, { kind: "accessor", name: "insertIndex", static: false, private: false, access: { has: obj => "insertIndex" in obj, get: obj => obj.insertIndex, set: (obj, value) => { obj.insertIndex = value; } }, metadata: _metadata }, _insertIndex_initializers, _insertIndex_extraInitializers);
            __esDecorate(this, null, _noticeVisible_decorators, { kind: "accessor", name: "noticeVisible", static: false, private: false, access: { has: obj => "noticeVisible" in obj, get: obj => obj.noticeVisible, set: (obj, value) => { obj.noticeVisible = value; } }, metadata: _metadata }, _noticeVisible_initializers, _noticeVisible_extraInitializers);
            __esDecorate(this, null, _OutlinePanelContainer_decorators, { kind: "accessor", name: "OutlinePanelContainer", static: false, private: false, access: { has: obj => "OutlinePanelContainer" in obj, get: obj => obj.OutlinePanelContainer, set: (obj, value) => { obj.OutlinePanelContainer = value; } }, metadata: _metadata }, _OutlinePanelContainer_initializers, _OutlinePanelContainer_extraInitializers);
            __esDecorate(this, null, _panelListElement_decorators, { kind: "accessor", name: "panelListElement", static: false, private: false, access: { has: obj => "panelListElement" in obj, get: obj => obj.panelListElement, set: (obj, value) => { obj.panelListElement = value; } }, metadata: _metadata }, _panelListElement_initializers, _panelListElement_extraInitializers);
            __esDecorate(this, null, _renderEdgelessOnlyNotes_decorators, { kind: "accessor", name: "renderEdgelessOnlyNotes", static: false, private: false, access: { has: obj => "renderEdgelessOnlyNotes" in obj, get: obj => obj.renderEdgelessOnlyNotes, set: (obj, value) => { obj.renderEdgelessOnlyNotes = value; } }, metadata: _metadata }, _renderEdgelessOnlyNotes_initializers, _renderEdgelessOnlyNotes_extraInitializers);
            __esDecorate(this, null, _setNoticeVisibility_decorators, { kind: "accessor", name: "setNoticeVisibility", static: false, private: false, access: { has: obj => "setNoticeVisibility" in obj, get: obj => obj.setNoticeVisibility, set: (obj, value) => { obj.setNoticeVisibility = value; } }, metadata: _metadata }, _setNoticeVisibility_initializers, _setNoticeVisibility_extraInitializers);
            __esDecorate(this, null, _showPreviewIcon_decorators, { kind: "accessor", name: "showPreviewIcon", static: false, private: false, access: { has: obj => "showPreviewIcon" in obj, get: obj => obj.showPreviewIcon, set: (obj, value) => { obj.showPreviewIcon = value; } }, metadata: _metadata }, _showPreviewIcon_initializers, _showPreviewIcon_extraInitializers);
            __esDecorate(this, null, _toggleNotesSorting_decorators, { kind: "accessor", name: "toggleNotesSorting", static: false, private: false, access: { has: obj => "toggleNotesSorting" in obj, get: obj => obj.toggleNotesSorting, set: (obj, value) => { obj.toggleNotesSorting = value; } }, metadata: _metadata }, _toggleNotesSorting_initializers, _toggleNotesSorting_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            OutlinePanelBody = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        get viewportPadding() {
            return this.fitPadding
                ? [0, 0, 0, 0].map((val, idx) => Number.isFinite(this.fitPadding[idx]) ? this.fitPadding[idx] : val)
                : [0, 0, 0, 0];
        }
        _clearDocDisposables() {
            this._docDisposables?.dispose();
            this._docDisposables = null;
        }
        /*
         * Click at blank area to clear selection
         */
        _clickHandler(e) {
            e.stopPropagation();
            // check if click at outline-card, if so, do nothing
            if (e.target.closest('outline-note-card') ||
                this._selected.length === 0) {
                return;
            }
            this._selected = [];
            this.edgeless?.service.selection.set({
                elements: this._selected,
                editing: false,
            });
        }
        _deSelectNoteInEdgelessMode(note) {
            if (!this._isEdgelessMode() || !this.edgeless)
                return;
            const { selection } = this.edgeless.service;
            if (!selection.has(note.id))
                return;
            const selectedIds = selection.selectedIds.filter(id => id !== note.id);
            selection.set({
                elements: selectedIds,
                editing: false,
            });
        }
        /*
         * Double click at blank area to disable notes sorting option
         */
        _doubleClickHandler(e) {
            e.stopPropagation();
            // check if click at outline-card, if so, do nothing
            if (e.target.closest('outline-note-card') ||
                !this.enableNotesSorting) {
                return;
            }
            this.toggleNotesSorting();
        }
        _drag() {
            if (!this._selected.length ||
                !this._pageVisibleNotes.length ||
                !this.doc.root)
                return;
            this._dragging = true;
            // cache the notes in case it is changed by other peers
            const children = this.doc.root.children.slice();
            const notes = this._pageVisibleNotes;
            const notesMap = this._pageVisibleNotes.reduce((map, note, index) => {
                map.set(note.note.id, {
                    ...note,
                    number: index + 1,
                });
                return map;
            }, new Map());
            const selected = this._selected.slice();
            startDragging({
                container: this,
                document: this.ownerDocument,
                host: this.domHost ?? this.ownerDocument,
                doc: this.doc,
                outlineListContainer: this.panelListElement,
                onDragEnd: insertIdx => {
                    this._dragging = false;
                    this.insertIndex = undefined;
                    if (insertIdx === undefined)
                        return;
                    this._moveNotes(insertIdx, selected, notesMap, notes, children);
                },
                onDragMove: (idx, indicatorTranslateY) => {
                    this.insertIndex = idx;
                    this._indicatorTranslateY = indicatorTranslateY ?? 0;
                },
            });
        }
        _EmptyPanel() {
            return html `<div class="no-note-container">
      <div class="note-placeholder">
        Use headings to create a table of contents.
      </div>
    </div>`;
        }
        _fitToElement(e) {
            const edgeless = this.edgeless;
            if (!edgeless)
                return;
            const { block } = e.detail;
            const bound = Bound.deserialize(block.xywh);
            edgeless.service.viewport.setViewportByBound(bound, this.viewportPadding, true);
        }
        // when display mode change to page only, we should de-select the note if it is selected in edgeless mode
        _handleDisplayModeChange(e) {
            const { note, newMode } = e.detail;
            const { displayMode: currentMode } = note;
            if (newMode === currentMode) {
                return;
            }
            this.doc.updateBlock(note, { displayMode: newMode });
            const noteParent = this.doc.getParent(note);
            if (noteParent === null) {
                console.error(`Failed to get parent of note(id:${note.id})`);
                return;
            }
            const noteParentChildNotes = noteParent.children.filter(block => BlocksUtils.matchFlavours(block, ['affine:note']));
            const noteParentLastNote = noteParentChildNotes[noteParentChildNotes.length - 1];
            // When the display mode of a note change from edgeless to page visible
            // We should move the note to the end of the note list
            if (currentMode === NoteDisplayMode.EdgelessOnly &&
                note !== noteParentLastNote) {
                this.doc.moveBlocks([note], noteParent, noteParentLastNote, false);
            }
            // When the display mode of a note changed to page only
            // We should check if the note is selected in edgeless mode
            // If so, we should de-select it
            if (newMode === NoteDisplayMode.DocOnly) {
                this._deSelectNoteInEdgelessMode(note);
            }
        }
        _isEdgelessMode() {
            return this.editor.mode === 'edgeless';
        }
        _moveNotes(index, selected, notesMap, notes, children) {
            if (!this._isEdgelessMode() || !children.length || !this.doc.root)
                return;
            const blocks = selected.map(id => notesMap.get(id).note);
            const draggingBlocks = new Set(blocks);
            const targetIndex = index === notes.length ? notes[index - 1].index + 1 : notes[index].index;
            const leftPart = children
                .slice(0, targetIndex)
                .filter(block => !draggingBlocks.has(block));
            const rightPart = children
                .slice(targetIndex)
                .filter(block => !draggingBlocks.has(block));
            const newChildren = [...leftPart, ...blocks, ...rightPart];
            this._changedFlag = true;
            this.doc.updateBlock(this.doc.root, {
                children: newChildren,
            });
        }
        _PanelList(withEdgelessOnlyNotes) {
            const selectedNotesSet = new Set(this._selected);
            return html `<div class="panel-list">
      ${this.insertIndex !== undefined
                ? html `<div
            class="insert-indicator"
            style=${`transform: translateY(${this._indicatorTranslateY}px)`}
          ></div>`
                : nothing}
      ${this._renderDocTitle()}
      ${this._pageVisibleNotes.length
                ? repeat(this._pageVisibleNotes, note => note.note.id, (note, idx) => html `
              <affine-outline-note-card
                data-note-id=${note.note.id}
                .note=${note.note}
                .number=${idx + 1}
                .index=${note.index}
                .doc=${this.doc}
                .editorMode=${this.editor.mode}
                .activeHeadingId=${this._activeHeadingId$.value}
                .status=${selectedNotesSet.has(note.note.id)
                    ? this._dragging
                        ? 'placeholder'
                        : 'selected'
                    : undefined}
                .showPreviewIcon=${this.showPreviewIcon}
                .enableNotesSorting=${this.enableNotesSorting}
                @select=${this._selectNote}
                @drag=${this._drag}
                @fitview=${this._fitToElement}
                @clickblock=${(e) => {
                    this._scrollToBlock(e.detail.blockId).catch(console.error);
                }}
                @displaymodechange=${this._handleDisplayModeChange}
              ></affine-outline-note-card>
            `)
                : html `${nothing}`}
      ${withEdgelessOnlyNotes
                ? html `<div class="hidden-title">Hidden Contents</div>
            ${repeat(this._edgelessOnlyNotes, note => note.note.id, (note, idx) => html `<affine-outline-note-card
                  data-note-id=${note.note.id}
                  .note=${note.note}
                  .number=${idx + 1}
                  .index=${note.index}
                  .doc=${this.doc}
                  .activeHeadingId=${this._activeHeadingId$.value}
                  .invisible=${true}
                  .showPreviewIcon=${this.showPreviewIcon}
                  .enableNotesSorting=${this.enableNotesSorting}
                  @fitview=${this._fitToElement}
                  @displaymodechange=${this._handleDisplayModeChange}
                ></affine-outline-note-card>`)} `
                : nothing}
    </div>`;
        }
        _renderDocTitle() {
            if (!this.doc.root)
                return nothing;
            const hasNotEmptyHeadings = getHeadingBlocksFromDoc(this.doc, [NoteDisplayMode.DocOnly, NoteDisplayMode.DocAndEdgeless], true).length > 0;
            if (!hasNotEmptyHeadings)
                return nothing;
            return html `<affine-outline-block-preview
      class=${classMap({
                active: this.doc.root.id === this._activeHeadingId$.value,
            })}
      .block=${this.doc.root}
      .className=${this.doc.root?.id === this._activeHeadingId$.value
                ? 'active'
                : ''}
      .cardNumber=${1}
      .enableNotesSorting=${false}
      .showPreviewIcon=${this.showPreviewIcon}
      @click=${() => {
                if (!this.doc.root)
                    return;
                this._scrollToBlock(this.doc.root.id).catch(console.error);
            }}
    ></affine-outline-block-preview>`;
        }
        async _scrollToBlock(blockId) {
            this._lockActiveHeadingId = true;
            this._activeHeadingId$.value = blockId;
            this._clearHighlightMask = await scrollToBlockWithHighlight(this.editor, blockId);
            this._lockActiveHeadingId = false;
        }
        _selectNote(e) {
            if (!this._isEdgelessMode())
                return;
            const { selected, id, multiselect } = e.detail;
            if (!selected) {
                this._selected = this._selected.filter(noteId => noteId !== id);
            }
            else if (multiselect) {
                this._selected = [...this._selected, id];
            }
            else {
                this._selected = [id];
            }
            // When edgeless mode, should select notes which display in both mode
            const selectedIds = this._pageVisibleNotes.reduce((ids, item) => {
                const note = item.note;
                if (this._selected.includes(note.id) &&
                    (!note.displayMode ||
                        note.displayMode === NoteDisplayMode.DocAndEdgeless)) {
                    ids.push(note.id);
                }
                return ids;
            }, []);
            this.edgeless?.service.selection.set({
                elements: selectedIds,
                editing: false,
            });
        }
        _setDocDisposables() {
            this._clearDocDisposables();
            this._docDisposables = new DisposableGroup();
            this._docDisposables.add(effect(() => {
                this._updateNotes();
                this._updateNoticeVisibility();
            }));
        }
        /**
         * There are two cases that we should render note list:
         * 1. There are headings in the notes
         * 2. No headings, but there are blocks in the notes and note sorting option is enabled
         */
        _shouldRenderNoteList(noteItems) {
            if (!noteItems.length)
                return false;
            let hasHeadings = false;
            let hasChildrenBlocks = false;
            for (const noteItem of noteItems) {
                for (const block of noteItem.note.children) {
                    hasChildrenBlocks = true;
                    if (isHeadingBlock(block)) {
                        hasHeadings = true;
                        break;
                    }
                }
                if (hasHeadings) {
                    break;
                }
            }
            return hasHeadings || (this.enableNotesSorting && hasChildrenBlocks);
        }
        _updateNotes() {
            const rootModel = this.doc.root;
            if (this._dragging)
                return;
            if (!rootModel) {
                this._pageVisibleNotes = [];
                return;
            }
            const oldSelectedSet = this._selected.reduce((pre, id) => {
                pre.add(id);
                return pre;
            }, new Set());
            const newSelected = [];
            rootModel.children.forEach(block => {
                if (!['affine:note'].includes(block.flavour))
                    return;
                const blockModel = block;
                if (blockModel.displayMode !== NoteDisplayMode.EdgelessOnly) {
                    if (oldSelectedSet.has(block.id)) {
                        newSelected.push(block.id);
                    }
                }
            });
            this._pageVisibleNotes = getNotesFromDoc(this.doc, [
                NoteDisplayMode.DocAndEdgeless,
                NoteDisplayMode.DocOnly,
            ]);
            this._edgelessOnlyNotes = getNotesFromDoc(this.doc, [
                NoteDisplayMode.EdgelessOnly,
            ]);
            this._selected = newSelected;
        }
        _updateNoticeVisibility() {
            if (this.enableNotesSorting) {
                if (this.noticeVisible) {
                    this.setNoticeVisibility(false);
                }
                return;
            }
            const shouldShowNotice = this._pageVisibleNotes.some(note => note.note.displayMode === NoteDisplayMode.DocOnly);
            if (shouldShowNotice && !this.noticeVisible) {
                this.setNoticeVisibility(true);
            }
        }
        _zoomToFit() {
            const edgeless = this.edgeless;
            if (!edgeless)
                return;
            const bound = edgeless.getElementsBound();
            if (!bound)
                return;
            this._oldViewport = {
                zoom: edgeless.service.viewport.zoom,
                center: {
                    x: edgeless.service.viewport.center.x,
                    y: edgeless.service.viewport.center.y,
                },
            };
            edgeless.service.viewport.setViewportByBound(new Bound(bound.x, bound.y, bound.w, bound.h), this.viewportPadding, true);
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(observeActiveHeadingDuringScroll(() => this.editor, newHeadingId => {
                if (this._lockActiveHeadingId)
                    return;
                this._activeHeadingId$.value = newHeadingId;
            }));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (!this._changedFlag && this._oldViewport) {
                const edgeless = this.edgeless;
                if (!edgeless)
                    return;
                edgeless.service.viewport.setViewport(this._oldViewport.zoom, [this._oldViewport.center.x, this._oldViewport.center.y], true);
            }
            this._clearDocDisposables();
            this._clearHighlightMask();
        }
        firstUpdated() {
            this.disposables.addFromEvent(this, 'click', this._clickHandler);
            this.disposables.addFromEvent(this, 'dblclick', this._doubleClickHandler);
        }
        render() {
            const shouldRenderPageVisibleNotes = this._shouldRenderNoteList(this._pageVisibleNotes);
            const shouldRenderEdgelessOnlyNotes = this.renderEdgelessOnlyNotes &&
                this._shouldRenderNoteList(this._edgelessOnlyNotes);
            const shouldRenderEmptyPanel = !shouldRenderPageVisibleNotes && !shouldRenderEdgelessOnlyNotes;
            return html `
      <div class="outline-panel-body-container">
        ${shouldRenderEmptyPanel
                ? this._EmptyPanel()
                : this._PanelList(shouldRenderEdgelessOnlyNotes)}
      </div>
    `;
        }
        willUpdate(_changedProperties) {
            if (_changedProperties.has('doc') || _changedProperties.has('edgeless')) {
                this._setDocDisposables();
            }
            if (_changedProperties.has('mode') &&
                this.edgeless &&
                this._isEdgelessMode()) {
                this._clearHighlightMask();
                if (_changedProperties.get('mode') === undefined)
                    return;
                requestAnimationFrame(() => this._zoomToFit());
            }
        }
        #_dragging_accessor_storage;
        get _dragging() { return this.#_dragging_accessor_storage; }
        set _dragging(value) { this.#_dragging_accessor_storage = value; }
        #_edgelessOnlyNotes_accessor_storage;
        get _edgelessOnlyNotes() { return this.#_edgelessOnlyNotes_accessor_storage; }
        set _edgelessOnlyNotes(value) { this.#_edgelessOnlyNotes_accessor_storage = value; }
        #_pageVisibleNotes_accessor_storage;
        get _pageVisibleNotes() { return this.#_pageVisibleNotes_accessor_storage; }
        set _pageVisibleNotes(value) { this.#_pageVisibleNotes_accessor_storage = value; }
        #_selected_accessor_storage;
        /**
         * store the id of selected notes
         */
        get _selected() { return this.#_selected_accessor_storage; }
        set _selected(value) { this.#_selected_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #domHost_accessor_storage;
        get domHost() { return this.#domHost_accessor_storage; }
        set domHost(value) { this.#domHost_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #enableNotesSorting_accessor_storage;
        get enableNotesSorting() { return this.#enableNotesSorting_accessor_storage; }
        set enableNotesSorting(value) { this.#enableNotesSorting_accessor_storage = value; }
        #fitPadding_accessor_storage;
        get fitPadding() { return this.#fitPadding_accessor_storage; }
        set fitPadding(value) { this.#fitPadding_accessor_storage = value; }
        #insertIndex_accessor_storage;
        get insertIndex() { return this.#insertIndex_accessor_storage; }
        set insertIndex(value) { this.#insertIndex_accessor_storage = value; }
        #noticeVisible_accessor_storage;
        get noticeVisible() { return this.#noticeVisible_accessor_storage; }
        set noticeVisible(value) { this.#noticeVisible_accessor_storage = value; }
        #OutlinePanelContainer_accessor_storage;
        get OutlinePanelContainer() { return this.#OutlinePanelContainer_accessor_storage; }
        set OutlinePanelContainer(value) { this.#OutlinePanelContainer_accessor_storage = value; }
        #panelListElement_accessor_storage;
        get panelListElement() { return this.#panelListElement_accessor_storage; }
        set panelListElement(value) { this.#panelListElement_accessor_storage = value; }
        #renderEdgelessOnlyNotes_accessor_storage;
        get renderEdgelessOnlyNotes() { return this.#renderEdgelessOnlyNotes_accessor_storage; }
        set renderEdgelessOnlyNotes(value) { this.#renderEdgelessOnlyNotes_accessor_storage = value; }
        #setNoticeVisibility_accessor_storage;
        get setNoticeVisibility() { return this.#setNoticeVisibility_accessor_storage; }
        set setNoticeVisibility(value) { this.#setNoticeVisibility_accessor_storage = value; }
        #showPreviewIcon_accessor_storage;
        get showPreviewIcon() { return this.#showPreviewIcon_accessor_storage; }
        set showPreviewIcon(value) { this.#showPreviewIcon_accessor_storage = value; }
        #toggleNotesSorting_accessor_storage;
        get toggleNotesSorting() { return this.#toggleNotesSorting_accessor_storage; }
        set toggleNotesSorting(value) { this.#toggleNotesSorting_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._activeHeadingId$ = signal(null);
            this._changedFlag = false;
            this._clearHighlightMask = () => { };
            this._docDisposables = null;
            this._indicatorTranslateY = 0;
            this._lockActiveHeadingId = false;
            this.#_dragging_accessor_storage = __runInitializers(this, __dragging_initializers, false);
            this.#_edgelessOnlyNotes_accessor_storage = (__runInitializers(this, __dragging_extraInitializers), __runInitializers(this, __edgelessOnlyNotes_initializers, []));
            this.#_pageVisibleNotes_accessor_storage = (__runInitializers(this, __edgelessOnlyNotes_extraInitializers), __runInitializers(this, __pageVisibleNotes_initializers, []));
            this.#_selected_accessor_storage = (__runInitializers(this, __pageVisibleNotes_extraInitializers), __runInitializers(this, __selected_initializers, []));
            this.#doc_accessor_storage = (__runInitializers(this, __selected_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#domHost_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _domHost_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _domHost_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#editor_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _editor_initializers, void 0));
            this.#enableNotesSorting_accessor_storage = (__runInitializers(this, _editor_extraInitializers), __runInitializers(this, _enableNotesSorting_initializers, void 0));
            this.#fitPadding_accessor_storage = (__runInitializers(this, _enableNotesSorting_extraInitializers), __runInitializers(this, _fitPadding_initializers, void 0));
            this.#insertIndex_accessor_storage = (__runInitializers(this, _fitPadding_extraInitializers), __runInitializers(this, _insertIndex_initializers, undefined));
            this.#noticeVisible_accessor_storage = (__runInitializers(this, _insertIndex_extraInitializers), __runInitializers(this, _noticeVisible_initializers, void 0));
            this.#OutlinePanelContainer_accessor_storage = (__runInitializers(this, _noticeVisible_extraInitializers), __runInitializers(this, _OutlinePanelContainer_initializers, void 0));
            this.#panelListElement_accessor_storage = (__runInitializers(this, _OutlinePanelContainer_extraInitializers), __runInitializers(this, _panelListElement_initializers, void 0));
            this.#renderEdgelessOnlyNotes_accessor_storage = (__runInitializers(this, _panelListElement_extraInitializers), __runInitializers(this, _renderEdgelessOnlyNotes_initializers, true));
            this.#setNoticeVisibility_accessor_storage = (__runInitializers(this, _renderEdgelessOnlyNotes_extraInitializers), __runInitializers(this, _setNoticeVisibility_initializers, void 0));
            this.#showPreviewIcon_accessor_storage = (__runInitializers(this, _setNoticeVisibility_extraInitializers), __runInitializers(this, _showPreviewIcon_initializers, void 0));
            this.#toggleNotesSorting_accessor_storage = (__runInitializers(this, _showPreviewIcon_extraInitializers), __runInitializers(this, _toggleNotesSorting_initializers, void 0));
            __runInitializers(this, _toggleNotesSorting_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return OutlinePanelBody = _classThis;
})();
export { OutlinePanelBody };
//# sourceMappingURL=outline-panel-body.js.map