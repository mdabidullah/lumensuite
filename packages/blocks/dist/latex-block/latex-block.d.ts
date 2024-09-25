import type { LatexBlockModel } from '@lumensuite/affine-model';
import type { Placement } from '@floating-ui/dom';
import { CaptionedBlockComponent } from '@lumensuite/affine-components/caption';
import type { LatexBlockService } from './latex-service.js';
export declare class LatexBlockComponent extends CaptionedBlockComponent<LatexBlockModel, LatexBlockService> {
    static styles: import("lit").CSSResult;
    private _editorAbortController;
    get editorPlacement(): Placement;
    get isBlockSelected(): boolean;
    firstUpdated(props: Map<string, unknown>): void;
    removeEditor(portal: HTMLDivElement): void;
    renderBlock(): import("lit").TemplateResult<1>;
    selectBlock(): void;
    toggleEditor(): void;
    private accessor _katexContainer;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-latex': LatexBlockComponent;
    }
}
//# sourceMappingURL=latex-block.d.ts.map