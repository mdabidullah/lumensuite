import { Text } from '@lumensuite/store';
export const toYText = (text) => {
    if (text instanceof Text) {
        return text.yText;
    }
    return text;
};
//# sourceMappingURL=utils.js.map