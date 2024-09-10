import type { ExtensionType } from '@blocksuite/block-std';
import { type ServiceIdentifier } from '@blocksuite/global/di';
import type { AffineTextAttributes, InlineMarkdownMatch } from './type.js';
export declare const MarkdownMatcherIdentifier: ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>> & ((variant: import("@blocksuite/global/di").ServiceVariant) => ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>>);
export declare function InlineMarkdownExtension(matcher: InlineMarkdownMatch<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>>;
};
//# sourceMappingURL=markdown-matcher.d.ts.map