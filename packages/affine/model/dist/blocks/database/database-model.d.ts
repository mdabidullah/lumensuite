import type { Text } from '@lumensuite/store';
import { BlockModel } from '@lumensuite/store';
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
        props: import("@lumensuite/store").PropsGetter<DatabaseBlockProps>;
        flavour: "affine:database";
    } & {
        role: "hub";
        version: number;
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: DatabaseBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<DatabaseBlockProps>) | undefined;
};
//# sourceMappingURL=database-model.d.ts.map