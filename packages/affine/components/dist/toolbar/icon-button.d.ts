import type { Placement } from '@floating-ui/dom';
import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
import './tooltip.js';
export declare class EditorIconButton extends LitElement {
    static styles: import("lit").CSSResult;
    constructor();
    connectedCallback(): void;
    render(): TemplateResult<1>;
    accessor active: boolean;
    accessor activeMode: 'color' | 'background';
    accessor arrow: boolean;
    accessor coming: boolean;
    accessor disabled: boolean;
    accessor hover: boolean;
    accessor hoverState: boolean;
    accessor iconContainerPadding: number | number[];
    accessor iconContainerWidth: string | undefined;
    accessor iconSize: string | undefined;
    accessor justify: string | undefined;
    accessor labelHeight: string | undefined;
    accessor showTooltip: boolean;
    accessor tipPosition: Placement;
    accessor tooltip: string | TemplateResult<1>;
    accessor tooltipOffset: number;
    accessor withHover: boolean | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-icon-button': EditorIconButton;
    }
}
//# sourceMappingURL=icon-button.d.ts.map