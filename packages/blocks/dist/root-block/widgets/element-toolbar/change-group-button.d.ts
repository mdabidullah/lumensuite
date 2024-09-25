import type { GroupElementModel } from '@lumensuite/affine-model';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeGroupButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeGroupButton extends EdgelessChangeGroupButton_base {
    private _insertIntoPage;
    protected render(): Iterable<symbol | import("lit").TemplateResult<1>>;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor groups: GroupElementModel[];
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-group-button': EdgelessChangeGroupButton;
    }
}
export declare function renderGroupButton(edgeless: EdgelessRootBlockComponent, groups?: GroupElementModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-group-button.d.ts.map