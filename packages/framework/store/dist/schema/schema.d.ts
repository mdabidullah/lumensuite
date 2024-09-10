import type * as Y from 'yjs';
import type { BlockSchemaType } from './base.js';
export declare class Schema {
    private _upgradeBlockVersions;
    readonly flavourSchemaMap: Map<string, {
        version: number;
        model: {
            flavour: string;
            role: "root" | "hub" | "content";
            children?: string[] | undefined;
            parent?: string[] | undefined;
            props?: ((args_0: import("./base.js").InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
            toModel?: ((...args: unknown[]) => import("./base.js").BlockModel<object, object & {}>) | undefined;
        };
        transformer?: ((...args: unknown[]) => import("../index.js").BaseBlockTransformer<object>) | undefined;
        onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
    }>;
    upgradeBlock: (flavour: string, oldVersion: number, blockData: Y.Map<unknown>) => void;
    upgradeCollection: (rootData: Y.Doc) => void;
    upgradeDoc: (oldPageVersion: number, oldBlockVersions: Record<string, number>, docData: Y.Doc) => void;
    validate: (flavour: string, parentFlavour?: string, childFlavours?: string[]) => void;
    get versions(): {
        [k: string]: number;
    };
    private _matchFlavour;
    private _validateParent;
    private _validateRole;
    isValid(child: string, parent: string): boolean;
    register(blockSchema: BlockSchemaType[]): this;
    toJSON(): {
        [k: string]: Record<string, unknown>;
    };
    validateSchema(child: BlockSchemaType, parent: BlockSchemaType): void;
}
//# sourceMappingURL=schema.d.ts.map