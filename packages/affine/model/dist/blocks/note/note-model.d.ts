import type { GfxElementGeometry } from '@lumensuite/block-std/gfx';
import type { SerializedXYWH } from '@lumensuite/global/utils';
import { Bound } from '@lumensuite/global/utils';
import { type Color, NoteDisplayMode, type StrokeStyle } from '../../consts/index.js';
export declare const NoteBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<NoteProps>;
        flavour: "affine:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: NoteProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<NoteProps>) | undefined;
};
type NoteProps = {
    xywh: SerializedXYWH;
    background: Color;
    index: string;
    displayMode: NoteDisplayMode;
    edgeless: NoteEdgelessProps;
    /**
     * @deprecated
     * use `displayMode` instead
     * hidden:true -> displayMode:NoteDisplayMode.EdgelessOnly:
     *  means the note is visible only in the edgeless mode
     * hidden:false -> displayMode:NoteDisplayMode.DocAndEdgeless:
     *  means the note is visible in the doc and edgeless mode
     */
    hidden: boolean;
};
type NoteEdgelessProps = {
    style: {
        borderRadius: number;
        borderSize: number;
        borderStyle: StrokeStyle;
        shadowType: string;
    };
    collapse?: boolean;
    collapsedHeight?: number;
    scale?: number;
};
declare const NoteBlockModel_base: {
    new (): import("@lumensuite/block-std/gfx").GfxBlockElementModel<NoteProps>;
};
export declare class NoteBlockModel extends NoteBlockModel_base implements GfxElementGeometry {
    private _isSelectable;
    containsBound(bounds: Bound): boolean;
    includesPoint(x: number, y: number): boolean;
    intersectsBound(bound: Bound): boolean;
}
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'affine:note': NoteBlockModel;
        }
        interface EdgelessBlockModelMap {
            'affine:note': NoteBlockModel;
        }
    }
}
export {};
//# sourceMappingURL=note-model.d.ts.map