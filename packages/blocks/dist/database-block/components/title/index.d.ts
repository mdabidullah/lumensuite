import type { Text } from '@blocksuite/store';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { DatabaseBlockComponent } from '../../database-block.js';
declare const DatabaseTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseTitle extends DatabaseTitle_base {
    static styles: import("lit").CSSResult;
    private _onKeyDown;
    get database(): DatabaseBlockComponent | null;
    get inlineEditor(): import("@blocksuite/affine-components/rich-text").AffineInlineEditor;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null | undefined;
    firstUpdated(): void;
    getUpdateComplete(): Promise<boolean>;
    render(): import("lit").TemplateResult<1>;
    private accessor isActive;
    accessor isComposing: boolean;
    accessor onPressEnterKey: (() => void) | undefined;
    accessor readonly: boolean;
    private accessor richText;
    accessor titleText: Text;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-title': DatabaseTitle;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map