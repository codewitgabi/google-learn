"use client";
import useAppStore from "@/lib/store";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import UnauthenticatedSidebar from "./UnauthenticatedSidebar";
import AuthenticatedSidebar from "./AuthenticatedSidebar";
import LoadingSidebar from "./LoadingSidebar";
import { useEffect } from "react";

function Sidebar() {
  const { toggleNav, navState } = useAppStore((state) => state);
  const pathname = usePathname();
  const { status } = useSession();

  useEffect(() => {
    toggleNav(); // Close sidebar on page load
  }, [toggleNav, pathname]);

  if (status === "unauthenticated") {
    return (
      <UnauthenticatedSidebar
        navState={navState}
        pathname={pathname}
        toggleNav={toggleNav}
      />
    );
  } else if (status === "authenticated") {
    return (
      <AuthenticatedSidebar
        navState={navState}
        pathname={pathname}
        toggleNav={toggleNav}
      />
    );
  } else {
    return <LoadingSidebar navState={navState} />;
  }
}

export default Sidebar;
