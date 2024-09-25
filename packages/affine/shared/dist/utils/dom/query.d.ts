import type { RootBlockModel } from '@lumensuite/affine-model';
import type { BlockModel } from '@lumensuite/store';
import { type BlockComponent } from '@lumensuite/block-std';
export declare function getModelByElement<Model extends BlockModel>(element: Element): Model | null;
export declare function getRootByElement(element: Element): BlockComponent<RootBlockModel> | null;
export declare function getPageRootByElement(element: Element): BlockComponent<RootBlockModel> | null;
export declare function getEdgelessRootByElement(element: Element): BlockComponent<RootBlockModel> | null;
//# sourceMappingURL=query.d.ts.map