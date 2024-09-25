import type { XYWH } from '@lumensuite/global/utils';

import {
  CommonUtils,
  type Options,
  Overlay,
  type RoughCanvas,
} from '@lumensuite/affine-block-surface';
import {
  type Connection,
  getShapeRadius,
  getShapeType,
  GroupElementModel,
  type NoteBlockModel,
  ShapeElementModel,
  type ShapeName,
  type ShapeStyle,
} from '@lumensuite/affine-model';
import { assertExists, Bound } from '@lumensuite/global/utils';
import { DocCollection } from '@lumensuite/store';

import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';

import { type Shape, ShapeFactory } from '../../utils/tool-overlay.js';

export enum Direction {
  Right,
  Bottom,
  Left,
  Top,
}

export const PANEL_WIDTH = 136;
export const PANEL_HEIGHT = 108;

export const MAIN_GAP = 100;
export const SECOND_GAP = 20;
export const DEFAULT_NOTE_OVERLAY_HEIGHT = 110;
export const DEFAULT_TEXT_WIDTH = 116;
export const DEFAULT_TEXT_HEIGHT = 24;

export type TARGET_SHAPE_TYPE = ShapeName;
export type AUTO_COMPLETE_TARGET_TYPE =
  | TARGET_SHAPE_TYPE
  | 'text'
  | 'note'
  | 'frame';

class AutoCompleteTargetOverlay extends Overlay {
  xywh: XYWH;

  constructor(xywh: XYWH) {
    super();
    this.xywh = xywh;
  }

  override render(_ctx: CanvasRenderingContext2D, _rc: RoughCanvas) {}
}

export class AutoCompleteTextOverlay extends AutoCompleteTargetOverlay {
  constructor(xywh: XYWH) {
    super(xywh);
  }

  override render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas) {
    const [x, y, w, h] = this.xywh;

    ctx.globalAlpha = 0.4;
    ctx.strokeStyle = '#1e96eb';
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, w, h);

    // fill text placeholder
    ctx.font = '15px sans-serif';
    ctx.fillStyle = '#C0BFC1';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText("Type '/' to insert", x + w / 2, y + h / 2);
  }
}

export class AutoCompleteNoteOverlay extends AutoCompleteTargetOverlay {
  private _background: string;

  constructor(xywh: XYWH, background: string) {
    super(xywh);
    this._background = background;
  }

  override render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas) {
    const [x, y, w, h] = this.xywh;

    ctx.globalAlpha = 0.4;
    ctx.fillStyle = this._background;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.10)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // fill text placeholder
    ctx.font = '15px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText("Type '/' for command", x + 24, y + h / 2);
  }
}

export class AutoCompleteFrameOverlay extends AutoCompleteTargetOverlay {
  private _strokeColor;

  constructor(xywh: XYWH, strokeColor: string) {
    super(xywh);
    this._strokeColor = strokeColor;
  }

  override render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas) {
    const [x, y, w, h] = this.xywh;
    // frame title background
    const titleWidth = 72;
    const titleHeight = 30;
    const titleY = y - titleHeight - 10;

    ctx.globalAlpha = 0.4;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.roundRect(x, titleY, titleWidth, titleHeight, 4);
    ctx.closePath();
    ctx.fill();

    // fill title text
    ctx.globalAlpha = 1;
    ctx.font = '14px sans-serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Frame', x + titleWidth / 2, titleY + titleHeight / 2);

    // frame stroke
    ctx.globalAlpha = 0.4;
    ctx.strokeStyle = this._strokeColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.closePath();
    ctx.stroke();
  }
}

export class AutoCompleteShapeOverlay extends Overlay {
  private _shape: Shape;

  constructor(
    xywh: XYWH,
    type: TARGET_SHAPE_TYPE,
    options: Options,
    shapeStyle: ShapeStyle
  ) {
    super();
    this._shape = ShapeFactory.createShape(xywh, type, options, shapeStyle);
  }

  override render(ctx: CanvasRenderingContext2D, rc: RoughCanvas) {
    ctx.globalAlpha = 0.4;
    this._shape.draw(ctx, rc);
  }
}

