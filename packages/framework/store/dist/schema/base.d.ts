import type { Signal } from '@preact/signals-core';
import type * as Y from 'yjs';
import { Slot } from '@lumensuite/global/utils';
import { z } from 'zod';
import type { YBlock } from '../store/doc/block/index.js';
import type { Doc } from '../store/index.js';
import type { BaseBlockTransformer } from '../transformer/base.js';
import { Boxed } from '../reactive/boxed.js';
import { Text } from '../reactive/text.js';
declare const role: readonly ["root", "hub", "content"];
export type RoleType = (typeof role)[number];
export interface InternalPrimitives {
    Text: (input?: Y.Text | string) => Text;
    Boxed: <T>(input: T) => Boxed<T>;
}
export declare const internalPrimitives: InternalPrimitives;
export declare const BlockSchema: z.ZodObject<{
    version: z.ZodNumber;
    model: z.ZodObject<{
        role: z.ZodEnum<["root", "hub", "content"]>;
        flavour: z.ZodString;
        parent: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        children: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        props: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodType<InternalPrimitives, z.ZodTypeDef, InternalPrimitives>], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>>;
        toModel: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodType<BlockModel<object, SignaledProps<object>>, z.ZodTypeDef, BlockModel<object, SignaledProps<object>>>>>;
    }, "strip", z.ZodTypeAny, {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object, SignaledProps<object>>) | undefined;
    }, {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object, SignaledProps<object>>) | undefined;
    }>;
    transformer: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodType<BaseBlockTransformer<object>, z.ZodTypeDef, BaseBlockTransformer<object>>>>;
    onUpgrade: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodNumber, z.ZodNumber], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    version: number;
    model: {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object, SignaledProps<object>>) | undefined;
    };
    transformer?: ((...args: unknown[]) => BaseBlockTransformer<object>) | undefined;
    onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
}, {
    version: number;
    model: {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object, SignaledProps<object>>) | undefined;
    };
    transformer?: ((...args: unknown[]) => BaseBlockTransformer<object>) | undefined;
    onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
}>;
export type BlockSchemaType = z.infer<typeof BlockSchema>;
export type PropsGetter<Props> = (internalPrimitives: InternalPrimitives) => Props;
export type SchemaToModel<Schema extends {
    model: {
        props: PropsGetter<object>;
        flavour: string;
    };
}> = BlockModel<ReturnType<Schema['model']['props']>> & ReturnType<Schema['model']['props']> & {
    flavour: Schema['model']['flavour'];
};
export declare function defineBlockSchema<Flavour extends string, Role extends RoleType, Props extends object, Metadata extends Readonly<{
    version: number;
    role: Role;
    parent?: string[];
    children?: string[];
}>, Model extends BlockModel<Props>, Transformer extends BaseBlockTransformer<Props>>(options: {
    flavour: Flavour;
    metadata: Metadata;
    props?: (internalPrimitives: InternalPrimitives) => Props;
    onUpgrade?: (data: Props, previousVersion: number, latestVersion: number) => void;
    toModel?: () => Model;
    transformer?: () => Transformer;
}): {
    version: number;
    model: {
        props: PropsGetter<Props>;
        flavour: Flavour;
    } & Metadata;
    onUpgrade?: (data: Props, previousVersion: number, latestVersion: number) => void;
    transformer?: () => Transformer;
};
type SignaledProps<Props> = Props & {
    [P in keyof Props & string as `${P}$`]: Signal<Props[P]>;
};
declare const modelLabel: unique symbol;
declare const BlockModel_base: new <Props_1>() => Props_1;
export declare class BlockModel<Props extends object = object, PropsSignal extends object = SignaledProps<Props>> extends BlockModel_base<PropsSignal> {
    private _childModels;
    private _children;
    private _onCreated;
    private _onDeleted;
    childMap: import("@preact/signals-core").ReadonlySignal<Map<string, number>>;
    created: Slot<void>;
    deleted: Slot<void>;
    flavour: string;
    id: string;
    isEmpty: import("@preact/signals-core").ReadonlySignal<boolean>;
    keys: string[];
    [modelLabel]: Props;
    /**
     * @deprecated use doc instead
     */
    page: Doc;
    pop: (prop: keyof Props & string) => void;
    propsUpdated: Slot<{
        key: string;
    }>;
    role: RoleType;
    stash: (prop: keyof Props & string) => void;
    text?: Text;
    version: number;
    yBlock: YBlock;
    get children(): BlockModel<object, SignaledProps<object>>[];
    get doc(): Doc;
    set doc(doc: Doc);
    get parent(): BlockModel<object, SignaledProps<object>> | null;
    constructor();
    dispose(): void;
    firstChild(): BlockModel | null;
    lastChild(): BlockModel | null;
    [Symbol.dispose](): void;
}
export {};
//# sourceMappingURL=base.d.ts.map