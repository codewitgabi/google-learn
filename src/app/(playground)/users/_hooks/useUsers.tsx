"use client";

import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useUsers = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  return {
    users,
    isLoading,
    error,
  };
};

export default useUsers;
