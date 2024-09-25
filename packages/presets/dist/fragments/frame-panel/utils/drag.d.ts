import type { EditorHost } from '@lumensuite/block-std';
import type { Doc } from '@lumensuite/store';
import { type EdgelessRootBlockComponent, type FrameBlockModel } from '@lumensuite/blocks';
import type { FramePanelBody } from '../body/frame-panel-body.js';
import { FrameCard } from '../card/frame-card.js';
/**
 * start drag frame cards
 * @param frames frames to drag
 */
export declare function startDragging(frames: {
    frame: FrameBlockModel;
    element: FrameCard;
    cardIndex: number;
    frameIndex: string;
}[], options: {
    width: number;
    onDragEnd?: (insertIndex?: number) => void;
    onDragMove?: (insertIdx?: number, indicatorTranslateY?: number) => void;
    framePanelBody: HTMLElement;
    frameListContainer: HTMLElement;
    frameElementHeight: number;
    document: Document;
    domHost: Document | HTMLElement;
    container: FramePanelBody;
    start: {
        x: number;
        y: number;
    };
    edgeless: EdgelessRootBlockComponent | null;
    doc: Doc;
    editorHost: EditorHost;
}): void;
//# sourceMappingURL=drag.d.ts.map