import { LitElement } from 'lit';
import { type BacklinkData } from './utils.js';
declare const BacklinkButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BacklinkButton extends BacklinkButton_base {
    static styles: import("lit").CSSResult;
    private _backlinks;
    private _onClickAway;
    constructor(backlinks: BacklinkData[]);
    connectedCallback(): void;
    onClick(): void;
    render(): import("lit").TemplateResult<1> | null;
    private accessor _showPopover;
}
export {};
//# sourceMappingURL=backlink-popover.d.ts.map