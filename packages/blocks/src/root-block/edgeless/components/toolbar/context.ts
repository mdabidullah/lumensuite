import type { ColorScheme } from '@lumensuite/affine-model';
import type { Slot } from '@lumensuite/store';

import { createContext } from '@lit/context';

import type { EdgelessToolbar } from './edgeless-toolbar.js';

export interface EdgelessToolbarSlots {
  resize: Slot<{ w: number; h: number }>;
}

export const edgelessToolbarSlotsContext = createContext<EdgelessToolbarSlots>(
  Symbol('edgelessToolbarSlotsContext')
);

export const edgelessToolbarThemeContext = createContext<ColorScheme>(
  Symbol('edgelessToolbarThemeContext')
);

export const edgelessToolbarContext = createContext<EdgelessToolbar>(
  Symbol('edgelessToolbarContext')
);
