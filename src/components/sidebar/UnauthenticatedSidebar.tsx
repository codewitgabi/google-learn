"use client";
import { mobileLinks } from "@/lib/data";
import { SidebarProps } from "@/types/general.types";
import Link from "next/link";
import OpenSidebarBtn from "./buttons/OpenSidebarBtn";
import CloseSidebarBtn from "./buttons/CloseSidebarBtn";

function UnauthenticatedSidebar({
  navState,
  pathname,
  toggleNav,
}: SidebarProps) {
  return (
    <aside
      className={`left-0 bg-sky-blue p-8 max-md:px-4 fixed top-0 h-dvh overflow-y-auto text-center z-20 flex justify-center transition-all duration-300 overflow-x-hidden ${
        navState === "closed"
          ? "w-12 max-md:hidden"
          : "w-[250px] items-center flex-col"
      }`}
    >
      <div
        className={`w-full transition-opacity duration-300 ${
          navState === "closed" ? "scale-0 opacity-0" : "opacity-100"
        } ${
          navState === "open" ? "transition-transform delay-100 scale-100" : ""
        }`}
      >
        <h4 className="text-blue-dark text-[0.8rem]">Welcome to</h4>
        <h3 className="text-blue-dark text-2xl font-medium">Traffic Tracker</h3>
        <p className="text-[0.7rem] opacity-65">Stay ahead of time now!</p>

        <div className="flex flex-col gap-2 mt-12">
          <Link
            href="/auth/register"
            className="text-[0.75rem] bg-blue-dark hover:bg-opacity-85 transition-all duration-300 text-white py-2 px-6 rounded-md"
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="text-[0.75rem] border border-blue-dark hover:bg-blue-dark hover:text-white transition-all duration-300 py-2 px-6 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-start mt-12 w-full min-[425px]:hidden">
        {mobileLinks.map(({ href, displayName }) => (
          <Link
            key={href}
            href={href}
            className={`${
              pathname === href
                ? "bg-blue-dark text-white"
                : "text-gray-700 opacity-90"
            } py-2 px-4 text-sm w-full rounded-md text-left`}
          >
            {displayName}
          </Link>
        ))}
      </div>

      {/* Collapsed sidebar */}

      <OpenSidebarBtn navState={navState} toggleNav={toggleNav} />

      {/* Close nav arrow button */}

      <CloseSidebarBtn navState={navState} toggleNav={toggleNav} />
    </aside>
  );
}

export default UnauthenticatedSidebar;
