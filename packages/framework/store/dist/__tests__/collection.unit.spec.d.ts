import type { BlockModel, BlockSchemaType } from '../index.js';
export declare const BlockSchemas: BlockSchemaType[];
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:page': BlockModel;
            'affine:paragraph': BlockModel;
            'affine:note': BlockModel;
        }
    }
}
//# sourceMappingURL=collection.unit.spec.d.ts.map