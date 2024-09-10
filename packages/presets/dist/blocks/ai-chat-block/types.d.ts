import { z } from 'zod';
declare const ChatMessageSchema: z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    role: z.ZodUnion<[z.ZodLiteral<"user">, z.ZodLiteral<"assistant">]>;
    createdAt: z.ZodString;
    attachments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    userId: z.ZodOptional<z.ZodString>;
    userName: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt: string;
    attachments?: string[] | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    avatarUrl?: string | undefined;
}, {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt: string;
    attachments?: string[] | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    avatarUrl?: string | undefined;
}>;
export declare const ChatMessagesSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    content: z.ZodString;
    role: z.ZodUnion<[z.ZodLiteral<"user">, z.ZodLiteral<"assistant">]>;
    createdAt: z.ZodString;
    attachments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    userId: z.ZodOptional<z.ZodString>;
    userName: z.ZodOptional<z.ZodString>;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt: string;
    attachments?: string[] | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    avatarUrl?: string | undefined;
}, {
    id: string;
    role: "user" | "assistant";
    content: string;
    createdAt: string;
    attachments?: string[] | undefined;
    userId?: string | undefined;
    userName?: string | undefined;
    avatarUrl?: string | undefined;
}>, "many">;
export type ChatMessage = z.infer<typeof ChatMessageSchema>;
export type MessageRole = 'user' | 'assistant';
export type MessageUserInfo = {
    userId?: string;
    userName?: string;
    avatarUrl?: string;
};
export {};
//# sourceMappingURL=types.d.ts.map