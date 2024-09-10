import type { ReferenceInfo } from '@blocksuite/affine-model';
import type { Doc, DocMeta } from '@blocksuite/store';
import { type BlockComponent } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import { nothing } from 'lit';
import type { AffineTextAttributes } from '../../../../extension/index.js';
import type { ReferenceNodeConfig } from './reference-config.js';
declare const AffineReference_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineReference extends AffineReference_base {
    static styles: import("lit").CSSResult;
    private _refAttribute;
    private _updateRefMeta;
    private _whenHover;
    get block(): BlockComponent<import("@blocksuite/store").BlockModel<object, object & {}>, import("@blocksuite/block-std").BlockService, string> | null | undefined;
    get customContent(): ((reference: AffineReference) => import("lit").TemplateResult) | null;
    get customIcon(): ((reference: AffineReference) => import("lit").TemplateResult) | null;
    get customTitle(): ((reference: AffineReference) => string) | null;
    get doc(): Doc;
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes> | undefined;
    get referenceInfo(): ReferenceInfo;
    get selfInlineRange(): import("@blocksuite/inline").InlineRange | null | undefined;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    private _onClick;
    connectedCallback(): void;
    isLinkedNode(): boolean;
    render(): import("lit").TemplateResult<1> | typeof nothing;
    willUpdate(_changedProperties: Map<PropertyKey, unknown>): void;
    accessor config: ReferenceNodeConfig;
    accessor delta: DeltaInsert<AffineTextAttributes>;
    accessor refMeta: DocMeta | undefined;
    accessor selected: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-reference': AffineReference;
    }
}
export {};
//# sourceMappingURL=reference-node.d.ts.map