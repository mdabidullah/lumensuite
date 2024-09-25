import { LitElement } from 'lit';
/**
 * Renders a template into a portal. Defaults to `document.body`.
 *
 * Note that every time the parent component re-renders, the portal will be re-called.
 *
 * See https://lit.dev/docs/components/rendering/#writing-a-good-render()-method
 *
 * @example
 * ```ts
 * render() {
 *   return html`${showPortal
 *     ? html`<lumensuite-portal .template=${portalTemplate}></lumensuite-portal>`
 *     : null}`;
 * };
 * ```
 */
export declare class Portal extends LitElement {
    private _portalRoot;
    createRenderRoot(): ShadowRoot | HTMLDivElement;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor container: HTMLElement;
    accessor shadowDom: boolean | ShadowRootInit;
    accessor template: import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'lumensuite-portal': Portal;
    }
}
//# sourceMappingURL=portal.d.ts.map