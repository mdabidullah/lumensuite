import type { SelectTag } from '../../../utils/tags/multi-tag-select.js';
import { BaseGroup } from './base.js';
export declare class SelectGroupView extends BaseGroup<{
    options: SelectTag[];
}, string> {
    static styles: import("lit").CSSResult;
    private _click;
    get tag(): SelectTag | undefined;
    protected render(): unknown;
    updateTag(tag: Partial<SelectTag>): void;
}
//# sourceMappingURL=select-group.d.ts.map