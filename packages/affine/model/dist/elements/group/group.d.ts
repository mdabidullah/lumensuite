import type { BaseElementProps, SerializedElement } from '@lumensuite/block-std/gfx';
import type { Y } from '@lumensuite/store';
import { GfxGroupLikeElementModel } from '@lumensuite/block-std/gfx';
import { Bound, type IVec, type PointLocation } from '@lumensuite/global/utils';
type GroupElementProps = BaseElementProps & {
    children: Y.Map<boolean>;
    title: Y.Text;
};
export type SerializedGroupElement = SerializedElement & {
    title: string;
    children: Record<string, boolean>;
};
export declare class GroupElementModel extends GfxGroupLikeElementModel<GroupElementProps> {
    get rotate(): number;
    set rotate(_: number);
    get type(): string;
    static propsToY(props: Record<string, unknown>): GroupElementProps;
    addChild(element: LumenSuite.EdgelessModel | string): void;
    containsBound(bound: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    removeChild(element: LumenSuite.EdgelessModel | string): void;
    serialize(): SerializedGroupElement;
    accessor children: Y.Map<boolean>;
    accessor showTitle: boolean;
    accessor title: Y.Text;
}
declare global {
    namespace LumenSuite {
        interface SurfaceGroupLikeModelMap {
            group: GroupElementModel;
        }
        interface SurfaceElementModelMap {
            group: GroupElementModel;
        }
    }
}
export {};
//# sourceMappingURL=group.d.ts.map