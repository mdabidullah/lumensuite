import type { RefNodeSlots } from '@lumensuite/affine-components/rich-text';
import type {
  BrushElementModel,
  ConnectorElementModel,
  DocMode,
  GroupElementModel,
} from '@lumensuite/affine-model';
import type { Slot } from '@lumensuite/global/utils';
import type { Doc } from '@lumensuite/store';

/** Common context interface definition for block models. */

// TODO: remove
export type CommonSlots = RefNodeSlots;

type EditorSlots = {
  editorModeSwitched: Slot<DocMode>;
  docUpdated: Slot<{ newDocId: string }>;
};

export type AbstractEditor = {
  doc: Doc;
  mode: DocMode;
  readonly slots: CommonSlots & EditorSlots;
} & HTMLElement;

export type Connectable = Exclude<
  LumenSuite.EdgelessModel,
  ConnectorElementModel | BrushElementModel | GroupElementModel
>;

export type { EmbedCardStyle } from '@lumensuite/affine-model';
export * from '@lumensuite/affine-shared/types';
