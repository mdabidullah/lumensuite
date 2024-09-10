import type { Slot } from '@blocksuite/global/utils';
import type { AutoUpdateOptions, ComputePositionConfig, ComputePositionReturn, ReferenceElement } from '@floating-ui/dom';
import type { RenderOptions, TemplateResult } from 'lit';
/**
 * See https://lit.dev/docs/templates/expressions/#child-expressions
 */
type Renderable = TemplateResult<1> | HTMLElement | number | boolean | string | null | undefined;
export type PortalOptions = {
    template: Renderable | ((ctx: {
        updatePortal: () => void;
    }) => Renderable);
    container?: Element;
    /**
     * The portal is removed when the AbortSignal is aborted.
     */
    signal?: AbortSignal;
    /**
     * Defaults to `true`.
     */
    shadowDom?: boolean | ShadowRootInit;
    renderOptions?: RenderOptions;
    /**
     * Defaults to `true`.
     * If true, the portalRoot will be added a class `blocksuite-portal`. It's useful for finding the portalRoot.
     */
    identifyWrapper?: boolean;
    portalStyles?: Record<string, string | number | undefined | null>;
};
type ComputePositionOptions = {
    referenceElement: ReferenceElement;
    /**
     * Default `false`.
     */
    autoUpdate?: true | AutoUpdateOptions;
    /**
     * Default `true`. Only work when `referenceElement` is an `Element`. Check when position update (`autoUpdate` is `true` or first tick)
     */
    abortWhenRefRemoved?: boolean;
} & Partial<ComputePositionConfig>;
export type AdvancedPortalOptions = Omit<PortalOptions, 'template' | 'signal'> & {
    abortController: AbortController;
    template: Renderable | ((context: {
        positionSlot: Slot<ComputePositionReturn>;
        updatePortal: () => void;
    }) => Renderable);
    /**
     * See https://floating-ui.com/docs/computePosition
     */
    computePosition?: ComputePositionOptions | ((portalRoot: Element) => ComputePositionOptions);
    /**
     * Whether to close the portal when click away(click outside).
     * @default false
     */
    closeOnClickAway?: boolean;
};
export {};
//# sourceMappingURL=types.d.ts.map