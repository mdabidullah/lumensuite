import type { ColorScheme } from '@lumensuite/affine-model';
import type { Constructor } from '@lumensuite/global/utils';
import type { LitElement } from 'lit';
import { type DisposableClass } from '@lumensuite/block-std';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import type { EdgelessTool } from '../../../types.js';
import type { EdgelessToolbar } from '../edgeless-toolbar.js';
import { createPopper, type MenuPopper } from '../common/create-popper.js';
import { type EdgelessToolbarSlots } from '../context.js';
export declare abstract class EdgelessToolbarToolClass extends DisposableClass {
    active: boolean;
    createPopper: typeof createPopper;
    edgeless: EdgelessRootBlockComponent;
    edgelessTool: EdgelessTool;
    enableActiveBackground?: boolean;
    popper: MenuPopper<HTMLElement> | null;
    setEdgelessTool: EdgelessRootBlockComponent['tools']['setEdgelessTool'];
    theme: ColorScheme;
    toolbarContainer: HTMLElement | null;
    toolbarSlots: EdgelessToolbarSlots;
    /**
     * @return true if operation was successful
     */
    tryDisposePopper: () => boolean;
    abstract type: EdgelessTool['type'] | EdgelessTool['type'][];
    accessor toolbar: EdgelessToolbar;
}
export declare const EdgelessToolbarToolMixin: <T extends Constructor<LitElement>>(SuperClass: T) => T & Constructor<EdgelessToolbarToolClass>;
//# sourceMappingURL=tool.mixin.d.ts.map