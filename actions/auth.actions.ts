"use server";

import { AuthFormSchema } from "@/schemas/auth.schemas";

export async function createAccountAction(state: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const {
    success,
    data: serializedData,
    error,
  } = AuthFormSchema.safeParse({
    email: data.email,
    password: data.password,
  });

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      email: null,
      password: null,
    };
  }

  //  Perform login

  return { ...serializedData, errors: [] };
}
