import type { NoteBlockModel } from '@blocksuite/affine-model';
import { BlockComponent } from '@blocksuite/block-std';
import type { NoteBlockService } from './note-service.js';
import { KeymapController } from './keymap-controller.js';
export declare class NoteBlockComponent extends BlockComponent<NoteBlockModel, NoteBlockService> {
    static styles: import("lit").CSSResult;
    keymapController: KeymapController;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-note': NoteBlockComponent;
    }
}
//# sourceMappingURL=note-block.d.ts.map