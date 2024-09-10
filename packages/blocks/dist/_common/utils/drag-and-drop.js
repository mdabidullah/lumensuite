import { getClosestBlockComponentByElement, matchFlavours, } from '@blocksuite/affine-shared/utils';
import { Rect } from '@blocksuite/global/utils';
import { assertExists } from '@blocksuite/global/utils';
import { DropFlags, getDropRectByPoint, getRectByBlockComponent, } from './query.js';
/**
 * Calculates the drop target.
 */
export function calcDropTarget(point, model, element, draggingElements = [], scale = 1, flavour = null // for block-hub
) {
    const schema = model.doc.getSchemaByFlavour('affine:database');
    assertExists(schema);
    const children = schema.model.children ?? [];
    let shouldAppendToDatabase = true;
    if (children.length) {
        if (draggingElements.length) {
            shouldAppendToDatabase = draggingElements
                .map(el => el.model)
                .every(m => children.includes(m.flavour));
        }
        else if (flavour) {
            shouldAppendToDatabase = children.includes(flavour);
        }
    }
    if (!shouldAppendToDatabase && !matchFlavours(model, ['affine:database'])) {
        const databaseBlockComponent = element.closest('affine-database');
        if (databaseBlockComponent) {
            element = databaseBlockComponent;
            model = databaseBlockComponent.model;
        }
    }
    let type = 'none';
    const height = 3 * scale;
    const { rect: domRect, flag } = getDropRectByPoint(point, model, element);
    if (flag === DropFlags.EmptyDatabase) {
        // empty database
        const rect = Rect.fromDOMRect(domRect);
        rect.top -= height / 2;
        rect.height = height;
        type = 'database';
        return {
            type,
            rect,
            modelState: {
                model,
                rect: domRect,
                element: element,
            },
        };
    }
    else if (flag === DropFlags.Database) {
        // not empty database
        const distanceToTop = Math.abs(domRect.top - point.y);
        const distanceToBottom = Math.abs(domRect.bottom - point.y);
        const before = distanceToTop < distanceToBottom;
        type = before ? 'before' : 'after';
        return {
            type,
            rect: Rect.fromLWTH(domRect.left, domRect.width, (before ? domRect.top - 1 : domRect.bottom) - height / 2, height),
            modelState: {
                model,
                rect: domRect,
                element: element,
            },
        };
    }
    const distanceToTop = Math.abs(domRect.top - point.y);
    const distanceToBottom = Math.abs(domRect.bottom - point.y);
    const before = distanceToTop < distanceToBottom;
    type = before ? 'before' : 'after';
    let offsetY = 4;
    if (type === 'before') {
        // before
        let prev;
        let prevRect;
        prev = element.previousElementSibling;
        if (prev) {
            if (draggingElements.length &&
                prev === draggingElements[draggingElements.length - 1]) {
                type = 'none';
            }
            else {
                prevRect = getRectByBlockComponent(prev);
            }
        }
        else {
            prev = element.parentElement?.previousElementSibling;
            if (prev) {
                prevRect = prev.getBoundingClientRect();
            }
        }
        if (prevRect) {
            offsetY = (domRect.top - prevRect.bottom) / 2;
        }
    }
    else {
        // after
        let next;
        let nextRect;
        next = element.nextElementSibling;
        if (next) {
            if (draggingElements.length && next === draggingElements[0]) {
                type = 'none';
                next = null;
            }
        }
        else {
            next = getClosestBlockComponentByElement(element.parentElement)?.nextElementSibling;
        }
        if (next) {
            nextRect = getRectByBlockComponent(next);
            offsetY = (nextRect.top - domRect.bottom) / 2;
        }
    }
    if (type === 'none')
        return null;
    let top = domRect.top;
    if (type === 'before') {
        top -= offsetY;
    }
    else {
        top += domRect.height + offsetY;
    }
    return {
        type,
        rect: Rect.fromLWTH(domRect.left, domRect.width, top - height / 2, height),
        modelState: {
            model,
            rect: domRect,
            element: element,
        },
    };
}
//# sourceMappingURL=drag-and-drop.js.map