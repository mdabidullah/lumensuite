import z from 'zod';
import { BaseSelection } from '../base.js';
const TextSelectionSchema = z.object({
    from: z.object({
        blockId: z.string(),
        index: z.number(),
        length: z.number(),
    }),
    to: z
        .object({
        blockId: z.string(),
        index: z.number(),
        length: z.number(),
    })
        .nullable(),
    // The `optional()` is for backward compatibility,
    // since `reverse` may not exist in remote selection.
    reverse: z.boolean().optional(),
});
export class TextSelection extends BaseSelection {
    static { this.group = 'note'; }
    static { this.type = 'text'; }
    get end() {
        return this.reverse ? this.from : (this.to ?? this.from);
    }
    get start() {
        return this.reverse ? (this.to ?? this.from) : this.from;
    }
    constructor({ from, to, reverse }) {
        super({
            blockId: from.blockId,
        });
        this.from = from;
        this.to = this._equalPoint(from, to) ? null : to;
        this.reverse = !!reverse;
    }
    static fromJSON(json) {
        TextSelectionSchema.parse(json);
        return new TextSelection({
            from: json.from,
            to: json.to,
            reverse: !!json.reverse,
        });
    }
    _equalPoint(a, b) {
        if (a && b) {
            return (a.blockId === b.blockId && a.index === b.index && a.length === b.length);
        }
        return a === b;
    }
    empty() {
        return !!this.to;
    }
    equals(other) {
        if (other instanceof TextSelection) {
            return (this.blockId === other.blockId &&
                this._equalPoint(other.from, this.from) &&
                this._equalPoint(other.to, this.to));
        }
        return false;
    }
    isCollapsed() {
        return this.to === null && this.from.length === 0;
    }
    isInSameBlock() {
        return this.to === null || this.from.blockId === this.to.blockId;
    }
    toJSON() {
        return {
            type: 'text',
            from: this.from,
            to: this.to,
            reverse: this.reverse,
        };
    }
}
//# sourceMappingURL=text.js.map