import { LitElement } from 'lit';
import type { EditorHost } from '../view/index.js';
import type { GfxBlockElementModel } from './gfx-block-model.js';
import type { Viewport } from './viewport.js';
/**
 * A wrapper around `requestConnectedFrame` that only calls at most once in one frame
 */
export declare function requestThrottledConnectedFrame<T extends (...args: unknown[]) => void>(func: T, element?: HTMLElement): T;
export declare class GfxViewportElement extends LitElement {
    static styles: import("lit").CSSResult;
    private _hideOutsideBlock;
    private _lastVisibleModels?;
    private _pendingChildrenUpdates;
    private _refreshViewport;
    private _updatingChildrenFlag;
    renderingBlocks: Set<string>;
    viewport: Viewport;
    private _toCSSTransform;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    scheduleUpdateChildren(id: string): Promise<void>;
    accessor container: HTMLDivElement | null;
    accessor getModelsInViewport: undefined | (() => Set<GfxBlockElementModel>);
    accessor host: undefined | EditorHost;
    accessor maxConcurrentRenders: number;
}
//# sourceMappingURL=viewport-element.d.ts.map