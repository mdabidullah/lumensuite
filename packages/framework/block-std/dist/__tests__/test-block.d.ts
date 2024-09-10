import type { HeadingBlockModel, NoteBlockModel, RootBlockModel } from './test-schema.js';
import { BlockComponent } from '../view/index.js';
export declare class RootBlockComponent extends BlockComponent<RootBlockModel> {
    renderBlock(): import("lit").TemplateResult<1>;
}
export declare class NoteBlockComponent extends BlockComponent<NoteBlockModel> {
    renderBlock(): import("lit").TemplateResult<1>;
}
export declare class HeadingH1BlockComponent extends BlockComponent<HeadingBlockModel> {
    renderBlock(): import("lit").TemplateResult<1>;
}
export declare class HeadingH2BlockComponent extends BlockComponent<HeadingBlockModel> {
    renderBlock(): import("lit").TemplateResult<1>;
}
//# sourceMappingURL=test-block.d.ts.map