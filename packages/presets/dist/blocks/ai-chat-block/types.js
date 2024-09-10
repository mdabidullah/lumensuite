import { z } from 'zod';
// Define the Zod schema
const ChatMessageSchema = z.object({
    id: z.string(),
    content: z.string(),
    role: z.union([z.literal('user'), z.literal('assistant')]),
    createdAt: z.string(),
    attachments: z.array(z.string()).optional(),
    userId: z.string().optional(),
    userName: z.string().optional(),
    avatarUrl: z.string().optional(),
});
export const ChatMessagesSchema = z.array(ChatMessageSchema);
//# sourceMappingURL=types.js.map