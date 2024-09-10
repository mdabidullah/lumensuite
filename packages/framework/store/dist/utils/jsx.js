import * as Y from 'yjs';
// Ad-hoc for `ReactTestComponent` identify.
// See https://github.com/facebook/jest/blob/f1263368cc85c3f8b70eaba534ddf593392c44f3/packages/pretty-format/src/plugins/ReactTestComponent.ts#L26-L29
const testSymbol = Symbol.for('react.test.json');
function isValidRecord(data) {
    if (typeof data !== 'object' || data === null) {
        return false;
    }
    // TODO enhance this check
    return true;
}
const IGNORED_PROPS = [
    'sys:id',
    'sys:version',
    'sys:flavour',
    'sys:children',
    'prop:xywh',
    'prop:cells',
    'prop:elements',
];
export function yDocToJSXNode(serializedDoc, nodeId) {
    if (!isValidRecord(serializedDoc)) {
        throw new Error('Failed to parse doc record! Invalid data.');
    }
    const node = serializedDoc[nodeId];
    if (!node) {
        throw new Error(`Failed to parse doc record! Node not found! id: ${nodeId}.`);
    }
    // TODO maybe need set PascalCase
    const flavour = node['sys:flavour'];
    // TODO maybe need check children recursively nested
    const children = node['sys:children'];
    const props = Object.fromEntries(Object.entries(node).filter(([key]) => !IGNORED_PROPS.includes(key)));
    if ('prop:text' in props && props['prop:text'] instanceof Array) {
        props['prop:text'] = parseDelta(props['prop:text']);
    }
    if ('prop:title' in props && props['prop:title'] instanceof Array) {
        props['prop:title'] = parseDelta(props['prop:title']);
    }
    if ('prop:columns' in props && props['prop:columns'] instanceof Array) {
        props['prop:columns'] = `Array [${props['prop:columns'].length}]`;
    }
    if ('prop:views' in props && props['prop:views'] instanceof Array) {
        props['prop:views'] = `Array [${props['prop:views'].length}]`;
    }
    return {
        $$typeof: testSymbol,
        type: flavour,
        props,
        children: children?.map(id => yDocToJSXNode(serializedDoc, id)) ?? [],
    };
}
export function serializeYDoc(doc) {
    const json = {};
    doc.share.forEach((value, key) => {
        if (value instanceof Y.Map) {
            json[key] = serializeYMap(value);
        }
        else {
            json[key] = value.toJSON();
        }
    });
    return json;
}
function serializeY(value) {
    if (value instanceof Y.Doc) {
        return serializeYDoc(value);
    }
    if (value instanceof Y.Map) {
        return serializeYMap(value);
    }
    if (value instanceof Y.Text) {
        return serializeYText(value);
    }
    if (value instanceof Y.Array) {
        return value.toArray().map(x => serializeY(x));
    }
    if (value instanceof Y.AbstractType) {
        return value.toJSON();
    }
    return value;
}
function serializeYMap(map) {
    const json = {};
    map.forEach((value, key) => {
        json[key] = serializeY(value);
    });
    return json;
}
function serializeYText(text) {
    const delta = text.toDelta();
    return delta;
}
function parseDelta(text) {
    if (!text.length) {
        return undefined;
    }
    if (text.length === 1 && !text[0].attributes) {
        // just plain text
        return text[0].insert;
    }
    return {
        // The `Symbol.for('react.fragment')` will render as `<React.Fragment>`
        // so we use a empty string to render it as `<>`.
        // But it will empty children ad `< />`
        // so we return `undefined` directly if not delta text.
        $$typeof: testSymbol, // Symbol.for('react.element'),
        type: '', // Symbol.for('react.fragment'),
        props: {},
        children: text?.map(({ insert, attributes }) => ({
            $$typeof: testSymbol,
            type: 'text',
            props: {
                // Not place at `children` to avoid the trailing whitespace be trim by formatter.
                insert,
                ...attributes,
            },
        })),
    };
}
//# sourceMappingURL=jsx.js.map