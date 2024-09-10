import { mergeToCodeModel, transformModel, } from '../../root-block/utils/operations/model.js';
class DocTestUtils {
    constructor() {
        // block model operations (data layer)
        this.mergeToCodeModel = mergeToCodeModel;
        this.transformModel = transformModel;
    }
}
export class TestUtils {
    constructor() {
        this.docTestUtils = new DocTestUtils();
    }
}
export function nanoidReplacement(snapshot) {
    return JSON.parse(nanoidReplacementString(JSON.stringify(snapshot)));
}
const escapedSnapshotAttributes = [
    '"attributes"',
    '"conditions"',
    '"iconColumn"',
    '"background"',
];
function nanoidReplacementString(snapshotString) {
    const re = /("block:[A-Za-z0-9-_]{10}")|("[A-Za-z0-9-_]{10}")|("var\(--affine-tag-[a-z]{3,10}\)")|("[A-Za-z0-9-_=]{44}")/g;
    const matches = snapshotString.matchAll(re);
    const matchesReplaceMap = new Map();
    let escapedNumber = 0;
    Array.from(matches).map((match, index) => {
        if (escapedSnapshotAttributes.includes(match[0])) {
            matchesReplaceMap.set(match[0], match[0]);
            escapedNumber++;
        }
        else {
            matchesReplaceMap.set(match[0], `"matchesReplaceMap[${index - escapedNumber}]"`);
        }
    });
    return snapshotString.replace(re, match => matchesReplaceMap.get(match));
}
//# sourceMappingURL=test-utils.js.map