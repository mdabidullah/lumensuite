import type { AffineInlineEditor } from '@lumensuite/affine-components/rich-text';
import type { EditorHost } from '@lumensuite/block-std';
import { WidgetComponent } from '@lumensuite/block-std';
import { type LinkedMenuGroup } from './config.js';
import { LinkedDocPopover } from './linked-doc-popover.js';
export declare const AFFINE_LINKED_DOC_WIDGET = "affine-linked-doc-widget";
export interface LinkedWidgetConfig {
    /**
     * The first item of the trigger keys will be the primary key
     * e.g. @, [[
     */
    triggerKeys: [string, ...string[]];
    /**
     * Convert trigger key to primary key (the first item of the trigger keys)
     * [[ -> @
     */
    convertTriggerKey: boolean;
    ignoreBlockTypes: (keyof LumenSuite.BlockModels)[];
    getMenus: (query: string, abort: () => void, editorHost: EditorHost, inlineEditor: AffineInlineEditor) => Promise<LinkedMenuGroup[]>;
}
export declare class AffineLinkedDocWidget extends WidgetComponent {
    private _abortController;
    private _onCompositionEnd;
    private _onKeyDown;
    private getInlineEditor;
    showLinkedDocPopover: (inlineEditor: AffineInlineEditor, triggerKey: string) => LinkedDocPopover | undefined;
    get config(): LinkedWidgetConfig;
    private _handleInput;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_LINKED_DOC_WIDGET]: AffineLinkedDocWidget;
    }
}
//# sourceMappingURL=index.d.ts.map