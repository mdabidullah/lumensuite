import type { MindmapStyle } from '@lumensuite/affine-model';
import type { BlockStdScope } from '@lumensuite/block-std';
import type { Bound } from '@lumensuite/global/utils';
import type { BlockModel } from '@lumensuite/store';
import { LitElement, type TemplateResult } from 'lit';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import { type ToolbarMindmapItem } from './assets.js';
import { textRender } from './basket-elements.js';
type TextItem = {
    type: 'text';
    icon: TemplateResult;
    render: typeof textRender;
};
type ImportItem = {
    type: 'import';
    icon: TemplateResult;
};
declare const EdgelessMindmapMenu_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessMindmapMenu extends EdgelessMindmapMenu_base {
    static styles: import("lit").CSSResult;
    private _style$;
    draggableController: EdgelessDraggableElementController<ToolbarMindmapItem | TextItem | ImportItem>;
    type: "mindmap";
    private get _rootBlock();
    get mindMaps(): ToolbarMindmapItem[];
    private _importMindMapEntry;
    private _onImportMindMap;
    initDragController(): void;
    render(): TemplateResult<1>;
    updated(changedProperties: Map<PropertyKey, unknown>): void;
    accessor model: BlockModel;
    accessor onActiveStyleChange: (style: MindmapStyle) => void;
    accessor onImportMindMap: (bound: Bound) => Promise<void>;
    accessor std: BlockStdScope;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-mindmap-menu': EdgelessMindmapMenu;
    }
}
export {};
//# sourceMappingURL=mindmap-menu.d.ts.map