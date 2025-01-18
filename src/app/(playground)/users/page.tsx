"use server";
import { Suspense } from "react";
import UserGrid from "./_components/UserGrid";
import { getUsers } from "./_actions/user.actions";

function PlaygroundPage() {
  const users = getUsers();

  return (
    <div className="w-[1200px] mx-auto max-[1290px]:w-full max-[1250px]:mx-0 p-4">
      <Suspense fallback={"Loading..."}>
        <UserGrid users={users} />
      </Suspense>
    </div>
  );
}

export default PlaygroundPage;
