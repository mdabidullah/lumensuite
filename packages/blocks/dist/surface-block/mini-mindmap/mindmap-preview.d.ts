import type { MindmapElementModel, SurfaceBlockModel } from '@lumensuite/affine-block-surface';
import { MindmapStyle } from '@lumensuite/affine-model';
import { type EditorHost } from '@lumensuite/block-std';
import { type Doc } from '@lumensuite/store';
import { LitElement, nothing } from 'lit';
declare const MiniMindmapPreview_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class MiniMindmapPreview extends MiniMindmapPreview_base {
    static styles: import("lit").CSSResult;
    doc?: Doc;
    mindmapId?: string;
    surface?: SurfaceBlockModel;
    get _mindmap(): MindmapElementModel | null;
    private _createTemporaryDoc;
    private _switchStyle;
    private _toMindmapNode;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    accessor answer: string;
    accessor ctx: {
        get(): Record<string, unknown>;
        set(data: Record<string, unknown>): void;
    };
    accessor height: number;
    accessor host: EditorHost;
    accessor mindmapStyle: MindmapStyle | undefined;
    accessor portalHost: EditorHost;
    accessor templateShow: boolean;
}
type Node = {
    text: string;
    children: Node[];
};
export declare const markdownToMindmap: (answer: string, doc: Doc) => Node | null;
export {};
//# sourceMappingURL=mindmap-preview.d.ts.map