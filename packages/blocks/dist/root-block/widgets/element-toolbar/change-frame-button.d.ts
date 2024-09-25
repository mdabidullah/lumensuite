import { type FrameBlockModel } from '@lumensuite/affine-model';
import { LitElement, nothing } from 'lit';
import type { EdgelessColorPickerButton } from '../../edgeless/components/color-picker/button.js';
import type { PickColorEvent } from '../../edgeless/components/color-picker/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeFrameButton_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class EdgelessChangeFrameButton extends EdgelessChangeFrameButton_base {
    pickColor: (event: PickColorEvent) => void;
    get service(): import("../../index.js").EdgelessRootService;
    private _insertIntoPage;
    private _setFrameBackground;
    protected render(): Iterable<symbol | import("lit").TemplateResult<1>>;
    accessor backgroundButton: EdgelessColorPickerButton;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
}
export declare function renderFrameButton(edgeless: EdgelessRootBlockComponent, frames?: FrameBlockModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-frame-button.d.ts.map