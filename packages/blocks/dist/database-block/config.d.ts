import type { MenuOptions } from '@lumensuite/affine-components/context-menu';
import type { DatabaseBlockModel } from '@lumensuite/affine-model';
export interface DatabaseOptionsConfig {
    configure: (model: DatabaseBlockModel, options: MenuOptions) => MenuOptions;
}
//# sourceMappingURL=config.d.ts.map