import type { TemplateResult } from 'lit';
import type { PeekableClass } from './type.js';
export declare class PeekableController<T extends PeekableClass> {
    private target;
    private enable?;
    private _getPeekViewService;
    private getRootService;
    peek: (template?: TemplateResult) => Promise<void>;
    get peekable(): boolean;
    constructor(target: T, enable?: ((e: T) => boolean) | undefined);
}
//# sourceMappingURL=controller.d.ts.map