import { ShadowlessElement } from '@lumensuite/block-std';
import type { SurfaceRefRenderer } from '../../surface-ref-block/surface-ref-renderer.js';
import type { SurfaceRefBlockService } from '../../surface-ref-block/surface-ref-service.js';
import type { EmbedSyncedDocBlockComponent } from '../embed-synced-doc-block.js';
declare const EmbedSyncedDocCard_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EmbedSyncedDocCard extends EmbedSyncedDocCard_base {
    static styles: import("lit").CSSResult;
    private _dragging;
    cleanUpSurfaceRefRenderer: () => void;
    get blockState(): {
        isLoading: boolean;
        isError: boolean;
        isDeleted: boolean;
        isCycle: boolean;
    };
    get editorMode(): import("@lumensuite/affine-model").DocMode;
    get host(): import("@lumensuite/block-std").EditorHost;
    get linkedDoc(): import("@lumensuite/store").Doc | null;
    get model(): import("@lumensuite/affine-model").EmbedSyncedDocModel;
    get std(): import("@lumensuite/block-std").BlockStdScope;
    private _handleClick;
    private _isDocEmpty;
    private _selectBlock;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    accessor bannerContainer: Promise<HTMLDivElement>;
    accessor block: EmbedSyncedDocBlockComponent;
    accessor isBannerEmpty: boolean;
    accessor isError: boolean;
    accessor isNoteContentEmpty: boolean;
    accessor noteContainer: Promise<HTMLDivElement>;
    accessor surfaceRefRenderer: SurfaceRefRenderer | null;
    accessor surfaceRefService: SurfaceRefBlockService;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-synced-doc-card': EmbedSyncedDocCard;
    }
}
export {};
//# sourceMappingURL=embed-synced-doc-card.d.ts.map