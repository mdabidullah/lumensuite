import { z } from 'zod';
export const DocModes = ['edgeless', 'page'];
export const ReferenceInfoSchema = z.object({
    pageId: z.string(),
    params: z
        .object({
        mode: z.enum(DocModes),
        blockIds: z.string().array(),
        elementIds: z.string().array(),
    })
        .partial()
        .optional(),
});
//# sourceMappingURL=doc.js.map