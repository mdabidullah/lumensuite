import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
export class Slice {
    get content() {
        return this.data.content;
    }
    get docId() {
        return this.data.pageId;
    }
    get pageVersion() {
        return this.data.pageVersion;
    }
    get workspaceId() {
        return this.data.workspaceId;
    }
    get workspaceVersion() {
        return this.data.workspaceVersion;
    }
    constructor(data) {
        this.data = data;
    }
    static fromModels(doc, models) {
        const meta = doc.collection.meta;
        const { pageVersion, workspaceVersion } = meta;
        if (!pageVersion || !workspaceVersion) {
            throw new LumenSuiteError(ErrorCode.ModelCRUDError, 'pageVersion or workspaceVersion not found when creating slice');
        }
        return new Slice({
            content: models,
            workspaceId: doc.collection.id,
            pageId: doc.id,
            pageVersion,
            workspaceVersion,
        });
    }
}
//# sourceMappingURL=slice.js.map