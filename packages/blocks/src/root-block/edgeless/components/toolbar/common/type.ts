import type { Menu } from '@lumensuite/affine-components/context-menu';

import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';

/**
 * Helper function to build a menu configuration for a tool in dense mode
 */
export type DenseMenuBuilder = (edgeless: EdgelessRootBlockComponent) => Menu;
