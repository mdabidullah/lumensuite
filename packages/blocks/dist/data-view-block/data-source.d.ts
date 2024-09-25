import type { Column } from '@lumensuite/affine-model';
import type { EditorHost } from '@lumensuite/block-std';
import type { Block, Doc } from '@lumensuite/store';
import { type InsertToPosition } from '@lumensuite/affine-shared/utils';
import { type ColumnMeta, DataSourceBase, type DetailSlots } from '@lumensuite/data-view';
import { Slot } from '@lumensuite/global/utils';
import type { DataViewBlockModel } from './data-view-model.js';
import { blockMetaMap } from './block-meta/index.js';
export type BlockQueryDataSourceConfig = {
    type: keyof typeof blockMetaMap;
};
export declare class BlockQueryDataSource extends DataSourceBase {
    private host;
    private block;
    private columnMetaMap;
    private meta;
    blockMap: Map<string, Block>;
    docDisposeMap: Map<string, () => void>;
    slots: {
        update: Slot<void>;
    };
    get addPropertyConfigList(): ColumnMeta[];
    private get blocks();
    get detailSlots(): DetailSlots;
    get properties(): string[];
    get rows(): string[];
    get workspace(): import("@lumensuite/store").DocCollection;
    constructor(host: EditorHost, block: DataViewBlockModel, config: BlockQueryDataSourceConfig);
    private getProperty;
    private newColumnName;
    cellChangeValue(rowId: string, propertyId: string, value: unknown): void;
    cellGetValue(rowId: string, propertyId: string): unknown;
    getPropertyMeta(type: string): ColumnMeta;
    getViewColumn(id: string): Column<Record<string, unknown>> | undefined;
    listenToDoc(doc: Doc): void;
    propertyAdd(insertToPosition: InsertToPosition, type: string | undefined): string;
    propertyChangeData(propertyId: string, data: Record<string, unknown>): void;
    propertyChangeName(propertyId: string, name: string): void;
    propertyChangeType(propertyId: string, toType: string): void;
    propertyDelete(_id: string): void;
    propertyDuplicate(_columnId: string): string;
    propertyGetData(propertyId: string): Record<string, unknown>;
    propertyGetDefaultWidth(propertyId: string): number;
    propertyGetName(propertyId: string): string;
    propertyGetReadonly(propertyId: string): boolean;
    propertyGetType(propertyId: string): string;
    rowAdd(_insertPosition: InsertToPosition | number): string;
    rowDelete(_ids: string[]): void;
    rowMove(_rowId: string, _position: InsertToPosition): void;
}
//# sourceMappingURL=data-source.d.ts.map