import { type SchemaToModel } from '@lumensuite/store';
export declare const RootBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<{
            title: import("@lumensuite/store").Text;
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
        title: import("@lumensuite/store").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<{
        title: import("@lumensuite/store").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }>) | undefined;
};
export type RootBlockModel = SchemaToModel<typeof RootBlockSchema>;
export declare const NoteBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<{}>;
        flavour: "test:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: {}, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<{}>) | undefined;
};
export type NoteBlockModel = SchemaToModel<typeof NoteBlockSchema>;
export declare const HeadingBlockSchema: {
    version: number;
    model: {
        props: import("@lumensuite/store").PropsGetter<{
            type: string;
            text: import("@lumensuite/store").Text;
        }>;
        flavour: "test:heading";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: string;
        text: import("@lumensuite/store").Text;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@lumensuite/store").BaseBlockTransformer<{
        type: string;
        text: import("@lumensuite/store").Text;
    }>) | undefined;
};
export type HeadingBlockModel = SchemaToModel<typeof HeadingBlockSchema>;
declare global {
    namespace LumenSuite {
        interface BlockModels {
            'test:page': RootBlockModel;
            'test:note': NoteBlockModel;
            'test:heading': HeadingBlockModel;
        }
    }
}
//# sourceMappingURL=test-schema.d.ts.map