import type { AffineInlineEditor } from '@blocksuite/affine-components/rich-text';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { IconButton } from '../../../_common/components/button.js';
import type { LinkedMenuGroup } from './config.js';
import '../../../_common/components/button.js';
declare const LinkedDocPopover_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LinkedDocPopover extends LinkedDocPopover_base {
    private triggerKey;
    private getMenus;
    private editorHost;
    private inlineEditor;
    private abortController;
    static styles: import("lit").CSSResult;
    private _abort;
    private _expanded;
    private _startRange;
    private get _actionGroup();
    private get _flattenActionList();
    private get _query();
    constructor(triggerKey: string, getMenus: (query: string, abort: () => void, editorHost: EditorHost, inlineEditor: AffineInlineEditor) => Promise<LinkedMenuGroup[]>, editorHost: EditorHost, inlineEditor: AffineInlineEditor, abortController: AbortController);
    private _getActionItems;
    private _isTextOverflowing;
    private _updateLinkedDocGroup;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
    updatePosition(position: {
        height: number;
        x: string;
        y: string;
    }): void;
    private accessor _activatedItemIndex;
    private accessor _linkedDocGroup;
    private accessor _position;
    private accessor _showTooltip;
    accessor iconButtons: NodeListOf<IconButton>;
    accessor linkedDocElement: Element | null;
}
export {};
//# sourceMappingURL=linked-doc-popover.d.ts.map