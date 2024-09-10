import type { ImageBlockModel } from '@blocksuite/affine-model';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeImageButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeImageButton extends EdgelessChangeImageButton_base {
    private _download;
    private _showCaption;
    private get _blockComponent();
    private get _doc();
    render(): import("lit").TemplateResult<1>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor model: ImageBlockModel;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-image-button': EdgelessChangeImageButton;
    }
}
export declare function renderChangeImageButton(edgeless: EdgelessRootBlockComponent, images?: ImageBlockModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-image-button.d.ts.map