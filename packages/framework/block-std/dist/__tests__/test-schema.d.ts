import { type SchemaToModel } from '@blocksuite/store';
export declare const RootBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{
            title: import("@blocksuite/store").Text;
            count: number;
            style: Record<string, unknown>;
            items: unknown[];
        }>;
        flavour: "test:page";
    } & {
        version: number;
        role: "root";
        children: string[];
    };
    onUpgrade?: ((data: {
        title: import("@blocksuite/store").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{
        title: import("@blocksuite/store").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }>) | undefined;
};
export type RootBlockModel = SchemaToModel<typeof RootBlockSchema>;
export declare const NoteBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{}>;
        flavour: "test:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: {}, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{}>) | undefined;
};
export type NoteBlockModel = SchemaToModel<typeof NoteBlockSchema>;
export declare const HeadingBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{
            type: string;
            text: import("@blocksuite/store").Text;
        }>;
        flavour: "test:heading";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: string;
        text: import("@blocksuite/store").Text;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{
        type: string;
        text: import("@blocksuite/store").Text;
    }>) | undefined;
};
export type HeadingBlockModel = SchemaToModel<typeof HeadingBlockSchema>;
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'test:page': RootBlockModel;
            'test:note': NoteBlockModel;
            'test:heading': HeadingBlockModel;
        }
    }
}
//# sourceMappingURL=test-schema.d.ts.map