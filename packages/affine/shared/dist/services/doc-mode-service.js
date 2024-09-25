import { Extension, StdIdentifier } from '@lumensuite/block-std';
import { createIdentifier } from '@lumensuite/global/di';
import { noop, Slot } from '@lumensuite/global/utils';
const DEFAULT_MODE = 'page';
export const DocModeProvider = createIdentifier('AffineDocModeService');
const modeMap = new Map();
const slotMap = new Map();
export class DocModeService extends Extension {
    constructor(std) {
        super();
        this.std = std;
    }
    static setup(di) {
        di.addImpl(DocModeProvider, DocModeService, [StdIdentifier]);
    }
    getEditorMode() {
        return null;
    }
    getPrimaryMode(id) {
        return modeMap.get(id) ?? DEFAULT_MODE;
    }
    onPrimaryModeChange(handler, id) {
        if (!slotMap.get(id)) {
            slotMap.set(id, new Slot());
        }
        return slotMap.get(id).on(handler);
    }
    setEditorMode(mode) {
        noop(mode);
    }
    setPrimaryMode(mode, id) {
        modeMap.set(id, mode);
        slotMap.get(id)?.emit(mode);
    }
    togglePrimaryMode(id) {
        const mode = this.getPrimaryMode(id) === 'page' ? 'edgeless' : 'page';
        this.setPrimaryMode(mode, id);
        return mode;
    }
}
//# sourceMappingURL=doc-mode-service.js.map