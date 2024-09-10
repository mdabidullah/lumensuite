import { SurfaceBlockModel as BaseSurfaceModel } from '@blocksuite/block-std/gfx';
import { DisposableGroup } from '@blocksuite/global/utils';
import { Boxed, defineBlockSchema, DocCollection, Text, } from '@blocksuite/store';
import { elementsCtorMap } from './element-model/index.js';
import { connectorMiddleware } from './middlewares/connector.js';
import { groupRelationMiddleware } from './middlewares/group.js';
import { SurfaceBlockTransformer } from './surface-transformer.js';
const migration = {
    toV4: data => {
        const { elements } = data;
        if (elements instanceof Boxed) {
            const value = elements.getValue();
            if (!value) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            for (const [key, element] of value.entries()) {
                const type = element.get('type');
                if (type === 'shape' || type === 'text') {
                    const isBold = element.get('isBold');
                    const isItalic = element.get('isItalic');
                    element.delete('isBold');
                    element.delete('isItalic');
                    if (isBold) {
                        element.set('bold', true);
                    }
                    if (isItalic) {
                        element.set('italic', true);
                    }
                }
                if (type === 'connector') {
                    const source = element.get('source');
                    const target = element.get('target');
                    const sourceId = source['id'];
                    const targetId = target['id'];
                    if (!source['position'] && !sourceId) {
                        value.delete(key);
                        return;
                    }
                    if (!target['position'] && !targetId) {
                        value.delete(key);
                        return;
                    }
                }
            }
        }
        else {
            for (const key of Object.keys(elements)) {
                const element = elements[key];
                const type = element['type'];
                if (type === 'shape' || type === 'text') {
                    const isBold = element['isBold'];
                    const isItalic = element['isItalic'];
                    delete element['isBold'];
                    delete element['isItalic'];
                    if (isBold) {
                        element['bold'] = true;
                    }
                    if (isItalic) {
                        element['italic'] = true;
                    }
                }
                if (type === 'connector') {
                    const source = element['source'];
                    const target = element['target'];
                    const sourceId = source['id'];
                    const targetId = target['id'];
                    // @ts-expect-error
                    if (!source['position'] && (!sourceId || !elements[sourceId])) {
                        delete elements[key];
                        return;
                    }
                    // @ts-expect-error
                    if (!target['position'] && (!targetId || !elements[targetId])) {
                        delete elements[key];
                        return;
                    }
                }
            }
        }
    },
    toV5: data => {
        const { elements } = data;
        if (!(elements instanceof Boxed)) {
            const yMap = new DocCollection.Y.Map();
            Object.entries(elements).forEach(([key, value]) => {
                const map = new DocCollection.Y.Map();
                Object.entries(value).forEach(([_key, _value]) => {
                    map.set(_key, _value instanceof DocCollection.Y.Text
                        ? _value.clone()
                        : _value instanceof Text
                            ? _value.yText.clone()
                            : _value);
                });
                yMap.set(key, map);
            });
            const wrapper = new Boxed(yMap);
            data.elements = wrapper;
        }
        const childrenMap = data.elements.getValue();
        for (const [id, element] of childrenMap) {
            if (element.get('type') === 'mindmap' ||
                element.get('type') === 'group') {
                const children = element.get('children');
                if (children?.size === 0) {
                    childrenMap.delete(id);
                }
            }
        }
    },
};
export const SurfaceBlockSchema = defineBlockSchema({
    flavour: 'affine:surface',
    props: (internalPrimitives) => ({
        elements: internalPrimitives.Boxed(new DocCollection.Y.Map()),
    }),
    metadata: {
        version: 5,
        role: 'hub',
        parent: ['affine:page'],
        children: [
            'affine:frame',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:embed-*',
            'affine:edgeless-text',
        ],
    },
    onUpgrade: (data, previousVersion, version) => {
        if (previousVersion < 4 && version >= 4) {
            migration.toV4(data);
        }
        if (previousVersion < 5 && version >= 5) {
            migration.toV5(data);
        }
    },
    transformer: () => new SurfaceBlockTransformer(),
    toModel: () => new SurfaceBlockModel(),
});
export class SurfaceBlockModel extends BaseSurfaceModel {
    constructor() {
        super(...arguments);
        this._disposables = new DisposableGroup();
    }
    _init() {
        this._extendElement(elementsCtorMap);
        super._init();
    }
    applyMiddlewares() {
        [
            connectorMiddleware(this, this.hooks),
            groupRelationMiddleware(this, this.hooks),
        ].forEach(disposable => this._disposables.add(disposable));
    }
    getConnectors(id) {
        const connectors = this.getElementsByType('connector');
        return connectors.filter(connector => connector.source?.id === id || connector.target?.id === id);
    }
    getElementsByType(type) {
        return super.getElementsByType(type);
    }
}
//# sourceMappingURL=surface-model.js.map