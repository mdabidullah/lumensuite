import { multiPlayersColor } from './color-picker.js';
export class RemoteColorManager {
    get awarenessStore() {
        return this.host.doc.collection.awarenessStore;
    }
    get rootService() {
        return this.host.std.getService('affine:page');
    }
    constructor(host) {
        this.host = host;
        const sessionColor = this.rootService.editPropsStore.getStorage('remoteColor');
        if (sessionColor) {
            this.awarenessStore.awareness.setLocalStateField('color', sessionColor);
            return;
        }
        const pickColor = multiPlayersColor.pick();
        this.awarenessStore.awareness.setLocalStateField('color', pickColor);
        this.rootService.editPropsStore.setStorage('remoteColor', pickColor);
    }
    get(id) {
        const awarenessColor = this.awarenessStore.getStates().get(id)?.color;
        if (awarenessColor) {
            return awarenessColor;
        }
        if (id !== this.awarenessStore.awareness.clientID)
            return null;
        const sessionColor = this.rootService.editPropsStore.getStorage('remoteColor');
        if (sessionColor) {
            this.awarenessStore.awareness.setLocalStateField('color', sessionColor);
            return sessionColor;
        }
        const pickColor = multiPlayersColor.pick();
        this.awarenessStore.awareness.setLocalStateField('color', pickColor);
        this.rootService.editPropsStore.setStorage('remoteColor', pickColor);
        return pickColor;
    }
}
//# sourceMappingURL=remote-color-manager.js.map