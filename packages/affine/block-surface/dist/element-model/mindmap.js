var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { LayoutType, LocalConnectorElementModel, MindmapStyle, TextResizing, } from '@lumensuite/affine-model';
import { convert, field, GfxGroupLikeElementModel, observe, watch, } from '@lumensuite/block-std/gfx';
import { assertType, deserializeXYWH, keys, last, pick, } from '@lumensuite/global/utils';
import { DocCollection } from '@lumensuite/store';
import { generateKeyBetween } from 'fractional-indexing';
import { z } from 'zod';
import { layout } from './utils/mindmap/layout.js';
import { applyNodeStyle, mindmapStyleGetters } from './utils/mindmap/style.js';
const baseNodeSchema = z.object({
    text: z.string(),
    xywh: z.optional(z.string()),
});
const nodeSchema = baseNodeSchema.extend({
    children: z.lazy(() => nodeSchema.array()).optional(),
});
function isNodeType(node) {
    return typeof node.text === 'string' && Array.isArray(node.children);
}
let MindmapElementModel = (() => {
    let _classSuper = GfxGroupLikeElementModel;
    let _children_decorators;
    let _children_initializers = [];
    let _children_extraInitializers = [];
    let _layoutType_decorators;
    let _layoutType_initializers = [];
    let _layoutType_extraInitializers = [];
    let _style_decorators;
    let _style_initializers = [];
    let _style_extraInitializers = [];
    return class MindmapElementModel extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _children_decorators = [convert((initialValue, instance) => {
                    if (!(initialValue instanceof DocCollection.Y.Map)) {
                        nodeSchema.parse(initialValue);
                        assertType(initialValue);
                        const map = new DocCollection.Y.Map();
                        const surface = instance.surface;
                        const doc = surface.doc;
                        const recursive = (node, parent = null, index = 'a0') => {
                            const id = surface.addElement({
                                type: 'shape',
                                text: node.text,
                                xywh: node.xywh ? node.xywh : `[0, 0, 100, 30]`,
                            });
                            map.set(id, {
                                index,
                                parent: parent ?? undefined,
                            });
                            let curIdx = 'a0';
                            node.children?.forEach(childNode => {
                                recursive(childNode, id, curIdx);
                                curIdx = generateKeyBetween(curIdx, null);
                            });
                        };
                        doc.transact(() => {
                            recursive(initialValue);
                        });
                        instance.requestBuildTree();
                        instance.requestLayout();
                        return map;
                    }
                    else {
                        instance.requestBuildTree();
                        instance.requestLayout();
                        return initialValue;
                    }
                }), observe((_, instance, transaction) => {
                    instance.setChildIds(Array.from(instance.children.keys()), transaction?.local ?? true);
                    instance.buildTree();
                    instance.connectors.clear();
                }), field()];
            _layoutType_decorators = [watch((_, instance, local) => {
                    if (!local) {
                        return;
                    }
                    instance.surface.doc.transact(() => {
                        instance['_tree']?.children.forEach(child => {
                            if (!instance.children.has(child.id)) {
                                return;
                            }
                            instance.children.set(child.id, {
                                index: child.detail.index,
                                parent: child.detail.parent,
                            });
                        });
                    });
                    instance.buildTree();
                }), field()];
            _style_decorators = [watch((_, instance, local) => {
                    if (local) {
                        instance.layout();
                    }
                }), field()];
            __esDecorate(this, null, _children_decorators, { kind: "accessor", name: "children", static: false, private: false, access: { has: obj => "children" in obj, get: obj => obj.children, set: (obj, value) => { obj.children = value; } }, metadata: _metadata }, _children_initializers, _children_extraInitializers);
            __esDecorate(this, null, _layoutType_decorators, { kind: "accessor", name: "layoutType", static: false, private: false, access: { has: obj => "layoutType" in obj, get: obj => obj.layoutType, set: (obj, value) => { obj.layoutType = value; } }, metadata: _metadata }, _layoutType_initializers, _layoutType_extraInitializers);
            __esDecorate(this, null, _style_decorators, { kind: "accessor", name: "style", static: false, private: false, access: { has: obj => "style" in obj, get: obj => obj.style, set: (obj, value) => { obj.style = value; } }, metadata: _metadata }, _style_initializers, _style_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get nodeMap() {
            return this._nodeMap;
        }
        get rotate() {
            return 0;
        }
        set rotate(_) { }
        get styleGetter() {
            return mindmapStyleGetters[this.style];
        }
        get tree() {
            return this._tree;
        }
        get type() {
            return 'mindmap';
        }
        static createFromTree(tree, style, layoutType, surface) {
            const children = new DocCollection.Y.Map();
            const traverse = (subtree, parent) => {
                const value = {
                    ...subtree.detail,
                    parent,
                };
                if (!parent) {
                    delete value.parent;
                }
                children.set(subtree.id, value);
                subtree.children.forEach(child => traverse(child, subtree.id));
            };
            traverse(tree);
            const mindmapId = surface.addElement({
                type: 'mindmap',
                children,
                layoutType,
                style,
            });
            const mindmap = surface.getElementById(mindmapId);
            mindmap.layout();
            return mindmap;
        }
        static propsToY(props) {
            if (props.children &&
                !isNodeType(props.children) &&
                !(props.children instanceof DocCollection.Y.Map)) {
                const children = new DocCollection.Y.Map();
                keys(props.children).forEach(key => {
                    const detail = pick(props.children[key], ['index', 'parent', 'preferredDir']);
                    children.set(key, detail);
                });
                props.children = children;
            }
            return props;
        }
        _cfgBalanceLayoutDir() {
            if (this.layoutType !== LayoutType.BALANCE) {
                return;
            }
            let splitDir = undefined;
            const tree = this._tree;
            const splitPoint = tree.children.findIndex((child, index) => {
                if (child.detail.preferredDir === LayoutType.LEFT ||
                    (child.detail.preferredDir === LayoutType.RIGHT &&
                        child.children[index + 1]?.detail.preferredDir !== LayoutType.RIGHT)) {
                    splitDir = child.detail.preferredDir;
                    return true;
                }
                return false;
            });
            if (splitPoint === -1 ||
                (splitDir === LayoutType.LEFT && splitPoint >= tree.children.length / 2)) {
                const mid = Math.ceil(tree.children.length / 2);
                tree.right.push(...tree.children.slice(0, mid));
                tree.left.push(...tree.children.slice(mid));
            }
            else {
                tree.right.push(...tree.children.slice(0, splitPoint + 1));
                tree.left.push(...tree.children.slice(splitPoint + 1));
            }
            tree.left.reverse();
        }
        _isConnectorOutdated(options, updateKey = true) {
            const { connector, from, to, layout } = options;
            const cacheKey = `${from.element.xywh}-${to.element.xywh}-${layout}-${this.style}`;
            // @ts-ignore
            if (connector['MINDMAP_CONNECTOR'] === cacheKey) {
                return { outdated: false, cacheKey };
            }
            else if (updateKey) {
                // @ts-ignore
                connector['MINDMAP_CONNECTOR'] = cacheKey;
            }
            return { outdated: true, cacheKey };
        }
        addConnector(from, to, layout, connectorStyle, extra = false) {
            const id = `#${from.id}-${to.id}`;
            if (extra) {
                this.extraConnectors.set(id, new LocalConnectorElementModel());
            }
            else if (this.connectors.has(id)) {
                const connector = this.connectors.get(id);
                const { outdated } = this._isConnectorOutdated({
                    connector,
                    from,
                    to,
                    layout,
                });
                if (!outdated) {
                    return connector;
                }
            }
            else {
                const connector = new LocalConnectorElementModel();
                // update cache key
                this._isConnectorOutdated({
                    connector,
                    from,
                    to,
                    layout,
                });
                this.connectors.set(id, connector);
            }
            const connector = extra
                ? this.extraConnectors.get(id)
                : this.connectors.get(id);
            connector.id = id;
            connector.source = {
                id: from.id,
                position: layout === LayoutType.RIGHT ? [1, 0.5] : [0, 0.5],
            };
            connector.target = {
                id: to.id,
                position: layout === LayoutType.RIGHT ? [0, 0.5] : [1, 0.5],
            };
            Object.entries(connectorStyle).forEach(([key, value]) => {
                // @ts-ignore
                connector[key] = value;
            });
            return connector;
        }
        addNode(
        /**
         * The parent node id of the new node. If it's null, the node will be the root node
         */
        parent, sibling, position = 'after', props = {}, 
        /**
         * Force the layout direction of the node.
         * It only works on the first level node with the layout type of BALANCE
         */
        direction) {
            if (parent && typeof parent !== 'string') {
                parent = parent.id;
            }
            assertType(parent);
            if (parent && !this._nodeMap.has(parent)) {
                throw new Error(`Parent node ${parent} not found`);
            }
            props['text'] = new DocCollection.Y.Text(props['text'] ?? 'New node');
            const type = props.type ?? 'shape';
            let id;
            this.surface.doc.transact(() => {
                const parentNode = parent ? this._nodeMap.get(parent) : null;
                if (parentNode) {
                    const isBalance = this.layoutType === LayoutType.BALANCE &&
                        this._tree.id === parentNode.id;
                    let index = last(parentNode.children)
                        ? generateKeyBetween(last(parentNode.children).detail.index, null)
                        : 'a0';
                    sibling = sibling ?? last(parentNode.children)?.id;
                    const siblingNode = typeof sibling === 'number'
                        ? parentNode.children[sibling]
                        : sibling
                            ? this._nodeMap.get(sibling)
                            : undefined;
                    const path = siblingNode
                        ? this.getPath(siblingNode)
                        : this.getPath(parentNode).concat([0]);
                    const style = this.styleGetter.getNodeStyle(siblingNode ?? parentNode, path);
                    id = this.surface.addElement({
                        type,
                        xywh: '[0,0,100,30]',
                        textResizing: TextResizing.AUTO_WIDTH,
                        maxWidth: false,
                        ...props,
                        ...style.node,
                    });
                    if (siblingNode) {
                        const siblingIndex = parentNode.children.findIndex(val => val.id === sibling);
                        index =
                            position === 'after'
                                ? generateKeyBetween(siblingNode.detail.index, parentNode.children[siblingIndex + 1]?.detail.index ?? null)
                                : generateKeyBetween(parentNode.children[siblingIndex - 1]?.detail.index ?? null, siblingNode.detail.index);
                    }
                    else if (isBalance && direction !== undefined) {
                        const lastNode = direction === LayoutType.LEFT
                            ? this._tree.left[0]
                            : last(this._tree.right);
                        if (lastNode) {
                            index = generateKeyBetween(lastNode.detail.index, null);
                        }
                    }
                    const nodeDetail = {
                        index,
                        parent: parent,
                    };
                    if (direction !== undefined && isBalance) {
                        nodeDetail.preferredDir = direction;
                    }
                    this.children.set(id, nodeDetail);
                }
                else {
                    const rootStyle = this.styleGetter.root;
                    id = this.surface.addElement({
                        type,
                        xywh: '[0,0,113,41]',
                        textResizing: TextResizing.AUTO_WIDTH,
                        maxWidth: 400,
                        ...props,
                        ...rootStyle,
                    });
                    this.children.clear();
                    this.children.set(id, {
                        index: 'a0',
                    });
                }
            });
            this.layout();
            return id;
        }
        addTree(parent, tree, 
        /**
         * `sibling` indicates where to insert a subtree among peer elements.
         * If it's a string, it represents a peer element's ID;
         * if it's a number, it represents its index.
         * The subtree will be inserted before the sibling element.
         */
        sibling, 
        /**
         * Preferred layout direction, only works when parent is root and layout type is BALANCE
         */
        layout) {
            parent = typeof parent === 'string' ? parent : parent.id;
            if (!this._nodeMap.has(parent) || !parent) {
                return null;
            }
            assertType(parent);
            if (layout === LayoutType.BALANCE ||
                this._nodeMap.get(parent) !== this._tree) {
                layout = undefined;
            }
            const traverse = (node, parent, sibling, layout) => {
                let nodeId;
                if ('text' in node) {
                    nodeId = this.addNode(parent, sibling, 'before', {
                        text: node.text,
                    }, layout);
                }
                else {
                    this.children.set(node.id, {
                        ...node.detail,
                        parent,
                    });
                    nodeId = node.id;
                }
                node.children?.forEach(child => {
                    traverse(child, nodeId);
                });
                return nodeId;
            };
            if (!('text' in tree)) {
                // Modify the children ymap directly hence need transaction
                this.surface.doc.transact(() => {
                    traverse(tree, parent, sibling, layout);
                });
                this.applyStyle();
                this.layout();
                return this._nodeMap.get(tree.id);
            }
            else {
                const nodeId = traverse(tree, parent, sibling, layout);
                this.layout();
                return this._nodeMap.get(nodeId);
            }
        }
        applyStyle(fitContent = false) {
            this.surface.doc.transact(() => {
                const style = this.styleGetter;
                if (!style)
                    return;
                applyNodeStyle(this._tree, style.root, fitContent);
                const walk = (node, path) => {
                    node.children.forEach((child, idx) => {
                        const currentPath = [...path, idx];
                        const nodeStyle = style.getNodeStyle(child, currentPath);
                        applyNodeStyle(child, nodeStyle.node, fitContent);
                        walk(child, currentPath);
                    });
                };
                walk(this._tree, [0]);
            });
        }
        buildTree() {
            const mindmapNodeMap = new Map();
            const nodesMap = this.children;
            // The element may be removed
            if (!nodesMap || nodesMap.size === 0) {
                this._nodeMap = mindmapNodeMap;
                // @ts-ignore
                this._tree = null;
                return;
            }
            let rootNode;
            nodesMap.forEach((val, id) => {
                const node = mindmapNodeMap.has(id)
                    ? mindmapNodeMap.get(id)
                    : {
                        id,
                        parent: val.parent,
                        index: val.index,
                        detail: val,
                        element: this.surface.getElementById(id),
                        children: [],
                    };
                if (!node.detail) {
                    node.detail = val;
                }
                if (!mindmapNodeMap.has(id)) {
                    mindmapNodeMap.set(id, node);
                }
                if (!val.parent) {
                    rootNode = node;
                    rootNode.left = [];
                    rootNode.right = [];
                }
                else if (mindmapNodeMap.has(val.parent)) {
                    const parentNode = mindmapNodeMap.get(val.parent);
                    parentNode.children = parentNode.children ?? [];
                    parentNode.children.push(node);
                }
                else {
                    mindmapNodeMap.set(val.parent, {
                        id: val.parent,
                        children: [node],
                        element: this.surface.getElementById(val.parent),
                    });
                }
            });
            mindmapNodeMap.forEach(node => {
                node.children.sort((a, b) => a.detail.index === b.detail.index
                    ? 0
                    : a.detail.index > b.detail.index
                        ? 1
                        : -1);
            });
            if (!rootNode) {
                return;
            }
            this._nodeMap = mindmapNodeMap;
            this._tree = rootNode;
            if (this.layoutType === LayoutType.BALANCE) {
                this._cfgBalanceLayoutDir();
            }
            else {
                this._tree[this.layoutType === LayoutType.RIGHT ? 'right' : 'left'] =
                    this._tree.children;
            }
        }
        /**
         * Detach a mindmap. It is similar to `removeChild` but
         * it does not delete the node.
         *
         * So the node can be used to create a new mind map or merge into other mind map
         */
        detach(subtree) {
            subtree =
                typeof subtree === 'string' ? this._nodeMap.get(subtree) : subtree;
            assertType(subtree);
            if (!subtree) {
                return;
            }
            const traverse = (subtree) => {
                this.children.delete(subtree.id);
                // cut the reference inside the ymap
                subtree.detail = {
                    ...subtree.detail,
                };
                subtree.children.forEach(child => traverse(child));
            };
            this.surface.doc.transact(() => {
                traverse(subtree);
            });
            this.layout();
            delete subtree.detail.parent;
            return subtree;
        }
        /**
         *
         * @param subtree The subtree of root, this only take effects when the layout type is BALANCED.
         * @returns
         */
        getChildNodes(id, subtree) {
            const node = this._nodeMap.get(id);
            if (!node) {
                return [];
            }
            if (subtree && id === this._tree.id) {
                return this._tree[subtree];
            }
            return node.children;
        }
        getConnector(from, to) {
            if (!this._nodeMap.has(from.id) || !this._nodeMap.has(to.id)) {
                return null;
            }
            return this.addConnector(from, to, this.getLayoutDir(to), this.styleGetter.getNodeStyle(to, this.getPath(to)).connector);
        }
        getLayoutDir(node) {
            node = typeof node === 'string' ? this._nodeMap.get(node) : node;
            assertType(node);
            let current = node;
            const root = this._tree;
            while (current) {
                if (current.overriddenDir !== undefined) {
                    return current.overriddenDir;
                }
                const parent = current.detail.parent
                    ? (this._nodeMap.get(current.detail.parent) ?? null)
                    : null;
                if (parent === root) {
                    return root.left.includes(current)
                        ? LayoutType.LEFT
                        : root.right.includes(current)
                            ? LayoutType.RIGHT
                            : this.layoutType;
                }
                current = parent;
            }
            return this.layoutType;
        }
        getNode(id) {
            return this._nodeMap.get(id) ?? null;
        }
        getParentNode(id) {
            const node = this.children.get(id);
            return node?.parent ? (this._nodeMap.get(node.parent) ?? null) : null;
        }
        /**
         * Path is an array of indexes that represent the path from the root node to the target node.
         * The first element of the array is always 0, which represents the root node.
         * @param element
         * @returns
         *
         * @example
         * ```ts
         * const path = mindmap.getPath('nodeId');
         * // [0, 1, 2]
         * ```
         */
        getPath(element) {
            let node = this._nodeMap.get(typeof element === 'string' ? element : element.id);
            if (!node) {
                throw new Error('Node not found');
            }
            const path = [];
            while (node && node !== this._tree) {
                const parent = this._nodeMap.get(node.detail.parent);
                path.unshift(parent.children.indexOf(node));
                node = parent;
            }
            path.unshift(0);
            return path;
        }
        getSiblingNode(id, direction = 'next', 
        /**
         * The subtree of which that the sibling node belongs to,
         * this is used when the layout type is BALANCED.
         */
        subtree) {
            const node = this._nodeMap.get(id);
            if (!node) {
                return null;
            }
            const parent = this._nodeMap.get(node.detail.parent);
            if (!parent) {
                return null;
            }
            const childrenTree = subtree && parent.id === this._tree.id
                ? this._tree[subtree]
                : parent.children;
            const idx = childrenTree.indexOf(node);
            if (idx === -1) {
                return null;
            }
            const siblingIndex = direction === 'next' ? idx + 1 : idx - 1;
            const sibling = childrenTree[siblingIndex] ?? null;
            return sibling;
        }
        layout(tree = this.tree, applyStyle = true, layoutType) {
            if (!tree || !tree.element)
                return;
            if (applyStyle) {
                this.applyStyle(true);
            }
            this.surface.doc.transact(() => {
                const path = this.getPath(tree.id);
                layout(tree, this, layoutType ?? this.getLayoutDir(tree.id), path);
            });
        }
        moveTo(targetXYWH) {
            const { x, y } = this;
            const targetPos = typeof targetXYWH === 'string' ? deserializeXYWH(targetXYWH) : targetXYWH;
            const offsetX = targetPos[0] - x;
            const offsetY = targetPos[1] - y + targetPos[3];
            this.surface.doc.transact(() => {
                this.childElements.forEach(el => {
                    const deserializedXYWH = deserializeXYWH(el.xywh);
                    el.xywh =
                        `[${deserializedXYWH[0] + offsetX},${deserializedXYWH[1] + offsetY},${deserializedXYWH[2]},${deserializedXYWH[3]}]`;
                });
            });
        }
        moveTree(tree, parent, siblingIndex, layout) {
            parent = this._nodeMap.get(typeof parent === 'string' ? parent : parent.id);
            if (!parent || !this._nodeMap.has(tree.id)) {
                return;
            }
            assertType(parent);
            if (layout === LayoutType.BALANCE || parent !== this._tree) {
                layout = undefined;
            }
            const sibling = parent.children[siblingIndex];
            const preSibling = parent.children[siblingIndex - 1];
            const index = sibling || preSibling
                ? generateKeyBetween(preSibling?.detail.index ?? null, sibling?.detail.index ?? null)
                : (tree.detail.index ?? undefined);
            this.surface.doc.transact(() => {
                const val = layout !== undefined
                    ? {
                        ...tree.detail,
                        index,
                        parent: parent.id,
                        preferredDir: layout,
                    }
                    : {
                        ...tree.detail,
                        index,
                        parent: parent.id,
                    };
                this.children.set(tree.id, val);
            });
            this.layout();
            return this._nodeMap.get(tree.id);
        }
        onCreated() {
            this.requestBuildTree();
        }
        removeChild(id) {
            if (!this._nodeMap.has(id)) {
                return;
            }
            const surface = this.surface;
            const removedDescendants = [];
            const remove = (element) => {
                element.children?.forEach(child => {
                    remove(child);
                });
                this.children?.delete(element.id);
                removedDescendants.push(element.id);
            };
            surface.doc.transact(() => {
                remove(this._nodeMap.get(id));
            });
            queueMicrotask(() => {
                removedDescendants.forEach(id => surface.removeElement(id));
            });
            // This transaction may not end
            // force to build the elements
            this.buildTree();
            this.requestLayout();
        }
        requestBuildTree() {
            if (this._queueBuildTree) {
                return;
            }
            this._queueBuildTree = true;
            queueMicrotask(() => {
                this.buildTree();
                this._queueBuildTree = false;
            });
        }
        requestLayout() {
            if (!this._queued) {
                this._queued = true;
                queueMicrotask(() => {
                    this.layout();
                    this._queued = false;
                });
            }
        }
        serialize() {
            const result = super.serialize();
            return result;
        }
        stashTree(node) {
            const mindNode = typeof node === 'string' ? this.getNode(node) : node;
            if (!mindNode) {
                return;
            }
            const stashed = new Set();
            const traverse = (node, parent) => {
                node.element.stash('xywh');
                node.element.opacity = 0.3;
                stashed.add(node.element);
                if (parent) {
                    const connectorId = `#${parent.element.id}-${node.element.id}`;
                    const connector = this.connectors.get(connectorId);
                    if (connector) {
                        connector.opacity = 0.3;
                        stashed.add(connector);
                    }
                }
                if (node.children.length) {
                    node.children.forEach(child => traverse(child, node));
                }
            };
            const parent = this.getParentNode(mindNode.element.id);
            const parentNode = parent ? this.getNode(parent.id) : null;
            traverse(mindNode, parentNode);
            return () => {
                stashed.forEach(el => {
                    if ('pop' in el) {
                        el.pop('xywh');
                    }
                    el.opacity = 1;
                });
            };
        }
        traverse(callback) {
            const traverse = (node, parent) => {
                callback(node, parent);
                node?.children.forEach(child => {
                    traverse(child, node);
                });
            };
            if (this._tree) {
                traverse(this._tree, null);
            }
        }
        #children_accessor_storage;
        get children() { return this.#children_accessor_storage; }
        set children(value) { this.#children_accessor_storage = value; }
        #layoutType_accessor_storage;
        get layoutType() { return this.#layoutType_accessor_storage; }
        set layoutType(value) { this.#layoutType_accessor_storage = value; }
        #style_accessor_storage;
        get style() { return this.#style_accessor_storage; }
        set style(value) { this.#style_accessor_storage = value; }
        constructor() {
            super(...arguments);
            this._nodeMap = new Map();
            this._queueBuildTree = false;
            this._queued = false;
            this.connectors = new Map();
            this.extraConnectors = new Map();
            this.#children_accessor_storage = __runInitializers(this, _children_initializers, new DocCollection.Y.Map());
            this.#layoutType_accessor_storage = (__runInitializers(this, _children_extraInitializers), __runInitializers(this, _layoutType_initializers, LayoutType.RIGHT));
            this.#style_accessor_storage = (__runInitializers(this, _layoutType_extraInitializers), __runInitializers(this, _style_initializers, MindmapStyle.ONE));
            __runInitializers(this, _style_extraInitializers);
        }
    };
})();
export { MindmapElementModel };
//# sourceMappingURL=mindmap.js.map