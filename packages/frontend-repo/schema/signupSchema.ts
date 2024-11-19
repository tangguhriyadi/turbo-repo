import { z } from "zod";

export const signupSchema = z
    .object({
        email: z.string().min(1, "Email is required").email(),
        fullName: z.string().min(1, "Full name is required"),
        password: z
            .string()
            .min(6, "Password must be at least having 6 character"),
        confirmPassword: z.string().min(1, "Confirm password is required"),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                path: ["confirmPassword"],
                message: "Password does not match",
                code: z.ZodIssueCode.custom,
            });
        }
    });

export type SignupSchema = z.infer<typeof signupSchema>;
