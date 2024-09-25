import { ShadowlessElement } from '@lumensuite/block-std';
import { type TemplateResult } from 'lit';
import type { TableSingleView } from '../table-view-manager.js';
import './database-header-column.js';
declare const DatabaseColumnHeader_base: typeof ShadowlessElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class DatabaseColumnHeader extends DatabaseColumnHeader_base {
    static styles: import("lit").CSSResult;
    private _onAddColumn;
    private preAutoSet;
    editLastColumnTitle: () => void;
    preMove: number;
    private get readonly();
    private autoSetHeaderPosition;
    connectedCallback(): void;
    getScale(): number;
    render(): TemplateResult;
    accessor renderGroupHeader: (() => TemplateResult) | undefined;
    accessor scaleDiv: HTMLDivElement;
    accessor tableViewManager: TableSingleView;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-header': DatabaseColumnHeader;
    }
}
export {};
//# sourceMappingURL=column-header.d.ts.map