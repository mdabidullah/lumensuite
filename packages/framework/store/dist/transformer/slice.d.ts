import type { Doc } from '../store/index.js';
import type { DraftModel } from './draft.js';
type SliceData = {
    content: DraftModel[];
    workspaceId: string;
    pageId: string;
    pageVersion: number;
    workspaceVersion: number;
};
export declare class Slice {
    readonly data: SliceData;
    get content(): DraftModel[];
    get docId(): string;
    get pageVersion(): number;
    get workspaceId(): string;
    get workspaceVersion(): number;
    constructor(data: SliceData);
    static fromModels(doc: Doc, models: DraftModel[]): Slice;
}
export {};
//# sourceMappingURL=slice.d.ts.map