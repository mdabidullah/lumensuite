import type { MindmapElementModel } from '@lumensuite/affine-block-surface';
import type { ShapeElementModel } from '@lumensuite/affine-model';
import { LayoutType, MindmapStyle } from '@lumensuite/affine-model';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
interface LayoutItem {
    name: string;
    value: LayoutType;
    icon: TemplateResult<1>;
}
declare class EdgelessChangeMindmapStylePanel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): unknown;
    accessor mindmapStyle: MindmapStyle | null;
    accessor onSelect: (style: MindmapStyle) => void;
}
declare class EdgelessChangeMindmapLayoutPanel extends LitElement {
    static styles: import("lit").CSSResult;
    render(): unknown;
    accessor mindmapLayout: LayoutType | null;
    accessor onSelect: (style: LayoutType) => void;
}
declare const EdgelessChangeMindmapButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeMindmapButton extends EdgelessChangeMindmapButton_base {
    private _updateLayoutType;
    private _updateStyle;
    private get _mindmaps();
    get layout(): LayoutItem;
    private _getCommonLayoutType;
    private _getCommonStyle;
    private _isSubnode;
    render(): Iterable<symbol | TemplateResult<1>>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor elements: MindmapElementModel[];
    accessor layoutType: LayoutType;
    accessor nodes: ShapeElementModel[];
}
export declare function renderMindmapButton(edgeless: EdgelessRootBlockComponent, elements?: (ShapeElementModel | MindmapElementModel)[]): TemplateResult<1> | typeof nothing;
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-mindmap-style-panel': EdgelessChangeMindmapStylePanel;
        'edgeless-change-mindmap-layout-panel': EdgelessChangeMindmapLayoutPanel;
        'edgeless-change-mindmap-button': EdgelessChangeMindmapButton;
    }
}
export {};
//# sourceMappingURL=change-mindmap-button.d.ts.map