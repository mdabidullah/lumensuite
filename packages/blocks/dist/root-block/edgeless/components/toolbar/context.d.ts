import type { ColorScheme } from '@lumensuite/affine-model';
import type { Slot } from '@lumensuite/store';
import type { EdgelessToolbar } from './edgeless-toolbar.js';
export interface EdgelessToolbarSlots {
    resize: Slot<{
        w: number;
        h: number;
    }>;
}
export declare const edgelessToolbarSlotsContext: {
    __context__: EdgelessToolbarSlots;
};
export declare const edgelessToolbarThemeContext: {
    __context__: ColorScheme;
};
export declare const edgelessToolbarContext: {
    __context__: EdgelessToolbar;
};
//# sourceMappingURL=context.d.ts.map