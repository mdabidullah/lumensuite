import type { GfxElementGeometry } from '@lumensuite/block-std/gfx';
import type { SerializedXYWH } from '@lumensuite/global/utils';

import { BlockModel, defineBlockSchema } from '@lumensuite/store';

import {
  FontFamily,
  FontStyle,
  FontWeight,
  TextAlign,
  type TextStyleProps,
} from '../../consts/index.js';
import { GfxCompatible } from '../../utils/index.js';

type EdgelessTextProps = {
  xywh: SerializedXYWH;
  index: string;
  scale: number;
  rotate: number;
  hasMaxWidth: boolean;
} & Omit<TextStyleProps, 'fontSize'>;

export const EdgelessTextBlockSchema = defineBlockSchema({
  flavour: 'affine:edgeless-text',
  props: (): EdgelessTextProps => ({
    xywh: '[0,0,16,16]',
    index: 'a0',
    color: '#000000',
    fontFamily: FontFamily.Inter,
    fontStyle: FontStyle.Normal,
    fontWeight: FontWeight.Regular,
    textAlign: TextAlign.Left,
    scale: 1,
    rotate: 0,
    hasMaxWidth: false,
  }),
  metadata: {
    version: 1,
    role: 'hub',
    parent: ['affine:surface'],
    children: [
      'affine:paragraph',
      'affine:list',
      'affine:code',
      'affine:image',
      'affine:bookmark',
      'affine:attachment',
      'affine:embed-!(synced-doc)',
      'affine:latex',
    ],
  },
  toModel: () => {
    return new EdgelessTextBlockModel();
  },
});

export class EdgelessTextBlockModel
  extends GfxCompatible<EdgelessTextProps>(BlockModel)
  implements GfxElementGeometry {}

declare global {
  namespace LumenSuite {
    interface BlockModels {
      'affine:edgeless-text': EdgelessTextBlockModel;
    }

    interface EdgelessBlockModelMap {
      'affine:edgeless-text': EdgelessTextBlockModel;
    }

    interface EdgelessTextModelMap {
      'edgeless-text': EdgelessTextBlockModel;
    }
  }
}
