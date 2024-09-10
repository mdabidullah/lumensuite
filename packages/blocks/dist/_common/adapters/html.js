import { ColorScheme, DEFAULT_NOTE_BACKGROUND_COLOR, NoteDisplayMode, } from '@blocksuite/affine-model';
import { ThemeObserver } from '@blocksuite/affine-shared/theme';
import { getFilenameFromContentDisposition } from '@blocksuite/affine-shared/utils';
import { sha } from '@blocksuite/global/utils';
import { BlockSnapshotSchema, getAssetName, nanoid, } from '@blocksuite/store';
import { ASTWalker, BaseAdapter } from '@blocksuite/store';
import { collapseWhiteSpace } from 'collapse-white-space';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { bundledLanguagesInfo, codeToHast } from 'shiki';
import { unified } from 'unified';
import { hastFlatNodes, hastGetElementChildren, hastGetTextChildren, hastGetTextChildrenOnlyAst, hastGetTextContent, hastQuerySelector, } from './hast.js';
import { fetchable, fetchImage, mergeDeltas } from './utils.js';
export class HtmlAdapter extends BaseAdapter {
    constructor() {
        super(...arguments);
        this._astToHtml = (ast) => {
            return unified().use(rehypeStringify).stringify(ast);
        };
        this._deltaToHast = (deltas) => {
            return deltas.map(delta => {
                let hast = {
                    type: 'text',
                    value: delta.insert,
                };
                if (delta.attributes?.reference) {
                    const title = this.configs.get('title:' + delta.attributes.reference.pageId);
                    if (typeof title === 'string') {
                        hast = {
                            type: 'text',
                            value: title,
                        };
                    }
                }
                if (delta.attributes) {
                    if (delta.attributes.bold) {
                        hast = {
                            type: 'element',
                            tagName: 'strong',
                            properties: {},
                            children: [hast],
                        };
                    }
                    if (delta.attributes.italic) {
                        hast = {
                            type: 'element',
                            tagName: 'em',
                            properties: {},
                            children: [hast],
                        };
                    }
                    if (delta.attributes.code) {
                        hast = {
                            type: 'element',
                            tagName: 'code',
                            properties: {},
                            children: [hast],
                        };
                    }
                    if (delta.attributes.strike) {
                        hast = {
                            type: 'element',
                            tagName: 'del',
                            properties: {},
                            children: [hast],
                        };
                    }
                    if (delta.attributes.underline) {
                        hast = {
                            type: 'element',
                            tagName: 'u',
                            properties: {},
                            children: [hast],
                        };
                    }
                    if (delta.attributes.link) {
                        hast = {
                            type: 'element',
                            tagName: 'a',
                            properties: {
                                href: delta.attributes.link,
                            },
                            children: [hast],
                        };
                    }
                }
                return hast;
            });
        };
        this._hastToDelta = (ast, option = { trim: true, pre: false }) => {
            return this._hastToDeltaSpreaded(ast, option).reduce((acc, cur) => {
                return mergeDeltas(acc, cur);
            }, []);
        };
        this._hastToDeltaSpreaded = (ast, option = { trim: true, pre: false }) => {
            if (option.trim === undefined) {
                option.trim = true;
            }
            switch (ast.type) {
                case 'text': {
                    if (option.pre) {
                        return [{ insert: ast.value }];
                    }
                    if (option.trim) {
                        const value = collapseWhiteSpace(ast.value, { trim: option.trim });
                        if (value) {
                            return [{ insert: value }];
                        }
                        return [];
                    }
                    if (ast.value) {
                        return [{ insert: collapseWhiteSpace(ast.value) }];
                    }
                    return [];
                }
                case 'element': {
                    switch (ast.tagName) {
                        case 'ol':
                        case 'ul': {
                            return [];
                        }
                        case 'span':
                        case 'bdi':
                        case 'bdo':
                        case 'ins': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }));
                        }
                        case 'strong':
                        case 'b': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes, bold: true };
                                return delta;
                            }));
                        }
                        case 'i':
                        case 'em': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes, italic: true };
                                return delta;
                            }));
                        }
                        case 'code': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes, code: true };
                                return delta;
                            }));
                        }
                        case 'del': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes, strike: true };
                                return delta;
                            }));
                        }
                        case 'u': {
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes, underline: true };
                                return delta;
                            }));
                        }
                        case 'a': {
                            const href = ast.properties?.href;
                            if (typeof href !== 'string') {
                                return [];
                            }
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                if (href.startsWith('http')) {
                                    delta.attributes = {
                                        ...delta.attributes,
                                        link: href,
                                    };
                                    return delta;
                                }
                                return delta;
                            }));
                        }
                        case 'mark': {
                            // TODO: add support for highlight
                            return ast.children.flatMap(child => this._hastToDeltaSpreaded(child, { trim: false }).map(delta => {
                                delta.attributes = { ...delta.attributes };
                                return delta;
                            }));
                        }
                        case 'br': {
                            return [{ insert: '\n' }];
                        }
                    }
                }
            }
            return 'children' in ast
                ? ast.children.flatMap(child => this._hastToDeltaSpreaded(child, option))
                : [];
        };
        this._traverseHtml = async (html, snapshot, assets) => {
            const walker = new ASTWalker();
            walker.setONodeTypeGuard((node) => 'type' in node && node.type !== undefined);
            walker.setEnter(async (o, context) => {
                if (o.node.type !== 'element') {
                    return;
                }
                switch (o.node.tagName) {
                    case 'header': {
                        context.skipAllChildren();
                        break;
                    }
                    case 'img': {
                        if (!assets) {
                            break;
                        }
                        const image = o.node;
                        const imageURL = typeof image?.properties.src === 'string'
                            ? image.properties.src
                            : '';
                        if (imageURL) {
                            let blobId = '';
                            if (!fetchable(imageURL)) {
                                const imageURLSplit = imageURL.split('/');
                                while (imageURLSplit.length > 0) {
                                    const key = assets
                                        .getPathBlobIdMap()
                                        .get(decodeURIComponent(imageURLSplit.join('/')));
                                    if (key) {
                                        blobId = key;
                                        break;
                                    }
                                    imageURLSplit.shift();
                                }
                            }
                            else {
                                try {
                                    const res = await fetchImage(imageURL, undefined, this.configs.get('imageProxy'));
                                    if (!res) {
                                        break;
                                    }
                                    const clonedRes = res.clone();
                                    const name = getFilenameFromContentDisposition(res.headers.get('Content-Disposition') ?? '') ??
                                        (imageURL.split('/').at(-1) ?? 'image') +
                                            '.' +
                                            (res.headers.get('Content-Type')?.split('/').at(-1) ??
                                                'png');
                                    const file = new File([await res.blob()], name, {
                                        type: res.headers.get('Content-Type') ?? '',
                                    });
                                    blobId = await sha(await clonedRes.arrayBuffer());
                                    assets?.getAssets().set(blobId, file);
                                    await assets?.writeToBlob(blobId);
                                }
                                catch (_) {
                                    break;
                                }
                            }
                            context
                                .openNode({
                                type: 'block',
                                id: nanoid(),
                                flavour: 'affine:image',
                                props: {
                                    sourceId: blobId,
                                },
                                children: [],
                            }, 'children')
                                .closeNode();
                            context.skipAllChildren();
                            break;
                        }
                        break;
                    }
                    case 'pre': {
                        const code = hastQuerySelector(o.node, 'code');
                        if (!code) {
                            break;
                        }
                        const codeText = code.children.length === 1 && code.children[0].type === 'text'
                            ? code.children[0]
                            : { ...code, tagName: 'div' };
                        let codeLang = Array.isArray(code.properties?.className)
                            ? code.properties.className.find(className => typeof className === 'string' && className.startsWith('code-'))
                            : undefined;
                        codeLang =
                            typeof codeLang === 'string'
                                ? codeLang.replace('code-', '')
                                : undefined;
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:code',
                            props: {
                                language: codeLang ?? 'Plain Text',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._hastToDelta(codeText, {
                                        trim: false,
                                        pre: true,
                                    }),
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        context.skipAllChildren();
                        break;
                    }
                    case 'blockquote': {
                        context.setGlobalContext('hast:blockquote', true);
                        // Special case for no paragraph in blockquote
                        const texts = hastGetTextChildren(o.node);
                        // check if only blank text
                        const onlyBlankText = texts.every(text => !text.value.trim());
                        if (texts && !onlyBlankText) {
                            context
                                .openNode({
                                type: 'block',
                                id: nanoid(),
                                flavour: 'affine:paragraph',
                                props: {
                                    type: 'quote',
                                    text: {
                                        '$blocksuite:internal:text$': true,
                                        delta: this._hastToDelta(hastGetTextChildrenOnlyAst(o.node)),
                                    },
                                },
                                children: [],
                            }, 'children')
                                .closeNode();
                        }
                        break;
                    }
                    case 'body':
                    case 'div':
                    case 'span':
                    case 'footer': {
                        if (
                        // Check if it is a paragraph like div
                        o.parent?.node.type === 'element' &&
                            o.parent.node.tagName !== 'li' &&
                            (hastGetElementChildren(o.node).every(child => [
                                'a',
                                'b',
                                'bdi',
                                'bdo',
                                'br',
                                'code',
                                'del',
                                'em',
                                'i',
                                'ins',
                                'mark',
                                'span',
                                'strong',
                                'u',
                            ].includes(child.tagName)) ||
                                o.node.children
                                    .map(child => child.type)
                                    .every(type => type === 'text'))) {
                            context
                                .openNode({
                                type: 'block',
                                id: nanoid(),
                                flavour: 'affine:paragraph',
                                props: {
                                    type: 'text',
                                    text: {
                                        '$blocksuite:internal:text$': true,
                                        delta: this._hastToDelta(o.node),
                                    },
                                },
                                children: [],
                            }, 'children')
                                .closeNode();
                            context.skipAllChildren();
                        }
                        break;
                    }
                    case 'p': {
                        context.openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: context.getGlobalContext('hast:blockquote')
                                    ? 'quote'
                                    : 'text',
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._hastToDelta(o.node),
                                },
                            },
                            children: [],
                        }, 'children');
                        break;
                    }
                    case 'ul':
                    case 'ol': {
                        context.setNodeContext('hast:list:type', 'bulleted');
                        if (o.node.tagName === 'ol') {
                            context.setNodeContext('hast:list:type', 'numbered');
                        }
                        else if (Array.isArray(o.node.properties?.className)) {
                            if (o.node.properties.className.includes('to-do-list')) {
                                context.setNodeContext('hast:list:type', 'todo');
                            }
                            else if (o.node.properties.className.includes('toggle')) {
                                context.setNodeContext('hast:list:type', 'toggle');
                            }
                            else if (o.node.properties.className.includes('bulleted-list')) {
                                context.setNodeContext('hast:list:type', 'bulleted');
                            }
                        }
                        break;
                    }
                    case 'li': {
                        const firstElementChild = hastGetElementChildren(o.node)[0];
                        const listType = context.getNodeContext('hast:list:type');
                        o.node = hastFlatNodes(o.node, tagName => tagName === 'div' || tagName === 'p');
                        context.openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:list',
                            props: {
                                type: listType,
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: listType !== 'toggle'
                                        ? this._hastToDelta(o.node)
                                        : this._hastToDelta(hastQuerySelector(o.node, 'summary') ?? o.node),
                                },
                                checked: listType === 'todo'
                                    ? firstElementChild &&
                                        Array.isArray(firstElementChild.properties?.className) &&
                                        firstElementChild.properties.className.includes('checkbox-on')
                                    : false,
                                collapsed: listType === 'toggle'
                                    ? firstElementChild &&
                                        firstElementChild.tagName === 'details' &&
                                        firstElementChild.properties.open === undefined
                                    : false,
                            },
                            children: [],
                        }, 'children');
                        break;
                    }
                    case 'hr': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:divider',
                            props: {},
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'h1':
                    case 'h2':
                    case 'h3':
                    case 'h4':
                    case 'h5':
                    case 'h6': {
                        context
                            .openNode({
                            type: 'block',
                            id: nanoid(),
                            flavour: 'affine:paragraph',
                            props: {
                                type: o.node.tagName,
                                text: {
                                    '$blocksuite:internal:text$': true,
                                    delta: this._hastToDelta(o.node),
                                },
                            },
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'iframe': {
                        const src = o.node.properties?.src;
                        if (typeof src !== 'string') {
                            break;
                        }
                        if (src.startsWith('https://www.youtube.com/embed/')) {
                            const videoId = src.substring('https://www.youtube.com/embed/'.length, src.indexOf('?') !== -1 ? src.indexOf('?') : undefined);
                            context
                                .openNode({
                                type: 'block',
                                id: nanoid(),
                                flavour: 'affine:embed-youtube',
                                props: {
                                    url: `https://www.youtube.com/watch?v=${videoId}`,
                                },
                                children: [],
                            }, 'children')
                                .closeNode();
                        }
                        break;
                    }
                }
            });
            walker.setLeave((o, context) => {
                if (o.node.type !== 'element') {
                    return;
                }
                switch (o.node.tagName) {
                    case 'div': {
                        if (o.parent?.node.type === 'element' &&
                            o.parent.node.tagName !== 'li' &&
                            Array.isArray(o.node.properties?.className)) {
                            if (o.node.properties.className.includes('affine-paragraph-block-container') ||
                                o.node.properties.className.includes('affine-block-children-container') ||
                                o.node.properties.className.includes('indented')) {
                                context.closeNode();
                            }
                        }
                        break;
                    }
                    case 'blockquote': {
                        context.setGlobalContext('hast:blockquote', false);
                        break;
                    }
                    case 'p': {
                        if (o.next?.type === 'element' &&
                            o.next.tagName === 'div' &&
                            Array.isArray(o.next.properties?.className) &&
                            (o.next.properties.className.includes('affine-block-children-container') ||
                                o.next.properties.className.includes('indented'))) {
                            // Close the node when leaving div indented
                            break;
                        }
                        context.closeNode();
                        break;
                    }
                    case 'li': {
                        context.closeNode();
                        break;
                    }
                }
            });
            return walker.walk(html, snapshot);
        };
        this._traverseSnapshot = async (snapshot, html, assets) => {
            const assetsIds = [];
            const walker = new ASTWalker();
            walker.setONodeTypeGuard((node) => BlockSnapshotSchema.safeParse(node).success);
            walker.setEnter(async (o, context) => {
                const text = (o.node.props.text ?? { delta: [] });
                switch (o.node.flavour) {
                    case 'affine:page': {
                        context
                            .openNode({
                            type: 'element',
                            tagName: 'html',
                            properties: {},
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'element',
                            tagName: 'head',
                            properties: {},
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'element',
                            tagName: 'style',
                            properties: {},
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'text',
                            value: `
                input[type='checkbox'] {
                  display: none;
                }
                label:before {
                  background: rgb(30, 150, 235);
                  border-radius: 3px;
                  height: 16px;
                  width: 16px;
                  display: inline-block;
                  cursor: pointer;
                }
                input[type='checkbox'] + label:before {
                  content: '';
                  background: rgb(30, 150, 235);
                  color: #fff;
                  font-size: 16px;
                  line-height: 16px;
                  text-align: center;
                }
                input[type='checkbox']:checked + label:before {
                  content: '✓';
                }
                `.replace(/\s\s+/g, ''),
                        }, 'children')
                            .closeNode()
                            .closeNode()
                            .closeNode()
                            .openNode({
                            type: 'element',
                            tagName: 'body',
                            properties: {},
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'element',
                            tagName: 'div',
                            properties: {
                                style: 'width: 70vw; margin: 60px auto;',
                            },
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'comment',
                            value: 'BlockSuiteDocTitlePlaceholder',
                        })
                            .closeNode();
                        break;
                    }
                    case 'affine:code': {
                        const rawLang = o.node.props.language;
                        const matchedLang = rawLang
                            ? (bundledLanguagesInfo.find(info => info.id === rawLang ||
                                info.name === rawLang ||
                                info.aliases?.includes(rawLang))?.id ?? 'text')
                            : 'text';
                        // @ts-ignore
                        const text = o.node.props.text.delta;
                        const code = text.map(delta => delta.insert).join('');
                        const hast = await codeToHast(code, {
                            lang: matchedLang,
                            theme: ThemeObserver.mode === ColorScheme.Dark
                                ? 'dark-plus'
                                : 'light-plus',
                        });
                        // @ts-ignore
                        context.openNode(hast, 'children').closeNode();
                        break;
                    }
                    case 'affine:paragraph': {
                        switch (o.node.props.type) {
                            case 'text': {
                                context
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-paragraph-block-container'],
                                    },
                                    children: [],
                                }, 'children')
                                    .openNode({
                                    type: 'element',
                                    tagName: 'p',
                                    properties: {},
                                    children: this._deltaToHast(text.delta),
                                }, 'children')
                                    .closeNode()
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-block-children-container'],
                                        style: 'padding-left: 26px;',
                                    },
                                    children: [],
                                }, 'children');
                                break;
                            }
                            case 'h1':
                            case 'h2':
                            case 'h3':
                            case 'h4':
                            case 'h5':
                            case 'h6': {
                                context
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-paragraph-block-container'],
                                    },
                                    children: [],
                                }, 'children')
                                    .openNode({
                                    type: 'element',
                                    tagName: o.node.props.type,
                                    properties: {},
                                    children: this._deltaToHast(text.delta),
                                }, 'children')
                                    .closeNode()
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-block-children-container'],
                                        style: 'padding-left: 26px;',
                                    },
                                    children: [],
                                }, 'children');
                                break;
                            }
                            case 'quote': {
                                context
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-paragraph-block-container'],
                                    },
                                    children: [],
                                }, 'children')
                                    .openNode({
                                    type: 'element',
                                    tagName: 'blockquote',
                                    properties: {
                                        className: ['quote'],
                                    },
                                    children: [],
                                }, 'children')
                                    .openNode({
                                    type: 'element',
                                    tagName: 'p',
                                    properties: {},
                                    children: this._deltaToHast(text.delta),
                                }, 'children')
                                    .closeNode()
                                    .closeNode()
                                    .openNode({
                                    type: 'element',
                                    tagName: 'div',
                                    properties: {
                                        className: ['affine-block-children-container'],
                                        style: 'padding-left: 26px;',
                                    },
                                    children: [],
                                }, 'children');
                                break;
                            }
                        }
                        break;
                    }
                    case 'affine:list': {
                        context
                            .openNode({
                            type: 'element',
                            tagName: 'div',
                            properties: {
                                className: ['affine-list-block-container'],
                            },
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'element',
                            tagName: o.node.props.type === 'numbered' ? 'ol' : 'ul',
                            properties: {
                                style: o.node.props.type === 'todo'
                                    ? 'list-style-type: none;'
                                    : '',
                            },
                            children: [],
                        }, 'children');
                        const liChildren = this._deltaToHast(text.delta);
                        if (o.node.props.type === 'todo') {
                            liChildren.unshift({
                                type: 'element',
                                tagName: 'input',
                                properties: {
                                    type: 'checkbox',
                                    checked: o.node.props.checked,
                                },
                                children: [
                                    {
                                        type: 'element',
                                        tagName: 'label',
                                        properties: {},
                                        children: [],
                                    },
                                ],
                            });
                        }
                        context
                            .openNode({
                            type: 'element',
                            tagName: 'li',
                            properties: {},
                            children: liChildren,
                        }, 'children')
                            .closeNode()
                            .closeNode()
                            .openNode({
                            type: 'element',
                            tagName: 'div',
                            properties: {
                                className: ['affine-block-children-container'],
                                style: 'padding-left: 26px;',
                            },
                            children: [],
                        }, 'children');
                        break;
                    }
                    case 'affine:divider': {
                        context
                            .openNode({
                            type: 'element',
                            tagName: 'hr',
                            properties: {},
                            children: [],
                        }, 'children')
                            .closeNode();
                        break;
                    }
                    case 'affine:image': {
                        const blobId = (o.node.props.sourceId ?? '');
                        if (!assets) {
                            break;
                        }
                        await assets.readFromBlob(blobId);
                        const blob = assets.getAssets().get(blobId);
                        assetsIds.push(blobId);
                        if (!blob) {
                            break;
                        }
                        const blobName = getAssetName(assets.getAssets(), blobId);
                        const isScaledImage = o.node.props.width && o.node.props.height;
                        const widthStyle = isScaledImage
                            ? {
                                width: `${o.node.props.width}px`,
                                height: `${o.node.props.height}px`,
                            }
                            : {};
                        context
                            .openNode({
                            type: 'element',
                            tagName: 'figure',
                            properties: {
                                className: ['affine-image-block-container'],
                            },
                            children: [],
                        }, 'children')
                            .openNode({
                            type: 'element',
                            tagName: 'img',
                            properties: {
                                src: `assets/${blobName}`,
                                alt: blobName,
                                title: o.node.props.caption ?? null,
                                ...widthStyle,
                            },
                            children: [],
                        }, 'children')
                            .closeNode()
                            .closeNode();
                        break;
                    }
                }
            });
            walker.setLeave((o, context) => {
                switch (o.node.flavour) {
                    case 'affine:page': {
                        context.closeNode().closeNode().closeNode();
                        break;
                    }
                    case 'affine:paragraph': {
                        context.closeNode().closeNode();
                        break;
                    }
                    case 'affine:list': {
                        context.closeNode().closeNode();
                        break;
                    }
                }
            });
            return {
                ast: (await walker.walk(snapshot, html)),
                assetsIds,
            };
        };
    }
    _htmlToAst(html) {
        return unified().use(rehypeParse).parse(html);
    }
    async fromBlockSnapshot(payload) {
        const root = {
            type: 'root',
            children: [
                {
                    type: 'doctype',
                },
            ],
        };
        const { ast, assetsIds } = await this._traverseSnapshot(payload.snapshot, root, payload.assets);
        return {
            file: this._astToHtml(ast),
            assetsIds,
        };
    }
    async fromDocSnapshot(payload) {
        const { file, assetsIds } = await this.fromBlockSnapshot({
            snapshot: payload.snapshot.blocks,
            assets: payload.assets,
        });
        return {
            file: file.replace('<!--BlockSuiteDocTitlePlaceholder-->', `<h1>${payload.snapshot.meta.title}</h1>`),
            assetsIds,
        };
    }
    async fromSliceSnapshot(payload) {
        let buffer = '';
        const sliceAssetsIds = [];
        for (const contentSlice of payload.snapshot.content) {
            const root = {
                type: 'root',
                children: [],
            };
            const { ast, assetsIds } = await this._traverseSnapshot(contentSlice, root, payload.assets);
            sliceAssetsIds.push(...assetsIds);
            buffer += this._astToHtml(ast);
        }
        const html = buffer;
        return {
            file: html,
            assetsIds: sliceAssetsIds,
        };
    }
    toBlockSnapshot(payload) {
        const htmlAst = this._htmlToAst(payload.file);
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: DEFAULT_NOTE_BACKGROUND_COLOR,
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        return this._traverseHtml(htmlAst, blockSnapshotRoot, payload.assets);
    }
    async toDocSnapshot(payload) {
        const htmlAst = this._htmlToAst(payload.file);
        const titleAst = hastQuerySelector(htmlAst, 'title');
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: DEFAULT_NOTE_BACKGROUND_COLOR,
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        return {
            type: 'page',
            meta: {
                id: nanoid(),
                title: hastGetTextContent(titleAst, 'Untitled'),
                createDate: Date.now(),
                tags: [],
            },
            blocks: {
                type: 'block',
                id: nanoid(),
                flavour: 'affine:page',
                props: {
                    title: {
                        '$blocksuite:internal:text$': true,
                        delta: this._hastToDelta(titleAst ?? {
                            type: 'text',
                            value: 'Untitled',
                        }),
                    },
                },
                children: [
                    {
                        type: 'block',
                        id: nanoid(),
                        flavour: 'affine:surface',
                        props: {
                            elements: {},
                        },
                        children: [],
                    },
                    await this._traverseHtml(htmlAst, blockSnapshotRoot, payload.assets),
                ],
            },
        };
    }
    async toSliceSnapshot(payload) {
        const htmlAst = this._htmlToAst(payload.file);
        const blockSnapshotRoot = {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:note',
            props: {
                xywh: '[0,0,800,95]',
                background: DEFAULT_NOTE_BACKGROUND_COLOR,
                index: 'a0',
                hidden: false,
                displayMode: NoteDisplayMode.DocAndEdgeless,
            },
            children: [],
        };
        const contentSlice = (await this._traverseHtml(htmlAst, blockSnapshotRoot, payload.assets));
        if (contentSlice.children.length === 0) {
            return null;
        }
        return {
            type: 'slice',
            content: [contentSlice],
            pageVersion: payload.pageVersion,
            workspaceVersion: payload.workspaceVersion,
            workspaceId: payload.workspaceId,
            pageId: payload.pageId,
        };
    }
}
//# sourceMappingURL=html.js.map