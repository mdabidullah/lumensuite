import type { EditorHost } from '@lumensuite/block-std';
export declare class RemoteColorManager {
    readonly host: EditorHost;
    private get awarenessStore();
    private get rootService();
    constructor(host: EditorHost);
    get(id: number): string | null;
}
//# sourceMappingURL=remote-color-manager.d.ts.map