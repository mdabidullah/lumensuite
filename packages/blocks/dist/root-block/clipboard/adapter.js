import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { assertExists } from '@lumensuite/global/utils';
import { BaseAdapter } from '@lumensuite/store';
import { decodeClipboardBlobs, encodeClipboardBlobs } from './utils.js';
export class ClipboardAdapter extends BaseAdapter {
    static { this.MIME = 'BLOCKSUITE/SNAPSHOT'; }
    fromBlockSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'ClipboardAdapter.fromBlockSnapshot is not implemented');
    }
    fromDocSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'ClipboardAdapter.fromDocSnapshot is not implemented');
    }
    async fromSliceSnapshot(payload) {
        const snapshot = payload.snapshot;
        const assets = payload.assets;
        assertExists(assets);
        const map = assets.getAssets();
        const blobs = await encodeClipboardBlobs(map);
        return {
            file: JSON.stringify({
                snapshot,
                blobs,
            }),
            assetsIds: [],
        };
    }
    toBlockSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'ClipboardAdapter.toBlockSnapshot is not implemented');
    }
    toDocSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'ClipboardAdapter.toDocSnapshot is not implemented');
    }
    toSliceSnapshot(payload) {
        const json = JSON.parse(payload.file);
        const { blobs, snapshot } = json;
        const map = payload.assets?.getAssets();
        decodeClipboardBlobs(blobs, map);
        return Promise.resolve(snapshot);
    }
}
//# sourceMappingURL=adapter.js.map