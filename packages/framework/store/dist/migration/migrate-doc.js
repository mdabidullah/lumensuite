import { assertExists } from '@lumensuite/global/utils';
import * as Y from 'yjs';
export const docMigrations = [
    {
        desc: 'frame element --> frame block (doc v1 --> v2)',
        condition: oldPageVersion => {
            return oldPageVersion < 2;
        },
        migrate: (_, docData) => {
            const blocks = docData.getMap('blocks');
            let rootModel, surface;
            blocks.forEach(block => {
                const flavour = block.get('sys:flavour');
                if (flavour === 'affine:page') {
                    rootModel = block;
                }
                if (flavour === 'affine:surface') {
                    surface = block;
                }
            });
            assertExists(rootModel);
            assertExists(surface);
            // @ts-ignore
            const elements = surface.get('prop:elements').get('value');
            elements.forEach(element => {
                if (element.get('type') === 'frame') {
                    const frameModel = new Y.Map();
                    const id = element.get('id');
                    frameModel.set('sys:flavour', 'affine:frame');
                    frameModel.set('sys:id', id);
                    frameModel.set('sys:children', new Y.Array());
                    frameModel.set('prop:title', element.get('title').clone());
                    frameModel.set('prop:xywh', element.get('xywh'));
                    frameModel.set('prop:index', element.get('index'));
                    blocks.set(id, frameModel);
                    rootModel.get('sys:children').push([id]);
                    elements.delete(id);
                }
            });
        },
    },
];
//# sourceMappingURL=migrate-doc.js.map