export function nextBound(
  type: Direction,
  curShape: ShapeElementModel,
  elements: ShapeElementModel[]
) {
  const bound = Bound.deserialize(curShape.xywh);
  const { x, y, w, h } = bound;
  let nextBound: Bound;
  let angle = 0;
  switch (type) {
    case Direction.Right:
      angle = 0;
      break;
    case Direction.Bottom:
      angle = 90;
      break;
    case Direction.Left:
      angle = 180;
      break;
    case Direction.Top:
      angle = 270;
      break;
  }
  angle = CommonUtils.normalizeDegAngle(angle + curShape.rotate);

  if (angle >= 45 && angle <= 135) {
    nextBound = new Bound(x, y + h + MAIN_GAP, w, h);
  } else if (angle >= 135 && angle <= 225) {
    nextBound = new Bound(x - w - MAIN_GAP, y, w, h);
  } else if (angle >= 225 && angle <= 315) {
    nextBound = new Bound(x, y - h - MAIN_GAP, w, h);
  } else {
    nextBound = new Bound(x + w + MAIN_GAP, y, w, h);
  }

  function isValidBound(bound: Bound) {
    return !elements.some(a => bound.isOverlapWithBound(a.elementBound));
  }

  let count = 0;
  function findValidBound() {
    count++;
    const number = Math.ceil(count / 2);
    const next = nextBound.clone();
    switch (type) {
      case Direction.Right:
      case Direction.Left:
        next.y =
          count % 2 === 1
            ? nextBound.y - (h + SECOND_GAP) * number
            : nextBound.y + (h + SECOND_GAP) * number;
        break;
      case Direction.Bottom:
      case Direction.Top:
        next.x =
          count % 2 === 1
            ? nextBound.x - (w + SECOND_GAP) * number
            : nextBound.x + (w + SECOND_GAP) * number;
        break;
    }
    if (isValidBound(next)) return next;
    return findValidBound();
  }

  return isValidBound(nextBound) ? nextBound : findValidBound();
}

export function getPosition(type: Direction) {
  let startPosition: Connection['position'];
  let endPosition: Connection['position'];

  switch (type) {
    case Direction.Right:
      startPosition = [1, 0.5];
      endPosition = [0, 0.5];
      break;
    case Direction.Bottom:
      startPosition = [0.5, 1];
      endPosition = [0.5, 0];
      break;
    case Direction.Left:
      startPosition = [0, 0.5];
      endPosition = [1, 0.5];
      break;
    case Direction.Top:
      startPosition = [0.5, 0];
      endPosition = [0.5, 1];
      break;
  }
  return { startPosition, endPosition };
}

export function isShape(element: unknown): element is ShapeElementModel {
  return element instanceof ShapeElementModel;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function createEdgelessElement(
  edgeless: EdgelessRootBlockComponent,
  current: ShapeElementModel | NoteBlockModel,
  bound: Bound
) {
  let id;
  const { service } = edgeless;

  if (isShape(current)) {
    id = service.addElement(current.type, {
      ...current.serialize(),
      text: new DocCollection.Y.Text(),
      xywh: bound.serialize(),
    });
  } else {
    const { doc } = edgeless;
    id = doc.addBlock(
      'affine:note',
      {
        background: current.background,
        displayMode: current.displayMode,
        edgeless: current.edgeless,
        xywh: bound.serialize(),
      },
      edgeless.model.id
    );
    const note = doc.getBlockById(id) as NoteBlockModel;
    assertExists(note);
    doc.updateBlock(note, () => {
      note.edgeless.collapse = true;
    });
    doc.addBlock('affine:paragraph', {}, note.id);
  }
  const group = current.group;
  if (group instanceof GroupElementModel) {
    group.addChild(id);
  }
  return id;
}

export function createShapeElement(
  edgeless: EdgelessRootBlockComponent,
  current: ShapeElementModel | NoteBlockModel,
  targetType: TARGET_SHAPE_TYPE
) {
  const service = edgeless.service;
  const id = service.addElement('shape', {
    shapeType: getShapeType(targetType),
    radius: getShapeRadius(targetType),
    text: new DocCollection.Y.Text(),
  });
  const group = current.group;
  if (group instanceof GroupElementModel) {
    group.addChild(id);
  }
  return id;
}
