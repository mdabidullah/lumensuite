import type { SurfaceBlockModel } from '@blocksuite/affine-block-surface';
import { BlockComponent } from '@blocksuite/block-std';
import type { MindmapService } from './service.js';
export declare class MindmapSurfaceBlock extends BlockComponent<SurfaceBlockModel> {
    private _renderer?;
    private get _grid();
    private get _layer();
    get mindmapService(): MindmapService;
    get viewport(): import("@blocksuite/block-std/gfx").Viewport;
    constructor();
    private _adjustNodeWidth;
    private _resizeEffect;
    private _setupCenterEffect;
    private _setupRenderer;
    connectedCallback(): void;
    firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit").TemplateResult<1>;
    accessor editorContainer: HTMLDivElement;
}
//# sourceMappingURL=surface-block.d.ts.map