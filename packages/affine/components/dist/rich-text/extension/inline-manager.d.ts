import type { Y } from '@blocksuite/store';
import { type BlockStdScope, type ExtensionType } from '@blocksuite/block-std';
import { type ServiceIdentifier } from '@blocksuite/global/di';
import { type AttributeRenderer, type DeltaInsert, type KeyboardBindingContext } from '@blocksuite/inline';
import { type ZodObject, type ZodTypeAny } from 'zod';
import type { AffineTextAttributes, InlineMarkdownMatch, InlineSpecs } from './type.js';
export declare class InlineManager {
    readonly std: BlockStdScope;
    readonly markdownMatches: InlineMarkdownMatch<AffineTextAttributes>[];
    embedChecker: (delta: DeltaInsert<AffineTextAttributes>) => boolean;
    getRenderer: () => AttributeRenderer<AffineTextAttributes>;
    getSchema: () => ZodObject<Record<keyof AffineTextAttributes, ZodTypeAny>>;
    markdownShortcutHandler: (context: KeyboardBindingContext<AffineTextAttributes>, undoManager: Y.UndoManager) => boolean;
    readonly specs: Array<InlineSpecs<AffineTextAttributes>>;
    constructor(std: BlockStdScope, markdownMatches: InlineMarkdownMatch<AffineTextAttributes>[], ...specs: Array<InlineSpecs<AffineTextAttributes>>);
}
export declare const InlineManagerIdentifier: ServiceIdentifier<InlineManager> & ((variant: import("@blocksuite/global/di").ServiceVariant) => ServiceIdentifier<InlineManager>);
export type InlineManagerExtensionConfig = {
    id: string;
    enableMarkdown?: boolean;
    specs: ServiceIdentifier<InlineSpecs<AffineTextAttributes>>[];
};
export declare function InlineManagerExtension({ id, enableMarkdown, specs, }: InlineManagerExtensionConfig): ExtensionType & {
    identifier: ServiceIdentifier<InlineManager>;
};
//# sourceMappingURL=inline-manager.d.ts.map