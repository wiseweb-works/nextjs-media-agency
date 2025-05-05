import * as z from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long."),
  email: z.string().min(3, "Email is required").email("Invalid email address"),
  password: z
    .string()
    .min(8, "- Be at least 8 characters")
    .regex(/[a-z]/, "- Contain at least one lowercase letter")
    .regex(/[A-Z]/, "- Contain at least one uppercase letter")
    .regex(/[0-9]/, "- Contain at least one number"),
});

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(3, "Email is required")
    .email("Please enter your email address"),
  password: z
    .string()
    .min(8, "- Be at least 8 characters")
    .regex(/[a-z]/, "- Contain at least one lowercase letter")
    .regex(/[A-Z]/, "- Contain at least one uppercase letter")
    .regex(/[0-9]/, "- Contain at least one number"),
});
