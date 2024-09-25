import type { EditorHost } from '@lumensuite/block-std';
import type { TemplateResult } from 'lit';
import { type AffineInlineEditor, insertLinkedNode } from '@lumensuite/affine-components/rich-text';
export type LinkedMenuItem = {
    key: string;
    name: string;
    icon: TemplateResult<1>;
    action: () => Promise<void> | void;
};
export type LinkedMenuGroup = {
    name: string;
    items: LinkedMenuItem[];
    styles?: string;
    maxDisplay?: number;
    overflowText?: string;
};
export declare function createLinkedDocMenuGroup(query: string, abort: () => void, editorHost: EditorHost, inlineEditor: AffineInlineEditor): {
    name: string;
    items: {
        key: string;
        name: string;
        icon: TemplateResult<1>;
        action: () => void;
    }[];
    maxDisplay: number;
    overflowText: string;
};
export declare function createNewDocMenuGroup(query: string, abort: () => void, editorHost: EditorHost, inlineEditor: AffineInlineEditor): LinkedMenuGroup;
export declare function getMenus(query: string, abort: () => void, editorHost: EditorHost, inlineEditor: AffineInlineEditor): Promise<LinkedMenuGroup[]>;
export declare const LinkedWidgetUtils: {
    createLinkedDocMenuGroup: typeof createLinkedDocMenuGroup;
    createNewDocMenuGroup: typeof createNewDocMenuGroup;
    insertLinkedNode: typeof insertLinkedNode;
};
//# sourceMappingURL=config.d.ts.map