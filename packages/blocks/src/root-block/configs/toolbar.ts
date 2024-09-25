import type { MenuItemGroup } from '@lumensuite/affine-components/toolbar';
import type { BlockStdScope, EditorHost } from '@lumensuite/block-std';
import type { GfxModel } from '@lumensuite/block-std/gfx';
import type { BlockModel, Doc } from '@lumensuite/store';

export abstract class MenuContext {
  abstract get doc(): Doc;

  get firstElement(): GfxModel | null {
    return null;
  }

  abstract get host(): EditorHost;

  abstract get selectedBlockModels(): BlockModel[];

  abstract get std(): BlockStdScope;

  // Sometimes we need to close the menu.
  close() {}

  isElement() {
    return false;
  }

  abstract isEmpty(): boolean;

  abstract isMultiple(): boolean;

  abstract isSingle(): boolean;
}

export interface ToolbarMoreMenuConfig {
  configure: <T extends MenuContext>(
    groups: MenuItemGroup<T>[]
  ) => MenuItemGroup<T>[];
}

export function getMoreMenuConfig(std: BlockStdScope): ToolbarMoreMenuConfig {
  return {
    configure: <T extends MenuContext>(groups: MenuItemGroup<T>[]) => groups,
    ...std.getConfig('affine:page')?.toolbarMoreMenu,
  };
}
