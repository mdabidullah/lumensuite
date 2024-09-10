import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import { type DraggableTool } from './basket-elements.js';
import './mindmap-menu.js';
declare const EdgelessMindmapToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessMindmapToolButton extends EdgelessMindmapToolButton_base {
    static styles: import("lit").CSSResult;
    private _style$;
    draggableController: EdgelessDraggableElementController<DraggableTool>;
    enableActiveBackground: boolean;
    type: EdgelessTool['type'][];
    get draggableTools(): DraggableTool[];
    get mindmaps(): import("./assets.js").ToolbarMindmapItem[];
    private _toggleMenu;
    initDragController(): void;
    render(): import("lit").TemplateResult<1>;
    updated(_changedProperties: Map<PropertyKey, unknown>): void;
    accessor enableBlur: boolean;
    accessor mindmapElement: HTMLElement;
    accessor readyToDrop: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-mindmap-tool-button': EdgelessMindmapToolButton;
    }
}
export {};
//# sourceMappingURL=mindmap-tool-button.d.ts.map