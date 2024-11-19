import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
    password: z.string().min(6, "Password must be at least having 6 character"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
