"use client";

// import type { Metadata } from "next";
import { useSession } from "next-auth/react";

// export const metadata: Metadata = {
//   title: "User's profile",
//   description: "Profile for this specified user",
// };

const Page = () => {
  const { status, data } = useSession();

  console.log(data)

  return (
    <>
      <h1 className="">User is {status}</h1>
    </>
  );
};

export default Page;
