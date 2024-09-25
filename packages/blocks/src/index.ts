/// <reference types="@lumensuite/global" />
import '@lumensuite/affine-block-paragraph';
import '@lumensuite/affine-block-list';
import '@lumensuite/affine-block-surface';
import '@lumensuite/affine-components/context-menu';
import '@lumensuite/affine-components/rich-text';
import '@lumensuite/affine-components/toolbar';
import { deserializeXYWH, Point } from '@lumensuite/global/utils';

import { matchFlavours } from './_common/utils/index.js';
import './code-block/highlight/affine-code-unit.js';
import './database-block/index.js';
import './divider-block/index.js';
import './frame-block/index.js';
import './image-block/index.js';
import './note-block/index.js';
import { splitElements } from './root-block/edgeless/utils/clipboard-utils.js';
import { isCanvasElement } from './root-block/edgeless/utils/query.js';
// manual import to avoid being tree-shaken
import './root-block/index.js';
import './surface-ref-block/index.js';

export * from './_common/adapters/index.js';

export * from './_common/components/ai-item/index.js';
export type { NotificationService } from './_common/components/index.js';
export { scrollbarStyle } from './_common/components/index.js';
export { type NavigatorMode } from './_common/edgeless/frame/consts.js';
export { EmbedBlockComponent } from './_common/embed-block-helper/index.js';
export * from './_common/test-utils/test-utils.js';
export * from './_common/transformers/index.js';
export { type AbstractEditor } from './_common/types.js';
export * from './_specs/index.js';
export * from './attachment-block/index.js';
export * from './bookmark-block/index.js';
export * from './code-block/index.js';
export * from './data-view-block/index.js';
export * from './database-block/index.js';
export * from './divider-block/index.js';
export * from './edgeless-text-block/index.js';
export * from './embed-figma-block/index.js';
export * from './embed-github-block/index.js';
export * from './embed-html-block/index.js';
export * from './embed-linked-doc-block/index.js';
export * from './embed-loom-block/index.js';
export * from './embed-synced-doc-block/index.js';
export * from './embed-youtube-block/index.js';
export * from './frame-block/index.js';
export * from './image-block/index.js';
export * from './latex-block/index.js';
export * from './note-block/index.js';
export { EdgelessTemplatePanel } from './root-block/edgeless/components/toolbar/template/template-panel.js';
export type {
  Template,
  TemplateCategory,
  TemplateManager,
} from './root-block/edgeless/components/toolbar/template/template-type.js';
export { CopilotSelectionController } from './root-block/edgeless/tools/copilot-tool.js';
export * from './root-block/index.js';
export * from './schemas.js';
export {
  markdownToMindmap,
  MiniMindmapPreview,
} from './surface-block/mini-mindmap/mindmap-preview.js';
export * from './surface-ref-block/index.js';
export * from '@lumensuite/affine-block-list';
export * from '@lumensuite/affine-block-paragraph';
export * from '@lumensuite/affine-block-surface';
export { type MenuOptions } from '@lumensuite/affine-components/context-menu';
export {
  HoverController,
  whenHover,
} from '@lumensuite/affine-components/hover';
export {
  ArrowDownSmallIcon,
  CloseIcon,
  DocIcon,
  DualLinkIcon16,
  LinkedDocIcon,
  PlusIcon,
  TagsIcon,
} from '@lumensuite/affine-components/icons';
export * from '@lumensuite/affine-components/icons';
export {
  isPeekable,
  peek,
  Peekable,
  PeekableController,
  type PeekViewService,
} from '@lumensuite/affine-components/peek';
export {
  createLitPortal,
  createSimplePortal,
} from '@lumensuite/affine-components/portal';
export {
  type AffineInlineEditor,
  AffineReference,
  type AffineTextAttributes,
  InlineManager,
  type InlineMarkdownMatch,
  type InlineSpecs,
  ReferenceNodeConfig,
  RichText,
} from '@lumensuite/affine-components/rich-text';
export { toast } from '@lumensuite/affine-components/toast';
export {
  type AdvancedMenuItem,
  type FatMenuItems,
  groupsToActions,
  type MenuItem,
  type MenuItemGroup,
  renderActions,
  renderGroups,
  renderToolbarSeparator,
  Tooltip,
} from '@lumensuite/affine-components/toolbar';
export * from '@lumensuite/affine-model';
export * from '@lumensuite/affine-shared/services';
export {
  ColorVariables,
  FontFamilyVariables,
  SizeVariables,
  StyleVariables,
  ThemeObserver,
} from '@lumensuite/affine-shared/theme';

export {
  createButtonPopper,
  createDefaultDoc,
  findNoteBlockModel,
  isInsideEdgelessEditor,
  isInsidePageEditor,
  matchFlavours,
  on,
  once,
  openFileOrFiles,
  printToPdf,
} from '@lumensuite/affine-shared/utils';

export const BlocksUtils = {
  splitElements,
  matchFlavours,
  deserializeXYWH,
  isCanvasElement,
  Point,
};

const env: Record<string, unknown> =
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof window !== 'undefined'
      ? window
      : // @ts-ignore
        typeof global !== 'undefined'
        ? // @ts-ignore
          global
        : {};
const importIdentifier = '__ $BLOCKSUITE_BLOCKS$ __';

if (env[importIdentifier] === true) {
  // https://github.com/yjs/yjs/issues/438
  console.error(
    '@lumensuite/blocks was already imported. This breaks constructor checks and will lead to issues!'
  );
}

env[importIdentifier] = true;
