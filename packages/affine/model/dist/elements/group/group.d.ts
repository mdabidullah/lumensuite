import type { BaseElementProps, SerializedElement } from '@blocksuite/block-std/gfx';
import type { Y } from '@blocksuite/store';
import { GfxGroupLikeElementModel } from '@blocksuite/block-std/gfx';
import { Bound, type IVec, type PointLocation } from '@blocksuite/global/utils';
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
    addChild(element: BlockSuite.EdgelessModel | string): void;
    containsBound(bound: Bound): boolean;
    getLineIntersections(start: IVec, end: IVec): PointLocation[] | null;
    removeChild(element: BlockSuite.EdgelessModel | string): void;
    serialize(): SerializedGroupElement;
    accessor children: Y.Map<boolean>;
    accessor showTitle: boolean;
    accessor title: Y.Text;
}
declare global {
    namespace BlockSuite {
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