import type { Text } from '@blocksuite/store';
import { BlockModel } from '@blocksuite/store';
import type { Column, SerializedCells, ViewBasicDataType } from './types.js';
export type DatabaseBlockProps = {
    views: ViewBasicDataType[];
    title: Text;
    cells: SerializedCells;
    columns: Array<Column>;
    notes?: Record<string, string>;
};
export declare class DatabaseBlockModel extends BlockModel<DatabaseBlockProps> {
}
export declare const DatabaseBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<DatabaseBlockProps>;
        flavour: "affine:database";
    } & {
        role: "hub";
        version: number;
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: DatabaseBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<DatabaseBlockProps>) | undefined;
};
//# sourceMappingURL=database-model.d.ts.map