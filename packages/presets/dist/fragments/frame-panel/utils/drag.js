import { on, once, } from '@lumensuite/blocks';
import { FrameCard } from '../card/frame-card.js';
/**
 * start drag frame cards
 * @param frames frames to drag
 */
export function startDragging(frames, options) {
    const { document, domHost, container, onDragMove, onDragEnd, frameElementHeight, framePanelBody, frameListContainer, start, edgeless, doc, editorHost, } = options;
    const cardElements = frames
        .slice(frames.length - 2, frames.length)
        .map((frame, idx, arr) => {
        const el = new FrameCard();
        el.edgeless = edgeless;
        el.doc = doc;
        el.host = editorHost;
        el.frame = frame.frame;
        el.cardIndex = frame.cardIndex;
        el.frameIndex = frame.frameIndex;
        el.status = 'dragging';
        el.stackOrder = arr.length - 1 - idx;
        el.pos = start;
        el.width = options.width;
        if (frames.length > 1 && el.stackOrder === 0)
            el.draggingCardNumber = frames.length;
        return el;
    });
    const maskElement = createMaskElement(document);
    const listContainerRect = framePanelBody.getBoundingClientRect();
    const children = Array.from(frameListContainer.children);
    const computedStyle = getComputedStyle(frameListContainer);
    const frameListContainerGap = parseInt(computedStyle.getPropertyValue('gap')) ?? 16;
    let idx;
    let indicatorTranslateY;
    container.renderRoot.append(maskElement);
    container.renderRoot.append(...cardElements);
    const insideListContainer = (e) => {
        return (e.clientX >= listContainerRect.left &&
            e.clientX <= listContainerRect.right &&
            e.clientY >= listContainerRect.top &&
            e.clientY <= listContainerRect.bottom);
    };
    const disposeMove = on(container, 'mousemove', e => {
        cardElements.forEach(el => {
            el.pos = {
                x: e.clientX,
                y: e.clientY,
            };
        });
        if (!insideListContainer(e)) {
            idx = undefined;
            onDragMove?.(idx, 0);
            return;
        }
        idx = 0;
        for (const card of children) {
            if (!card.frame)
                break;
            const topBoundary = listContainerRect.top +
                card.offsetTop -
                framePanelBody.scrollTop -
                frameListContainerGap / 2;
            const midBoundary = topBoundary + card.offsetHeight / 2;
            const bottomBoundary = topBoundary + card.offsetHeight + frameListContainerGap;
            if (e.clientY >= topBoundary && e.clientY <= bottomBoundary) {
                idx = e.clientY > midBoundary ? idx + 1 : idx;
                indicatorTranslateY =
                    idx * (frameElementHeight + frameListContainerGap) -
                        frameListContainerGap / 2;
                onDragMove?.(idx, indicatorTranslateY);
                return;
            }
            ++idx;
        }
        onDragMove?.(idx);
    });
    let ended = false;
    const dragEnd = () => {
        if (ended)
            return;
        ended = true;
        cardElements.forEach(child => child.remove());
        maskElement.remove();
        disposeMove();
        onDragEnd?.(idx);
    };
    once(domHost, 'mouseup', dragEnd);
}
function createMaskElement(doc) {
    const mask = doc.createElement('div');
    mask.style.height = '100vh';
    mask.style.width = '100vw';
    mask.style.position = 'fixed';
    mask.style.left = '0';
    mask.style.top = '0';
    mask.style.zIndex = 'calc(var(--affine-z-index-popover, 0) + 3)';
    mask.style.cursor = 'grabbing';
    return mask;
}
//# sourceMappingURL=drag.js.map