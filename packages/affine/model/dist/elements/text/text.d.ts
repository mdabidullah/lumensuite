import type { BaseElementProps } from '@blocksuite/block-std/gfx';
import type { IVec, SerializedXYWH } from '@blocksuite/global/utils';
import { type Color, FontFamily, FontStyle, FontWeight, TextAlign, type TextStyleProps } from '@blocksuite/affine-model';
import { GfxPrimitiveElementModel } from '@blocksuite/block-std/gfx';
import { Bound } from '@blocksuite/global/utils';
import { type Y } from '@blocksuite/store';
export type TextElementProps = BaseElementProps & {
    text: Y.Text;
    hasMaxWidth?: boolean;
} & Omit<TextStyleProps, 'fontWeight' | 'fontStyle'> & Partial<Pick<TextStyleProps, 'fontWeight' | 'fontStyle'>>;
export declare class TextElementModel extends GfxPrimitiveElementModel<TextElementProps> {
    get type(): string;
    static propsToY(props: Record<string, unknown>): Record<string, unknown>;
    containsBound(bounds: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): import("@blocksuite/global/utils").PointLocation[] | null;
    getNearestPoint(point: IVec): IVec;
    includesPoint(x: number, y: number): boolean;
    accessor color: Color;
    accessor fontFamily: FontFamily;
    accessor fontSize: number;
    accessor fontStyle: FontStyle;
    accessor fontWeight: FontWeight;
    accessor hasMaxWidth: boolean;
    accessor rotate: number;
    accessor text: Y.Text;
    accessor textAlign: TextAlign;
    accessor xywh: SerializedXYWH;
}
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
            text: TextElementModel;
        }
        interface EdgelessTextModelMap {
            text: TextElementModel;
        }
    }
}
//# sourceMappingURL=text.d.ts.map