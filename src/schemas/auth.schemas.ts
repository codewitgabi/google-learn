import { z } from "zod";

export const RegisterFormSchema = z.object({
  username: z
    .string()
    .min(3, "Must be at least 3 characters long")
    .max(20, "Must be at most 20 characters long"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  firstName: z.string().min(2, "Must be at least 2 characters long"),
  lastName: z.string().min(2, "Must be at least 2 characters long"),
});
