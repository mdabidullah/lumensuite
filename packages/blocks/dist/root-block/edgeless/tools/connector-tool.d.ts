import type { ConnectorMode } from '@lumensuite/affine-model';
import type { PointerEventState } from '@lumensuite/block-std';
import type { IVec } from '@lumensuite/global/utils';
import type { EdgelessTool } from '../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type ConnectorTool = {
    type: 'connector';
    mode: ConnectorMode;
};
export declare class ConnectorToolController extends EdgelessToolController<ConnectorTool> {
    private _allowCancel;
    private _connector;
    private _mode;
    private _source;
    private _sourceBounds;
    private _sourceLocations;
    private _startPoint;
    readonly tool: ConnectorTool;
    get connector(): import("@lumensuite/affine-block-surface").ConnectionOverlay;
    private _createConnector;
    afterModeSwitch(): void;
    beforeModeSwitch(edgelessTool: EdgelessTool): void;
    findTargetByPoint(point: IVec): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerDragEnd(): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragStart(): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerTripleClick(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    quickConnect(point: IVec, element: LumenSuite.EdgelessModel): void;
}
declare global {
    namespace LumenSuite {
        interface EdgelessToolMap {
            connector: ConnectorToolController;
        }
    }
}
//# sourceMappingURL=connector-tool.d.ts.map