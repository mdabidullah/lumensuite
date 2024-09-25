import { assertExists, Bound } from '@lumensuite/global/utils';
import { isTopLevelBlock } from '../../../root-block/edgeless/utils/query.js';
export const edgelessToBlob = async (host, options) => {
    const { edgelessElement } = options;
    const rootService = host.std.getService('affine:page');
    const exportManager = rootService.exportManager;
    const bound = Bound.deserialize(edgelessElement.xywh);
    const isBlock = isTopLevelBlock(edgelessElement);
    return exportManager
        .edgelessToCanvas(options.surfaceRenderer, bound, undefined, isBlock ? [edgelessElement] : undefined, isBlock ? undefined : [edgelessElement], { zoom: options.surfaceRenderer.viewport.zoom })
        .then(canvas => {
        assertExists(canvas);
        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => (blob ? resolve(blob) : reject(null)), 'image/png');
        });
    });
};
export const writeImageBlobToClipboard = async (blob) => {
    // @ts-ignore
    if (window.apis?.clipboard?.copyAsImageFromString) {
        // @ts-ignore
        await window.apis.clipboard?.copyAsImageFromString(blob);
    }
    else {
        await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    }
};
//# sourceMappingURL=utils.js.map