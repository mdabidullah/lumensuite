import { BaseSelection } from '@lumensuite/block-std';
import z from 'zod';
const ImageSelectionSchema = z.object({
    blockId: z.string(),
});
export class ImageSelection extends BaseSelection {
    static { this.group = 'note'; }
    static { this.type = 'image'; }
    static fromJSON(json) {
        ImageSelectionSchema.parse(json);
        return new ImageSelection({
            blockId: json.blockId,
        });
    }
    equals(other) {
        if (other instanceof ImageSelection) {
            return this.blockId === other.blockId;
        }
        return false;
    }
    toJSON() {
        return {
            type: this.type,
            blockId: this.blockId,
        };
    }
}
//# sourceMappingURL=image.js.map