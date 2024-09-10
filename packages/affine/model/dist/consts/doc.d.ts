import { z } from 'zod';
export type DocMode = 'edgeless' | 'page';
export declare const DocModes: readonly ["edgeless", "page"];
export declare const ReferenceInfoSchema: z.ZodObject<{
    pageId: z.ZodString;
    params: z.ZodOptional<z.ZodObject<{
        mode: z.ZodOptional<z.ZodEnum<["edgeless", "page"]>>;
        blockIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        elementIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        mode?: "page" | "edgeless" | undefined;
        blockIds?: string[] | undefined;
        elementIds?: string[] | undefined;
    }, {
        mode?: "page" | "edgeless" | undefined;
        blockIds?: string[] | undefined;
        elementIds?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    pageId: string;
    params?: {
        mode?: "page" | "edgeless" | undefined;
        blockIds?: string[] | undefined;
        elementIds?: string[] | undefined;
    } | undefined;
}, {
    pageId: string;
    params?: {
        mode?: "page" | "edgeless" | undefined;
        blockIds?: string[] | undefined;
        elementIds?: string[] | undefined;
    } | undefined;
}>;
export type ReferenceInfo = z.infer<typeof ReferenceInfoSchema>;
//# sourceMappingURL=doc.d.ts.map