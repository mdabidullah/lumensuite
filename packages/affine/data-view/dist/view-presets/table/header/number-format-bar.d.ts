import { LitElement } from 'lit';
import type { Column } from '../../../core/view-manager/column.js';
declare const DatabaseNumberFormatBar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseNumberFormatBar extends DatabaseNumberFormatBar_base {
    static styles: import("lit").CSSResult;
    private _decrementDecimalPlaces;
    private _incrementDecimalPlaces;
    render(): import("lit").TemplateResult<1>;
    accessor column: Column;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-number-format-bar': DatabaseNumberFormatBar;
    }
}
export {};
//# sourceMappingURL=number-format-bar.d.ts.map