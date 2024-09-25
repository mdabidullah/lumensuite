import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import { sha } from '@lumensuite/global/utils';
import { BaseAdapter, nanoid, } from '@lumensuite/store';
export class AttachmentAdapter extends BaseAdapter {
    fromBlockSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'AttachmentAdapter.fromBlockSnapshot is not implemented.');
    }
    fromDocSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'AttachmentAdapter.fromDocSnapshot is not implemented.');
    }
    fromSliceSnapshot(payload) {
        const attachments = [];
        for (const contentSlice of payload.snapshot.content) {
            if (contentSlice.type === 'block') {
                const { flavour, props } = contentSlice;
                if (flavour === 'affine:attachment') {
                    const { sourceId } = props;
                    const file = payload.assets?.getAssets().get(sourceId);
                    if (file) {
                        attachments.push(file);
                    }
                }
            }
        }
        return Promise.resolve({ file: attachments, assetsIds: [] });
    }
    toBlockSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'AttachmentAdapter.toBlockSnapshot is not implemented.');
    }
    toDocSnapshot(_payload) {
        throw new LumenSuiteError(ErrorCode.TransformerNotImplementedError, 'AttachmentAdapter.toDocSnapshot is not implemented.');
    }
    async toSliceSnapshot(payload) {
        const content = [];
        for (const item of payload.file) {
            const blobId = await sha(await item.arrayBuffer());
            payload.assets?.getAssets().set(blobId, item);
            await payload.assets?.writeToBlob(blobId);
            content.push({
                type: 'block',
                flavour: 'affine:attachment',
                id: nanoid(),
                props: {
                    name: item.name,
                    size: item.size,
                    type: item.type,
                    embed: false,
                    style: 'horizontalThin',
                    index: 'a0',
                    xywh: '[0,0,0,0]',
                    rotate: 0,
                    sourceId: blobId,
                },
                children: [],
            });
        }
        if (content.length === 0) {
            return null;
        }
        return {
            type: 'slice',
            content,
            pageVersion: payload.pageVersion,
            workspaceVersion: payload.workspaceVersion,
            workspaceId: payload.workspaceId,
            pageId: payload.pageId,
        };
    }
}
//# sourceMappingURL=attachment.js.map