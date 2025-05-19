import { z } from "zod";

export const linkSchema = z.object({
    name: z.string().min(3).max(30),
    url: z.string().min(3),
    description: z.string().max(500),
    userIds: z.array(z.number()).min(1),
})