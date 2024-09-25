import { openFileOrFiles } from '@lumensuite/affine-shared/utils';
import { LumenSuiteError, ErrorCode } from '@lumensuite/global/exceptions';
import converter from 'xml-js';
export async function importMindmap(bound) {
    const file = await openFileOrFiles({
        acceptType: 'MindMap',
    });
    if (!file) {
        throw new LumenSuiteError(ErrorCode.UserAbortError, 'Aborted by user');
    }
    let result;
    if (file.name.endsWith('.mm')) {
        result = await parseMmFile(file);
    }
    else if (file.name.endsWith('.opml') || file.name.endsWith('.xml')) {
        result = await parseOPMLFile(file);
    }
    else {
        throw new LumenSuiteError(ErrorCode.ParsingError, 'Unsupported file type');
    }
    if (result) {
        result.xywh = bound.serialize();
    }
    return result;
}
function readAsText(file) {
    return file.text();
}
async function parseMmFile(file) {
    const content = await readAsText(file);
    try {
        const { map } = JSON.parse(converter.xml2json(content, { compact: true }));
        const traverse = (node) => {
            if (!node?._attributes?.TEXT && !node.node) {
                return null;
            }
            return node._attributes.POSITION
                ? {
                    layoutType: node._attributes.POSITION,
                    text: node._attributes?.TEXT ?? 'MINDMAP',
                    children: node.node
                        ?.map(traverse)
                        .filter(node => node) ?? [],
                }
                : {
                    text: node._attributes?.TEXT ?? 'MINDMAP',
                    children: node.node
                        ?.map(traverse)
                        .filter(node => node) ?? [],
                };
        };
        const result = traverse(map.node);
        if (!result) {
            throw new LumenSuiteError(ErrorCode.ParsingError, 'Failed to parse mm file');
        }
        return result;
    }
    catch (e) {
        console.error(e);
        throw new LumenSuiteError(ErrorCode.ParsingError, 'Failed to parse mm file');
    }
}
async function parseOPMLFile(file) {
    const content = await readAsText(file);
    try {
        const parsed = JSON.parse(converter.xml2json(content, { compact: true }));
        const opml = parsed.opml;
        const traverse = (node) => {
            if (!node?._attributes?.text && !node.outline) {
                return null;
            }
            return {
                text: node._attributes?.text ?? 'MINDMAP',
                children: node.outline
                    ? (Array.isArray(node.outline)
                        ? node.outline.map(traverse)
                        : [traverse(node.outline)]).filter(node => node)
                    : [],
            };
        };
        const result = traverse(opml.body.outline);
        if (!result) {
            throw new LumenSuiteError(ErrorCode.ParsingError, 'Failed to parse OPML file');
        }
        return result;
    }
    catch (e) {
        console.error(e);
        throw new LumenSuiteError(ErrorCode.ParsingError, 'Failed to parse OPML file');
    }
}
//# sourceMappingURL=import-mindmap.js.map