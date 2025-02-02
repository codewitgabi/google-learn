"use client";
import { mobileLinks, openAuthenticatedLinks } from "@/lib/data";
import { SidebarProps } from "@/types/general.types";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { CiSettings } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  IoShareSocialOutline,
  IoLogOutOutline,
  IoPersonOutline,
  IoArrowBackSharp,
} from "react-icons/io5";
import { MdOutlineRoute, MdOutlineFeedback } from "react-icons/md";
import { PiClockCounterClockwise } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import { toast } from "sonner";

function AuthenticatedSidebar({ navState, pathname, toggleNav }: SidebarProps) {
  const handleLogout = () => {
    signOut({ redirect: false });

    toast.success("Logout successful");
  };

  return (
    <aside
      className={`left-0 bg-sky-blue fixed top-0 h-dvh overflow-y-auto overflow-x-hidden z-20 flex justify-between gap-16 transition-all duration-300 ${
        navState === "closed"
          ? "w-max max-md:hidden flex-col"
          : "w-[250px] flex-col"
      }`}
    >
      <div
        className={`p-8 max-md:px-4 space-y-20 ${
          navState === "closed" ? "hidden" : ""
        }`}
      >
        <h1 className="text-center text-blue-dark font-medium">
          Traffic Tracker
        </h1>

        <div className="flex flex-col gap-2 items-start mt w-full min-[425px]:hidden opacity-70">
          {mobileLinks.map(({ href, displayName }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "bg-blue-dark text-white" : "text-gray-700"
              } py-2 px-4 text-sm w-full rounded-md text-left`}
            >
              {displayName}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-start opacity-70 max-[426px]:!mt-6">
          {openAuthenticatedLinks.map(({ href, displayName, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 text-sm ${
                pathname === href
                  ? "bg-blue-dark w-full py-2 px-4 rounded-md text-white"
                  : ""
              }`}
            >
              {icon}
              <span className="">{displayName}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`p-8 max-md:px-4 border-t border-opacity-35 border-gray-700 flex flex-col gap-4 items-start ${
          navState === "closed" ? "hidden" : ""
        }`}
      >
        <Link
          href="/profile/settings"
          className="flex items-center gap-2 text-sm text-gray-700 opacity-90"
        >
          <CiSettings className="text-2xl" />
          <span className="">Settings</span>
        </Link>
        <Link
          href=""
          className="flex items-center gap-3 text-sm text-gray-700 opacity-90"
        >
          <IoShareSocialOutline className="text-xl" />
          <span>Invite</span>
        </Link>
        <button
          onClick={handleLogout}
          className="text-red-600 flex items-center gap-2 text-sm"
        >
          <IoLogOutOutline className="text-2xl" />
          <span>Logout</span>
        </button>
      </div>

      {/* Collapsed sidebar */}

      <div
        className={`p-8 max-md:px-4 space-y-20 ${
          navState === "open" && "hidden"
        }`}
      >
        <div>
          <button onClick={toggleNav}>
            <VscMenu />
          </button>
        </div>

        <div>
          <div className="flex flex-col gap-6 items-start opacity-70">
            <Link
              href="/profile"
              className={`flex items-center gap-2 text-sm ${
                pathname === "/profile" ? "text-blue-dark font-bold" : ""
              }`}
            >
              <IoPersonOutline className="text-xl" />
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <PiClockCounterClockwise className="text-xl" />
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <MdOutlineRoute className="text-xl" />
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <IoMdInformationCircleOutline className="text-xl" />
            </Link>
            <Link href="/" className="flex items-center gap-2 text-sm">
              <MdOutlineFeedback className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${navState === "open" ? "hidden" : ""} max-[425px]:hidden`}
      >
        <div
          className={`p-8 max-md:px-4 border-t border-opacity-35 border-gray-700 flex flex-col gap-4 items-start`}
        >
          <Link
            href="/profile/settings"
            className="flex items-center gap-2 text-sm text-gray-700 opacity-90"
          >
            <CiSettings className="text-2xl" />
          </Link>
          <Link
            href=""
            className="flex items-center gap-3 text-sm text-gray-700 opacity-90"
          >
            <IoShareSocialOutline className="text-xl" />
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-600 flex items-center gap-2 text-sm"
          >
            <IoLogOutOutline className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Close nav arrow button */}

      <button
        className={`absolute top-[10%] right-4 ${
          navState === "closed" ? "hidden" : ""
        }`}
        onClick={toggleNav}
      >
        <IoArrowBackSharp />
      </button>
    </aside>
  );
}

export default AuthenticatedSidebar;
