import type { EmbedGithubModel, EmbedGithubStyles } from '@lumensuite/affine-model';
import type { EmbedGithubBlockService } from './embed-github-service.js';
import { EmbedBlockComponent } from '../_common/embed-block-helper/embed-block-element.js';
export declare class EmbedGithubBlockComponent extends EmbedBlockComponent<EmbedGithubModel, EmbedGithubBlockService> {
    static styles: import("lit").CSSResult;
    _cardStyle: (typeof EmbedGithubStyles)[number];
    open: () => void;
    refreshData: () => void;
    refreshStatus: () => void;
    private _handleAssigneeClick;
    private _handleDoubleClick;
    private _selectBlock;
    protected _handleClick(event: MouseEvent): void;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
    private accessor _isSelected;
    accessor loading: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-github-block': EmbedGithubBlockComponent;
    }
}
//# sourceMappingURL=embed-github-block.d.ts.map