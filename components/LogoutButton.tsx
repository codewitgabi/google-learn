"use client";

import { Tooltip } from "@nextui-org/tooltip";
import { VscSignOut } from "react-icons/vsc";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await signOut({ redirect: false });

    if (result) {
      router.refresh();
    }
  };

  return (
    <button onClick={handleLogout}>
      <Tooltip
        content="Logout"
        color="foreground"
        className="text-sm opacity-65"
      >
        <VscSignOut className="text-2xl" />
      </Tooltip>
    </button>
  );
}

export default LogoutButton;
