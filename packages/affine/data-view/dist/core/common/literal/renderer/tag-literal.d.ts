import type { TArray, TypeOfData } from '../../../logical/typesystem.js';
import { tTag } from '../../../logical/data-type.js';
import { LiteralElement } from './literal-element.js';
export declare class TagLiteral extends LiteralElement<string, TypeOfData<typeof tTag>> {
    static styles: import("lit").CSSResult;
    render(): string | import("lit").TemplateResult<1>;
    tags(): import("../../../index.js").SelectTag[];
}
export declare class MultiTagLiteral extends LiteralElement<string[], TArray<TypeOfData<typeof tTag>>> {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
    tags(): import("../../../index.js").SelectTag[];
}
//# sourceMappingURL=tag-literal.d.ts.map