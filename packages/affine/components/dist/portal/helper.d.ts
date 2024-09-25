import type { AdvancedPortalOptions, PortalOptions } from './types.js';
/**
 * Similar to `<lumensuite-portal>`, but only renders once when called.
 *
 * The template should be a **static** template since it will not be re-rendered unless `updatePortal` is called.
 *
 * See {@link Portal} for more details.
 */
export declare function createSimplePortal({ template, container, signal, renderOptions, shadowDom, identifyWrapper, }: PortalOptions): HTMLDivElement;
/**
 * Similar to `createSimplePortal`, but supports auto update position.
 *
 * The template should be a **static** template since it will not be re-rendered.
 *
 * See {@link createSimplePortal} for more details.
 *
 * @example
 * ```ts
 * createLitPortal({
 *   template: RenameModal({
 *     model,
 *     abortController: renameAbortController,
 *   }),
 *   computePosition: {
 *     referenceElement: anchor,
 *     placement: 'top-end',
 *     middleware: [flip(), offset(4)],
 *     autoUpdate: true,
 *   },
 *   abortController: renameAbortController,
 * });
 * ```
 */
export declare function createLitPortal({ computePosition: positionConfigOrFn, abortController, closeOnClickAway, ...portalOptions }: AdvancedPortalOptions): HTMLDivElement;
//# sourceMappingURL=helper.d.ts.map