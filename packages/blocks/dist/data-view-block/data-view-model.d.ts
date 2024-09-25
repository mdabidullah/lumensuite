import type { Column } from '@lumensuite/affine-model';
import type { DataViewDataType } from '@lumensuite/data-view';
import { type InsertToPosition } from '@lumensuite/affine-shared/utils';
import { BlockModel } from '@lumensuite/store';
type Props = {
    title: string;
    views: DataViewDataType[];
    columns: Column[];
    cells: Record<string, Record<string, unknown>>;
};
export declare class DataViewBlockModel extends BlockModel<Props> {
    constructor();
    applyViewsUpdate(): void;
    deleteView(id: string): void;
    duplicateView(id: string): string;
    moveViewTo(id: string, position: InsertToPosition): void;
    updateView(id: string, update: (data: DataViewDataType) => Partial<DataViewDataType>): void;
}
export declare const DataViewBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<Props>;
        flavour: "affine:data-view";
    } & {
        role: "hub";
        version: number;
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: Props, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<Props>) | undefined;
};
export {};
//# sourceMappingURL=data-view-model.d.ts.map