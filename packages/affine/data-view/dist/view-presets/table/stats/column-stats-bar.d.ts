import { ShadowlessElement } from '@lumensuite/block-std';
import type { GroupData } from '../../../core/common/group-by/helper.js';
import type { TableSingleView } from '../table-view-manager.js';
declare const DataBaseColumnStats_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class DataBaseColumnStats extends DataBaseColumnStats_base {
    static styles: import("lit").CSSResult;
    protected render(): import("lit").TemplateResult<1>;
    accessor group: GroupData | undefined;
    accessor view: TableSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-stats': DataBaseColumnStats;
    }
}
export {};
//# sourceMappingURL=column-stats-bar.d.ts.map