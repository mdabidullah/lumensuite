import { BaseCellRenderer } from '@lumensuite/data-view';
import './components/link-node.js';
export declare class LinkCell extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private _onClick;
    private _onEdit;
    private preValue?;
    openDoc: (e: MouseEvent) => void;
    get std(): import("@lumensuite/block-std").BlockStdScope | undefined;
    render(): import("lit").TemplateResult;
    updated(): void;
    accessor docId: string | undefined;
}
export declare class LinkCellEditing extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private _focusEnd;
    private _onKeydown;
    private _setValue;
    firstUpdated(): void;
    onExitEditMode(): void;
    render(): import("lit").TemplateResult;
    private accessor _container;
}
export declare const linkColumnConfig: import("@lumensuite/data-view").ColumnMeta<"link", Record<string, never>, string>;
//# sourceMappingURL=cell-renderer.d.ts.map