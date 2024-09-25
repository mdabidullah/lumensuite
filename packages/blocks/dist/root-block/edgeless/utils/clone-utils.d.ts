import type { SerializedMindmapElement } from '@lumensuite/affine-block-surface';
import type { FrameBlockProps, SerializedConnectorElement, SerializedGroupElement } from '@lumensuite/affine-model';
import type { BlockStdScope } from '@lumensuite/block-std';
import { ConnectorElementModel } from '@lumensuite/affine-model';
import { type SerializedElement } from '@lumensuite/block-std/gfx';
import { type BlockSnapshot, Job } from '@lumensuite/store';
/**
 * return all elements in the tree of the elements
 */
export declare function getSortedCloneElements(elements: LumenSuite.EdgelessModel[]): import("@lumensuite/block-std/gfx").GfxModel[];
export declare function prepareCloneData(elements: LumenSuite.EdgelessModel[], std: BlockStdScope): Promise<(SerializedElement | BlockSnapshot)[]>;
export declare function serializeElement(element: LumenSuite.EdgelessModel, elements: LumenSuite.EdgelessModel[], job: Job): Promise<SerializedElement | {
    type: "block";
    id: string;
    flavour: string;
    version?: number;
    props: Record<string, unknown>;
    children: BlockSnapshot[];
} | undefined>;
export declare function serializeConnector(connector: ConnectorElementModel, elements: LumenSuite.EdgelessModel[]): SerializedConnectorElement;
/**
 * There are interdependencies between elements,
 * so they must be added in a certain order
 * @param elements edgeless model list
 * @returns sorted edgeless model list
 */
export declare function sortEdgelessElements(elements: LumenSuite.EdgelessModel[]): import("@lumensuite/block-std/gfx").GfxModel[];
/**
 * map connector source & target ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapConnectorIds(props: SerializedConnectorElement, ids: Map<string, string>): SerializedConnectorElement;
/**
 * map group children ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapGroupIds(props: SerializedGroupElement, ids: Map<string, string>): SerializedGroupElement;
/**
 * map frame children ids
 * @param props frame block props
 * @param ids old element id to new element id map
 * @returns updated frame block props
 */
export declare function mapFrameIds(props: FrameBlockProps, ids: Map<string, string>): FrameBlockProps;
/**
 * map mindmap children & parent ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapMindmapIds(props: SerializedMindmapElement, ids: Map<string, string>): SerializedMindmapElement;
export declare function getElementProps(element: LumenSuite.SurfaceModel, ids: Map<string, string>): SerializedElement;
//# sourceMappingURL=clone-utils.d.ts.map