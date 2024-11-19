import { z } from "zod";

export const updateUserSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
    fullName: z.string().min(1, "Full name is required"),
});

export type UpdateUserScehma = z.infer<typeof updateUserSchema>;
