"use server";

import { IUserCardProps } from "../../types";

export async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });

  if (!response.ok) return [];

  const data = await response.json();
  return data;
}

export async function getUser({
  id,
}: {
  id: string | number;
}): Promise<IUserCardProps | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) return null;

  const data = await response.json();
  return data;
}
