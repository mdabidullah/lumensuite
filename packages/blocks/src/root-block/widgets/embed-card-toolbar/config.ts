import type { MenuItemGroup } from '@lumensuite/affine-components/toolbar';

import {
  CopyIcon,
  DeleteIcon,
  DuplicateIcon,
  RefreshIcon,
} from '@lumensuite/affine-components/icons';
import { toast } from '@lumensuite/affine-components/toast';
import { getBlockProps } from '@lumensuite/affine-shared/utils';
import { Slice } from '@lumensuite/store';

import type { EmbedCardToolbarContext } from './context.js';

import {
  isAttachmentBlock,
  isBookmarkBlock,
  isEmbeddedLinkBlock,
  isImageBlock,
} from '../../edgeless/utils/query.js';

export const BUILT_IN_GROUPS: MenuItemGroup<EmbedCardToolbarContext>[] = [
  {
    type: 'clipboard',
    items: [
      {
        type: 'copy',
        label: 'Copy',
        icon: CopyIcon,
        disabled: ({ doc }) => doc.readonly,
        action: async ({ host, doc, std, blockComponent, close }) => {
          const slice = Slice.fromModels(doc, [blockComponent.model]);
          await std.clipboard.copySlice(slice);
          toast(host, 'Copied link to clipboard');
          close();
        },
      },
      {
        type: 'duplicate',
        label: 'Duplicate',
        icon: DuplicateIcon,
        disabled: ({ doc }) => doc.readonly,
        action: ({ doc, blockComponent, close }) => {
          const model = blockComponent.model;
          const blockProps = getBlockProps(model);
          const { width, height, xywh, rotate, zIndex, ...duplicateProps } =
            blockProps;

          const parent = doc.getParent(model);
          const index = parent?.children.indexOf(model);
          doc.addBlock(
            model.flavour as LumenSuite.Flavour,
            duplicateProps,
            parent,
            index
          );
          close();
        },
      },
      {
        type: 'reload',
        label: 'Reload',
        icon: RefreshIcon,
        disabled: ({ doc }) => doc.readonly,
        action: ({ blockComponent, close }) => {
          blockComponent?.refreshData();
          close();
        },
        when: ({ blockComponent }) => {
          const model = blockComponent.model;

          return (
            !!model &&
            (isImageBlock(model) ||
              isBookmarkBlock(model) ||
              isAttachmentBlock(model) ||
              isEmbeddedLinkBlock(model))
          );
        },
      },
    ],
  },
  {
    type: 'delete',
    items: [
      {
        type: 'delete',
        label: 'Delete',
        icon: DeleteIcon,
        disabled: ({ doc }) => doc.readonly,
        action: ({ doc, blockComponent, close }) => {
          doc.deleteBlock(blockComponent.model);
          close();
        },
      },
    ],
  },
];
