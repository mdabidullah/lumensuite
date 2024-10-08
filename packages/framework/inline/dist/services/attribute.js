import { baseTextAttributes, getDefaultAttributeRenderer, } from '../utils/index.js';
export class AttributeService {
    get attributeRenderer() {
        return this._attributeRenderer;
    }
    get marks() {
        return this._marks;
    }
    constructor(editor) {
        this.editor = editor;
        this._attributeRenderer = getDefaultAttributeRenderer();
        this._attributeSchema = baseTextAttributes;
        this._marks = null;
        this.getFormat = (inlineRange, loose = false) => {
            const deltas = this.editor.deltaService
                .getDeltasByInlineRange(inlineRange)
                .filter(([_, position]) => position.index + position.length > inlineRange.index &&
                position.index <= inlineRange.index + inlineRange.length);
            const maybeAttributesList = deltas.map(([delta]) => delta.attributes);
            if (loose) {
                return maybeAttributesList.reduce((acc, cur) => ({ ...acc, ...cur }), {});
            }
            if (!maybeAttributesList.length ||
                // some text does not have any attribute
                maybeAttributesList.some(attributes => !attributes)) {
                return {};
            }
            const attributesList = maybeAttributesList;
            return attributesList.reduce((acc, cur) => {
                const newFormat = {};
                for (const key in acc) {
                    const typedKey = key;
                    // If the given range contains multiple different formats
                    // such as links with different values,
                    // we will treat it as having no format
                    if (acc[typedKey] === cur[typedKey]) {
                        // This cast is secure because we have checked that the value of the key is the same.
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        newFormat[typedKey] = acc[typedKey];
                    }
                }
                return newFormat;
            });
        };
        this.normalizeAttributes = (textAttributes) => {
            if (!textAttributes) {
                return undefined;
            }
            const attributeResult = this._attributeSchema.safeParse(textAttributes);
            if (!attributeResult.success) {
                console.error(attributeResult.error);
                return undefined;
            }
            return Object.fromEntries(
            // filter out undefined values
            Object.entries(attributeResult.data).filter(([_, v]) => v !== undefined));
        };
        this.resetMarks = () => {
            this._marks = null;
        };
        this.setAttributeRenderer = (renderer) => {
            this._attributeRenderer = renderer;
        };
        this.setAttributeSchema = (schema) => {
            this._attributeSchema = schema;
        };
        this.setMarks = (marks) => {
            this._marks = marks;
        };
    }
}
//# sourceMappingURL=attribute.js.map