import type { RichText } from '@lumensuite/affine-components/rich-text';
import type { BlockComponent, EditorHost } from '@lumensuite/block-std';
import type { BlockModel } from '@lumensuite/store';
export declare function onModelTextUpdated(editorHost: EditorHost, model: BlockModel, callback?: (text: RichText) => void): Promise<void>;
export declare function onModelElementUpdated(editorHost: EditorHost, model: BlockModel, callback: (block: BlockComponent) => void): Promise<void>;
//# sourceMappingURL=callback.d.ts.map