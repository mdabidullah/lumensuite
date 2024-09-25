import { assertEquals } from '@lumensuite/global/utils';
import { ASTWalkerContext } from './context.js';
export class BaseAdapter {
    get configs() {
        return this.job.adapterConfigs;
    }
    constructor(job) {
        this.job = job;
    }
    async fromBlock(mode) {
        try {
            const blockSnapshot = await this.job.blockToSnapshot(mode);
            if (!blockSnapshot)
                return;
            return await this.fromBlockSnapshot({
                snapshot: blockSnapshot,
                assets: this.job.assetsManager,
            });
        }
        catch (error) {
            console.error('Cannot convert block to snapshot');
            console.error(error);
            return;
        }
    }
    async fromDoc(doc) {
        try {
            const docSnapshot = await this.job.docToSnapshot(doc);
            if (!docSnapshot)
                return;
            return await this.fromDocSnapshot({
                snapshot: docSnapshot,
                assets: this.job.assetsManager,
            });
        }
        catch (error) {
            console.error('Cannot convert doc to snapshot');
            console.error(error);
            return;
        }
    }
    async fromSlice(slice) {
        try {
            const sliceSnapshot = await this.job.sliceToSnapshot(slice);
            if (!sliceSnapshot)
                return;
            return await this.fromSliceSnapshot({
                snapshot: sliceSnapshot,
                assets: this.job.assetsManager,
            });
        }
        catch (error) {
            console.error('Cannot convert slice to snapshot');
            console.error(error);
            return;
        }
    }
    async toBlock(payload, doc, parent, index) {
        try {
            const snapshot = await this.toBlockSnapshot(payload);
            if (!snapshot)
                return;
            return await this.job.snapshotToBlock(snapshot, doc, parent, index);
        }
        catch (error) {
            console.error('Cannot convert block snapshot to block');
            console.error(error);
            return;
        }
    }
    async toDoc(payload) {
        try {
            const snapshot = await this.toDocSnapshot(payload);
            if (!snapshot)
                return;
            return await this.job.snapshotToDoc(snapshot);
        }
        catch (error) {
            console.error('Cannot convert doc snapshot to doc');
            console.error(error);
            return;
        }
    }
    async toSlice(payload, doc, parent, index) {
        try {
            const snapshot = await this.toSliceSnapshot(payload);
            if (!snapshot)
                return;
            return await this.job.snapshotToSlice(snapshot, doc, parent, index);
        }
        catch (error) {
            console.error('Cannot convert slice snapshot to slice');
            console.error(error);
            return;
        }
    }
}
// Ported from https://github.com/Rich-Harris/estree-walker MIT License
export class ASTWalker {
    constructor() {
        this._visit = async (o) => {
            if (!o.node)
                return;
            this.context._skipChildrenNum = 0;
            this.context._skip = false;
            if (this._enter) {
                await this._enter(o, this.context);
            }
            if (this.context._skip) {
                return;
            }
            for (const key in o.node) {
                const value = o.node[key];
                if (value && typeof value === 'object') {
                    if (Array.isArray(value)) {
                        for (let i = this.context._skipChildrenNum; i < value.length; i += 1) {
                            const item = value[i];
                            if (item !== null &&
                                typeof item === 'object' &&
                                this._isONode(item)) {
                                const nextItem = value[i + 1] ?? null;
                                await this._visit({
                                    node: item,
                                    next: nextItem,
                                    parent: o,
                                    prop: key,
                                    index: i,
                                });
                            }
                        }
                    }
                    else if (this.context._skipChildrenNum === 0 &&
                        this._isONode(value)) {
                        await this._visit({
                            node: value,
                            next: null,
                            parent: o,
                            prop: key,
                            index: null,
                        });
                    }
                }
            }
            if (this._leave) {
                await this._leave(o, this.context);
            }
        };
        this.setEnter = (fn) => {
            this._enter = fn;
        };
        this.setLeave = (fn) => {
            this._leave = fn;
        };
        this.setONodeTypeGuard = (fn) => {
            this._isONode = fn;
        };
        this.walk = async (oNode, tNode) => {
            this.context.openNode(tNode);
            await this._visit({ node: oNode, parent: null, prop: null, index: null });
            assertEquals(this.context.stack.length, 1, 'There are unclosed nodes');
            return this.context.currentNode();
        };
        this.walkONode = async (oNode) => {
            await this._visit({ node: oNode, parent: null, prop: null, index: null });
        };
        this.context = new ASTWalkerContext();
    }
}
//# sourceMappingURL=base.js.map