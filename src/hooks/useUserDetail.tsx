"use client";

import fetcher from "@/lib/fetcher";
import { IUser } from "@/types/user.types";
import useSWR from "swr";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
interface IUseUserDetail {
  user: Partial<IUser>;
  isLoading: boolean;
  error?: string | null;
}

const useUserDetail = (userId: string): IUseUserDetail => {
  const { data, error, isLoading } = useSWR(
    `${API_BASE_URL}/users/${userId}`,
    fetcher
  );

  return {
    user: data?.data,
    isLoading,
    error,
  };
};

export default useUserDetail;
