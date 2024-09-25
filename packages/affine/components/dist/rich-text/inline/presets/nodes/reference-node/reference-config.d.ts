import type { BlockStdScope } from '@lumensuite/block-std';
import type { TemplateResult } from 'lit';
import type { AffineReference } from './reference-node.js';
export declare class ReferenceNodeConfig {
    readonly std: BlockStdScope;
    private _customContent;
    private _customIcon;
    private _customTitle;
    private _interactable;
    get customContent(): ((reference: AffineReference) => TemplateResult) | null;
    get customIcon(): ((reference: AffineReference) => TemplateResult) | null;
    get customTitle(): ((reference: AffineReference) => string) | null;
    get doc(): import("@lumensuite/store").Doc;
    get interactable(): boolean;
    constructor(std: BlockStdScope);
    setCustomContent(content: ReferenceNodeConfig['_customContent']): void;
    setCustomIcon(icon: ReferenceNodeConfig['_customIcon']): void;
    setCustomTitle(title: ReferenceNodeConfig['_customTitle']): void;
    setInteractable(interactable: boolean): void;
}
//# sourceMappingURL=reference-config.d.ts.map