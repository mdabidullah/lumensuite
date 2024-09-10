import type { ColumnMeta } from '../../column/column-config.js';
import type { TType } from '../../logical/typesystem.js';
export type StatsFunction = {
    group: string;
    type: string;
    dataType: TType;
    menuName?: string;
    displayName?: string;
    impl?: (data: any[], info: {
        meta: ColumnMeta;
    }) => string;
};
//# sourceMappingURL=type.d.ts.map