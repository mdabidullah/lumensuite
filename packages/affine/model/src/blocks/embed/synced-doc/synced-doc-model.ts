import { BlockModel } from '@lumensuite/store';

import type { EmbedCardStyle } from '../../../utils/index.js';

import { defineEmbedModel } from '../../../utils/index.js';

export const EmbedSyncedDocStyles: EmbedCardStyle[] = ['syncedDoc'];

export type EmbedSyncedDocBlockProps = {
  pageId: string;
  style: EmbedCardStyle;
  caption?: string | null;
  scale?: number;
};

export class EmbedSyncedDocModel extends defineEmbedModel<EmbedSyncedDocBlockProps>(
  BlockModel
) {}

declare global {
  namespace LumenSuite {
    interface EdgelessBlockModelMap {
      'affine:embed-synced-doc': EmbedSyncedDocModel;
    }
    interface BlockModels {
      'affine:embed-synced-doc': EmbedSyncedDocModel;
    }
  }
}
