import type { ExtensionType } from '@lumensuite/block-std';
import { type ServiceIdentifier } from '@lumensuite/global/di';
import type { AffineTextAttributes, InlineMarkdownMatch } from './type.js';
export declare const MarkdownMatcherIdentifier: ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>> & ((variant: import("@lumensuite/global/di").ServiceVariant) => ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>>);
export declare function InlineMarkdownExtension(matcher: InlineMarkdownMatch<AffineTextAttributes>): ExtensionType & {
    identifier: ServiceIdentifier<InlineMarkdownMatch<AffineTextAttributes>>;
};
//# sourceMappingURL=markdown-matcher.d.ts.map