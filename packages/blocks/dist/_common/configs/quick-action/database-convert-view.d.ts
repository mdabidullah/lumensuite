import type { EditorHost } from '@lumensuite/block-std';
import { LitElement, type TemplateResult } from 'lit';
export declare const DATABASE_CONVERT_WHITE_LIST: string[];
declare const DatabaseConvertView_base: typeof LitElement & import("@lumensuite/global/utils").Constructor<import("@lumensuite/block-std").DisposableClass>;
export declare class DatabaseConvertView extends DatabaseConvertView_base {
    static styles: import("lit").CSSResult;
    get doc(): import("@lumensuite/store").Doc;
    private _convertToDatabase;
    render(): TemplateResult<1>;
    accessor host: EditorHost;
}
declare global {
    interface HTMLElementTagNameMap {
        'database-convert-view': DatabaseConvertView;
    }
}
export {};
//# sourceMappingURL=database-convert-view.d.ts.map