import { defineBlockSchema } from '@lumensuite/store';
export const RootBlockSchema = defineBlockSchema({
    flavour: 'test:page',
    props: internal => ({
        title: internal.Text(),
        count: 0,
        style: {},
        items: [],
    }),
    metadata: {
        version: 2,
        role: 'root',
        children: ['test:note'],
    },
});
export const NoteBlockSchema = defineBlockSchema({
    flavour: 'test:note',
    props: () => ({}),
    metadata: {
        version: 1,
        role: 'hub',
        parent: ['test:page'],
        children: ['test:heading'],
    },
});
export const HeadingBlockSchema = defineBlockSchema({
    flavour: 'test:heading',
    props: internal => ({
        type: 'h1',
        text: internal.Text(),
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: ['test:note'],
    },
});
//# sourceMappingURL=test-schema.js.map