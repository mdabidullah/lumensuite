import z from 'zod';
import { BaseSelection } from '../base.js';
const CursorSelectionSchema = z.object({
    x: z.number(),
    y: z.number(),
});
export class CursorSelection extends BaseSelection {
    static { this.group = 'gfx'; }
    static { this.type = 'cursor'; }
    constructor(x, y) {
        super({ blockId: '[gfx-cursor]' });
        this.x = x;
        this.y = y;
    }
    static fromJSON(json) {
        CursorSelectionSchema.parse(json);
        return new CursorSelection(json.x, json.y);
    }
    equals(other) {
        if (other instanceof CursorSelection) {
            return this.x === other.x && this.y === other.y;
        }
        return false;
    }
    toJSON() {
        return {
            type: 'cursor',
            x: this.x,
            y: this.y,
        };
    }
}
//# sourceMappingURL=cursor.js.map