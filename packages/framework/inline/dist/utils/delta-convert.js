export function transformDelta(delta) {
    const result = [];
    let tmpString = delta.insert;
    while (tmpString.length > 0) {
        const index = tmpString.indexOf('\n');
        if (index === -1) {
            result.push({
                insert: tmpString,
                attributes: delta.attributes,
            });
            break;
        }
        if (tmpString.slice(0, index).length > 0) {
            result.push({
                insert: tmpString.slice(0, index),
                attributes: delta.attributes,
            });
        }
        result.push('\n');
        tmpString = tmpString.slice(index + 1);
    }
    return result;
}
/**
 * convert a delta insert array to chunks, each chunk is a line
 */
export function deltaInsertsToChunks(delta) {
    if (delta.length === 0) {
        return [[]];
    }
    const transformedDelta = delta.flatMap(transformDelta);
    function* chunksGenerator(arr) {
        let start = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '\n') {
                const chunk = arr.slice(start, i);
                start = i + 1;
                yield chunk;
            }
            else if (i === arr.length - 1) {
                yield arr.slice(start);
            }
        }
        if (arr.at(-1) === '\n') {
            yield [];
        }
    }
    return Array.from(chunksGenerator(transformedDelta));
}
//# sourceMappingURL=delta-convert.js.map