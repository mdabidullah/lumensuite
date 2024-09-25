import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
function makeNewNameWhenConflict(names, name) {
    let i = 1;
    const ext = name.split('.').at(-1) ?? '';
    let newName = name.replace(new RegExp(`.${ext}$`), ` (${i}).${ext}`);
    while (names.has(newName)) {
        newName = name.replace(new RegExp(`.${ext}$`), ` (${i}).${ext}`);
        i++;
    }
    return newName;
}
export class AssetsManager {
    constructor(options) {
        this._assetsMap = new Map();
        this._names = new Set();
        this._pathBlobIdMap = new Map();
        this._blob = options.blob;
    }
    cleanup() {
        this._assetsMap.clear();
        this._names.clear();
    }
    getAssets() {
        return this._assetsMap;
    }
    getPathBlobIdMap() {
        return this._pathBlobIdMap;
    }
    isEmpty() {
        return this._assetsMap.size === 0;
    }
    async readFromBlob(blobId) {
        let blob = await this._blob.get(blobId);
        if (!blob) {
            console.error(`Blob ${blobId} not found in blob manager`);
            return;
        }
        const name = blob.name;
        if (name && this._names.has(name)) {
            const newName = makeNewNameWhenConflict(this._names, name);
            this._names.add(newName);
            blob = new File([blob], newName, {
                type: blob.type,
            });
        }
        this._assetsMap.set(blobId, blob);
    }
    async writeToBlob(blobId) {
        const blob = this._assetsMap.get(blobId);
        if (!blob) {
            throw new LumenSuiteError(ErrorCode.TransformerError, 'Blob ${blobId} not found in assets manager');
        }
        const exists = (await this._blob.get(blobId)) !== null;
        if (exists) {
            return;
        }
        await this._blob.set(blobId, blob);
    }
}
//# sourceMappingURL=assets.js.map