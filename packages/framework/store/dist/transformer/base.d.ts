import type { BlockModel, InternalPrimitives } from '../schema/index.js';
import type { AssetsManager } from './assets.js';
import type { DraftModel } from './draft.js';
import type { BlockSnapshot } from './type.js';
type BlockSnapshotLeaf = Pick<BlockSnapshot, 'id' | 'flavour' | 'props' | 'version'>;
export type FromSnapshotPayload = {
    json: BlockSnapshotLeaf;
    assets: AssetsManager;
    children: BlockSnapshot[];
};
export type ToSnapshotPayload<Props extends object> = {
    model: DraftModel<BlockModel<Props>>;
    assets: AssetsManager;
};
export type SnapshotReturn<Props extends object> = {
    id: string;
    flavour: string;
    version: number;
    props: Props;
};
export declare class BaseBlockTransformer<Props extends object = object> {
    protected _internal: InternalPrimitives;
    protected _propsFromSnapshot(propsJson: Record<string, unknown>): Props;
    protected _propsToSnapshot(model: DraftModel): {
        [k: string]: unknown;
    };
    fromSnapshot({ json, }: FromSnapshotPayload): Promise<SnapshotReturn<Props>> | SnapshotReturn<Props>;
    toSnapshot({ model, }: ToSnapshotPayload<Props>): Promise<BlockSnapshotLeaf> | BlockSnapshotLeaf;
}
export {};
//# sourceMappingURL=base.d.ts.map