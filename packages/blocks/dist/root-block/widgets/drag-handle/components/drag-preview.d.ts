import type { EditorHost } from '@lumensuite/block-std';
import type { TemplateResult } from 'lit';
import { ShadowlessElement } from '@lumensuite/block-std';
import { Point } from '@lumensuite/global/utils';
export declare class DragPreview extends ShadowlessElement {
    offset: Point;
    constructor(offset?: Point);
    disconnectedCallback(): void;
    render(): TemplateResult<1>;
    accessor onRemove: (() => void) | null;
    accessor template: TemplateResult | EditorHost | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-drag-preview': DragPreview;
    }
}
//# sourceMappingURL=drag-preview.d.ts.map