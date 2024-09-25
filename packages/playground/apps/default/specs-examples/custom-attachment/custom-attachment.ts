import {
  BlockFlavourIdentifier,
  BlockServiceIdentifier,
  type ExtensionType,
  StdIdentifier,
} from '@lumensuite/block-std';
import {
  AttachmentBlockService,
  EdgelessEditorBlockSpecs,
  PageEditorBlockSpecs,
} from '@lumensuite/blocks';

class CustomAttachmentBlockService extends AttachmentBlockService {
  override mounted(): void {
    super.mounted();
    this.maxFileSize = 100 * 1000 * 1000; // 100MB
  }
}

export function getCustomAttachmentSpecs() {
  const pageModeSpecs: ExtensionType[] = [
    ...PageEditorBlockSpecs,
    {
      setup: di => {
        di.override(
          BlockServiceIdentifier('affine:attachment'),
          CustomAttachmentBlockService,
          [StdIdentifier, BlockFlavourIdentifier('affine:attachment')]
        );
      },
    },
  ];
  const edgelessModeSpecs: ExtensionType[] = [
    ...EdgelessEditorBlockSpecs,
    {
      setup: di => {
        di.override(
          BlockServiceIdentifier('affine:attachment'),
          CustomAttachmentBlockService,
          [StdIdentifier, BlockFlavourIdentifier('affine:attachment')]
        );
      },
    },
  ];

  return {
    pageModeSpecs,
    edgelessModeSpecs,
  };
}
