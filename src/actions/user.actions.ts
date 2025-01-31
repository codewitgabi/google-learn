"use server";

import { IUser } from "@/types/user.types";
import { notFound } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUserDetail(id: string) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    cache: "force-cache",
  });
  const data: Readonly<
    Awaited<{
      status: number;
      message: string;
      data: Partial<IUser>;
    }>
  > = await response.json();

  if (!response.ok) {
    return notFound();
  }

  return data.data;
}
