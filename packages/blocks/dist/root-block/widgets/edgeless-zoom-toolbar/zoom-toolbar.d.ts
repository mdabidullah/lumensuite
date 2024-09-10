import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { EdgelessTool } from '../../edgeless/types.js';
declare const EdgelessZoomToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessZoomToolbar extends EdgelessZoomToolbar_base {
    static styles: import("lit").CSSResult;
    setEdgelessTool: (edgelessTool: EdgelessTool) => void;
    get edgelessService(): import("../../index.js").EdgelessRootService;
    get edgelessTool(): import("../../edgeless/tools/text-tool.js").TextTool | {
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
    } | import("../../edgeless/tools/note-tool.js").NoteTool | {
        type: "pan";
        panning: boolean;
    } | import("../../edgeless/tools/shape-tool.js").ShapeTool | {
        type: "default";
    } | {
        type: "template";
    };
    get locked(): boolean;
    get viewport(): import("@blocksuite/block-std/gfx").Viewport;
    get zoom(): number;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _isVerticalBar;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor layout: 'horizontal' | 'vertical';
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-zoom-toolbar': EdgelessZoomToolbar;
    }
}
export {};
//# sourceMappingURL=zoom-toolbar.d.ts.map