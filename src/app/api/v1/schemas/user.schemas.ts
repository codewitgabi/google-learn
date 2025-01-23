import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3, "Must be at least 3 characters"),
  fullname: z.string().min(3, "Must be at least 3 characters"),
  city: z.string().min(3, "Must be at least 3 characters"),
  website: z.string().url("Please provide a valid url"),
  company: z.string(),
  image: z
    .string()
    .max(1024, "Must not be more than 1024 characters")
    .optional(),
});
