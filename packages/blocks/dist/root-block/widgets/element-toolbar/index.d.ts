import type { FrameBlockModel, RootBlockModel } from '@lumensuite/affine-model';
import { type MenuItemGroup } from '@lumensuite/affine-components/toolbar';
import { WidgetComponent } from '@lumensuite/block-std';
import { nothing, type TemplateResult } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { ElementToolbarMoreMenuContext } from './more-menu/context.js';
import './more-menu/button.js';
type CustomEntry = {
    render: (edgeless: EdgelessRootBlockComponent) => TemplateResult | null;
    when: (model: LumenSuite.EdgelessModel[]) => boolean;
};
export declare const EDGELESS_ELEMENT_TOOLBAR_WIDGET = "edgeless-element-toolbar-widget";
export declare class EdgelessElementToolbarWidget extends WidgetComponent<RootBlockModel, EdgelessRootBlockComponent> {
    static styles: import("lit").CSSResult;
    private _quickConnect;
    private _updateOnSelectedChange;
    moreGroups: MenuItemGroup<ElementToolbarMoreMenuContext>[];
    get edgeless(): EdgelessRootBlockComponent;
    get selection(): import("../../edgeless/services/selection-manager.js").EdgelessSelectionManager;
    get slots(): {
        edgelessToolUpdated: import("@lumensuite/global/utils").Slot<import("../../edgeless/tools/text-tool.js").TextTool | {
            type: "pan";
            panning: boolean;
        } | {
            type: "brush";
        } | import("../../edgeless/tools/connector-tool.js").ConnectorTool | {
            type: "copilot";
        } | {
            type: "eraser";
        } | {
            type: "frameNavigator";
            mode?: import("../../../index.js").NavigatorMode;
        } | {
            type: "frame";
        } | import("../../edgeless/tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("../../edgeless/tools/note-tool.js").NoteTool | import("../../edgeless/tools/shape-tool.js").ShapeTool | {
            type: "default";
        } | {
            type: "template";
        }>;
        pressShiftKeyUpdated: import("@lumensuite/global/utils").Slot<boolean>;
        cursorUpdated: import("@lumensuite/global/utils").Slot<string>;
        copyAsPng: import("@lumensuite/global/utils").Slot<{
            blocks: LumenSuite.EdgelessBlockModelType[];
            shapes: LumenSuite.SurfaceModel[];
        }>;
        readonlyUpdated: import("@lumensuite/global/utils").Slot<boolean>;
        draggingAreaUpdated: import("@lumensuite/global/utils").Slot<void>;
        navigatorSettingUpdated: import("@lumensuite/global/utils").Slot<{
            hideToolbar?: boolean;
            blackBackground?: boolean;
            fillScreen?: boolean;
        }>;
        navigatorFrameChanged: import("@lumensuite/global/utils").Slot<FrameBlockModel>;
        fullScreenToggled: import("@lumensuite/global/utils").Slot<void>;
        elementResizeStart: import("@lumensuite/global/utils").Slot<void>;
        elementResizeEnd: import("@lumensuite/global/utils").Slot<void>;
        toggleNoteSlicer: import("@lumensuite/global/utils").Slot<void>;
        docLinkClicked: import("@lumensuite/global/utils").Slot<{
            pageId: string;
            params?: {
                mode?: "page" | "edgeless" | undefined;
                blockIds?: string[] | undefined;
                elementIds?: string[] | undefined;
            } | undefined;
        }>;
        tagClicked: import("@lumensuite/global/utils").Slot<{
            tagId: string;
        }>;
        toolbarLocked: import("@lumensuite/global/utils").Slot<boolean>;
    };
    get surface(): import("@lumensuite/affine-block-surface").SurfaceBlockComponent;
    private _groupSelected;
    private _recalculatePosition;
    private _renderQuickConnectButton;
    protected firstUpdated(): void;
    registerEntry(entry: CustomEntry): void;
    render(): TemplateResult<1> | typeof nothing;
    private accessor _dragging;
    private accessor _registeredEntries;
    accessor enableNoteSlicer: boolean;
    accessor selectedIds: string[];
    accessor toolbarVisible: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-element-toolbar-widget': EdgelessElementToolbarWidget;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map