"use server";

import { RegisterFormSchema, LoginFormSchema } from "@/schemas/auth.schemas";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function RegisterUserAction(state: unknown, formData: FormData) {
  const formInputs = Object.fromEntries(formData.entries());

  const { success, error, data } = RegisterFormSchema.safeParse(formInputs);

  if (!success) {
    return {
      success: false,
      message: "Invalid input data",
      errors: error.flatten().fieldErrors,
      inputs: formInputs,
    };
  }

  // Add user to the database

  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: responseData?.message,
      errors: responseData?.errors,
      inputs: formInputs,
    };
  } else {
    return {
      success: true,
      message: "Account created successfully",
      inputs: responseData,
    };
  }
}

export async function LoginUserAction(state: unknown, formData: FormData) {
  const formInputs = Object.fromEntries(formData.entries());
  const { success, error, data } = LoginFormSchema.safeParse(formInputs);

  if (!success) {
    return {
      success: false,
      message: "Invalid input data",
      errors: error.flatten().fieldErrors,
      inputs: formInputs,
    };
  }

  // Return safe parsed data

  return {
    success: true,
    message: null,
    inputs: data,
  };
}
