import type { BlockModel } from '../schema/base.js';
type PropsInDraft = 'version' | 'flavour' | 'role' | 'page' | 'id' | 'keys' | 'text';
type ModelProps<Model> = Model extends BlockModel<infer U> ? U : never;
export type DraftModel<Model extends BlockModel = BlockModel> = Pick<Model, PropsInDraft> & {
    children: DraftModel[];
} & ModelProps<Model>;
export declare function toDraftModel<Model extends BlockModel = BlockModel>(origin: Model): DraftModel<Model>;
export {};
//# sourceMappingURL=draft.d.ts.map