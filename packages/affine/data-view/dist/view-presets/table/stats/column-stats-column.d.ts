import { ShadowlessElement } from '@lumensuite/block-std';
import type { GroupData } from '../../../core/common/group-by/helper.js';
import type { StatsFunction } from '../../../core/common/stats/type.js';
import type { TableColumn } from '../table-view-manager.js';
declare const DatabaseColumnStatsCell_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class DatabaseColumnStatsCell extends DatabaseColumnStatsCell_base {
    static styles: import("lit").CSSResult;
    cellValues$: import("@preact/signals-core").ReadonlySignal<unknown[]>;
    groups$: import("@preact/signals-core").ReadonlySignal<Record<string, Record<string, StatsFunction>>>;
    openMenu: (ev: MouseEvent) => void;
    statsFunc$: import("@preact/signals-core").ReadonlySignal<StatsFunction | undefined>;
    statsResult$: import("@preact/signals-core").ReadonlySignal<{
        name: string | undefined;
        value: string;
    } | null>;
    subscriptionMap: Map<unknown, () => void>;
    values$: import("@preact/signals-core").Signal<unknown[]>;
    connectedCallback(): void;
    protected render(): import("lit").TemplateResult<1>;
    accessor column: TableColumn;
    accessor group: GroupData | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-stats-cell': DatabaseColumnStatsCell;
    }
}
export {};
//# sourceMappingURL=column-stats-column.d.ts.map