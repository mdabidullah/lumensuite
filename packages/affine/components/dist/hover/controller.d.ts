import type { ReactiveController, ReactiveElement } from 'lit';
import { type AdvancedPortalOptions } from '@blocksuite/affine-components/portal';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { HoverOptions } from './types.js';
import { whenHover } from './when-hover.js';
type OptionsParams = Omit<ReturnType<typeof whenHover>, 'setFloating' | 'dispose'> & {
    abortController: AbortController;
};
type HoverPortalOptions = Omit<AdvancedPortalOptions, 'abortController'>;
export declare class HoverController implements ReactiveController {
    static globalAbortController?: AbortController;
    private _abortController?;
    private readonly _hoverOptions;
    private _isHovering;
    private readonly _onHover;
    private _portal?;
    private _setReference;
    protected _disposables: DisposableGroup;
    host: ReactiveElement;
    /**
     * Callback when the portal needs to be aborted.
     */
    onAbort: () => void;
    /**
     * Whether the host is currently hovering.
     *
     * This property is unreliable when the floating element disconnect from the DOM suddenly.
     */
    get isHovering(): boolean;
    get portal(): HTMLDivElement | undefined;
    get setReference(): (element?: Element | undefined) => void;
    constructor(host: ReactiveElement, onHover: (options: OptionsParams) => HoverPortalOptions | null, hoverOptions?: Partial<HoverOptions>);
    abort(force?: boolean): void;
    hostConnected(): void;
    hostDisconnected(): void;
}
export {};
//# sourceMappingURL=controller.d.ts.map