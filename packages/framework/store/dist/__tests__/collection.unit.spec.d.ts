import type { BlockModel, BlockSchemaType } from '../index.js';
export declare const BlockSchemas: BlockSchemaType[];
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:page': BlockModel;
            'affine:paragraph': BlockModel;
            'affine:note': BlockModel;
        }
    }
}
//# sourceMappingURL=collection.unit.spec.d.ts.map