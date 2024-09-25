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
import { OpenIcon } from '@lumensuite/affine-components/icons';
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/embed-block-element.js';
import { getEmbedCardIcons } from '../_common/utils/url.js';
import { githubUrlRegex } from './embed-github-model.js';
import { GithubIcon, styles } from './styles.js';
import { getGithubStatusIcon, refreshEmbedGithubStatus, refreshEmbedGithubUrlData, } from './utils.js';
let EmbedGithubBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-github-block')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EmbedBlockComponent;
    let __isSelected_decorators;
    let __isSelected_initializers = [];
    let __isSelected_extraInitializers = [];
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    var EmbedGithubBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isSelected_decorators = [state()];
            _loading_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedGithubBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        _handleAssigneeClick(assignee) {
            const link = `https://www.github.com/${assignee}`;
            window.open(link, '_blank');
        }
        _handleDoubleClick(event) {
            event.stopPropagation();
            this.open();
        }
        _selectBlock() {
            const selectionManager = this.host.selection;
            const blockSelection = selectionManager.create('block', {
                blockId: this.blockId,
            });
            selectionManager.setGroup('note', [blockSelection]);
        }
        _handleClick(event) {
            event.stopPropagation();
            this._selectBlock();
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.model.owner || !this.model.repo || !this.model.githubId) {
                this.doc.withoutTransact(() => {
                    const url = this.model.url;
                    const urlMatch = url.match(githubUrlRegex);
                    if (urlMatch) {
                        const [, owner, repo, githubType, githubId] = urlMatch;
                        this.doc.updateBlock(this.model, {
                            owner,
                            repo,
                            githubType: githubType === 'issue' ? 'issue' : 'pr',
                            githubId,
                        });
                    }
                });
            }
            this.doc.withoutTransact(() => {
                if (!this.model.description && !this.model.title) {
                    this.refreshData();
                }
                else {
                    this.refreshStatus();
                }
            });
            this.disposables.add(this.model.propsUpdated.on(({ key }) => {
                if (key === 'url') {
                    this.refreshData();
                }
            }));
            this.disposables.add(this.selection.slots.changed.on(() => {
                this._isSelected =
                    !!this.selected?.is('block') || !!this.selected?.is('surface');
            }));
        }
        renderBlock() {
            const { title = 'GitHub', githubType, status, statusReason, owner, repo, createdAt, assignees, description, image, style, } = this.model;
            this._cardStyle = style;
            this._width = EMBED_CARD_WIDTH[this._cardStyle];
            this._height = EMBED_CARD_HEIGHT[this._cardStyle];
            const loading = this.loading;
            const { LoadingIcon, EmbedCardBannerIcon } = getEmbedCardIcons();
            const titleIcon = loading ? LoadingIcon : GithubIcon;
            const statusIcon = status
                ? getGithubStatusIcon(githubType, status, statusReason)
                : nothing;
            const statusText = loading ? '' : status;
            const titleText = loading ? 'Loading...' : title;
            const descriptionText = loading ? '' : description;
            const bannerImage = !loading && image
                ? html `<object type="image/webp" data=${image} draggable="false">
            ${EmbedCardBannerIcon}
          </object>`
                : EmbedCardBannerIcon;
            let dateText = '';
            if (createdAt) {
                const date = new Date(createdAt);
                dateText = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                });
                const day = date.getDate();
                const suffix = ['th', 'st', 'nd', 'rd'][((day / 10) | 0) !== 1 ? day % 10 : 4] || 'th';
                dateText = dateText.replace(/\d+/, `${day}${suffix}`);
            }
            return this.renderEmbed(() => html `
        <div
          style=${styleMap({
                position: 'relative',
            })}
        >
          <div
            class=${classMap({
                'affine-embed-github-block': true,
                loading,
                [style]: true,
                selected: this._isSelected,
            })}
            @click=${this._handleClick}
            @dblclick=${this._handleDoubleClick}
          >
            <div class="affine-embed-github-content">
              <div class="affine-embed-github-content-title">
                <div class="affine-embed-github-content-title-icons">
                  <div class="affine-embed-github-content-title-site-icon">
                    ${titleIcon}
                  </div>

                  ${status && statusText
                ? html `<div
                        class=${classMap({
                    'affine-embed-github-content-title-status-icon': true,
                    [githubType]: true,
                    [status]: true,
                    success: statusReason === 'completed',
                    failure: statusReason === 'not_planned',
                })}
                      >
                        ${statusIcon}

                        <span>${statusText}</span>
                      </div>`
                : nothing}
                </div>

                <div class="affine-embed-github-content-title-text">
                  ${titleText}
                </div>
              </div>

              <div class="affine-embed-github-content-description">
                ${descriptionText}
              </div>

              ${githubType === 'issue' && assignees
                ? html `
                    <div class="affine-embed-github-content-assignees">
                      <div
                        class="affine-embed-github-content-assignees-text label"
                      >
                        Assignees
                      </div>

                      <div
                        class="affine-embed-github-content-assignees-text users"
                      >
                        ${assignees.length === 0
                    ? html `<span
                              class="affine-embed-github-content-assignees-text-users placeholder"
                              >No one</span
                            >`
                    : repeat(assignees, assignee => assignee, (assignee, index) => html `<span
                                    class="affine-embed-github-content-assignees-text-users user"
                                    @click=${() => this._handleAssigneeClick(assignee)}
                                    >${`@${assignee}`}</span
                                  >
                                  ${index === assignees.length - 1 ? '' : `, `}`)}
                      </div>
                    </div>
                  `
                : nothing}

              <div class="affine-embed-github-content-url" @click=${this.open}>
                <span class="affine-embed-github-content-repo"
                  >${`${owner}/${repo} |`}</span
                >

                ${createdAt
                ? html `<span class="affine-embed-github-content-date"
                      >${dateText} |</span
                    >`
                : nothing}
                <span>github.com</span>

                <div class="affine-embed-github-content-url-icon">
                  ${OpenIcon}
                </div>
              </div>
            </div>

            <div class="affine-embed-github-banner">${bannerImage}</div>
          </div>
        </div>
      `);
        }
        #_isSelected_accessor_storage;
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #loading_accessor_storage;
        get loading() { return this.#loading_accessor_storage; }
        set loading(value) { this.#loading_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._cardStyle = 'horizontal';
            this.open = () => {
                let link = this.model.url;
                if (!link.match(/^[a-zA-Z]+:\/\//)) {
                    link = 'https://' + link;
                }
                window.open(link, '_blank');
            };
            this.refreshData = () => {
                refreshEmbedGithubUrlData(this, this.fetchAbortController.signal).catch(console.error);
            };
            this.refreshStatus = () => {
                refreshEmbedGithubStatus(this, this.fetchAbortController.signal).catch(console.error);
            };
            this.#_isSelected_accessor_storage = __runInitializers(this, __isSelected_initializers, false);
            this.#loading_accessor_storage = (__runInitializers(this, __isSelected_extraInitializers), __runInitializers(this, _loading_initializers, false));
            __runInitializers(this, _loading_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedGithubBlockComponent = _classThis;
})();
export { EmbedGithubBlockComponent };
//# sourceMappingURL=embed-github-block.js.map