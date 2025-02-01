"use client";
import useAppStore from "@/lib/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IoArrowBackSharp,
  IoLogOutOutline,
  IoPersonOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import { useSession, signOut } from "next-auth/react";
import { CiSettings } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineRoute, MdOutlineFeedback } from "react-icons/md";
import { PiClockCounterClockwise } from "react-icons/pi";
import { toast } from "sonner";

const mobileLinks = [
  {
    href: "/",
    displayName: "Live traffic",
  },
  {
    href: "/trips",
    displayName: "Trips",
  },
  {
    href: "/reports",
    displayName: "Reports",
  },
  {
    href: "/community",
    displayName: "Community",
  },
];

const openAuthenticatedLinks = [
  {
    href: "/profile",
    displayName: "Profile",
    icon: <IoPersonOutline className="text-xl" />,
  },
  {
    href: "/trip-history",
    displayName: "Trip History",
    icon: <PiClockCounterClockwise className="text-xl" />,
  },
  {
    href: "/favorite-routes",
    displayName: "Favorite Routes",
    icon: <MdOutlineRoute className="text-xl" />,
  },
  {
    href: "/report-happening",
    displayName: "Report Happening",
    icon: <IoMdInformationCircleOutline className="text-xl" />,
  },
  {
    href: "/feedback-and-rating",
    displayName: "Feedback & Rating",
    icon: <MdOutlineFeedback className="text-xl" />,
  },
];

function Sidebar() {
  const { toggleNav, navState } = useAppStore((state) => state);
  const pathname = usePathname();
  const { status } = useSession();

  const handleLogout = () => {
    signOut({ redirect: false });

    toast.success("Logout successful");
  };

  if (status === "unauthenticated") {
    return (
      <aside
        className={`left-0 bg-sky-blue p-8 max-md:px-4 fixed top-0 h-dvh overflow-y-auto text-center z-20 flex justify-center ${
          navState === "closed"
            ? "w-max max-md:hidden"
            : "w-[250px] items-center flex-col"
        }`}
      >
        <div className={`w-full ${navState === "closed" ? "hidden" : ""}`}>
          <h4 className="text-blue-dark text-[0.8rem]">Welcome to</h4>
          <h3 className="text-blue-dark text-2xl font-medium">
            Traffic Tracker
          </h3>
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

        <div
          className={`${
            navState === "open" ? "hidden" : ""
          } max-[425px]:hidden`}
        >
          <button onClick={toggleNav}>
            <VscMenu />
          </button>
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
  } else if (status === "authenticated") {
    return (
      <aside
        className={`left-0 bg-sky-blue fixed top-0 h-dvh overflow-y-auto z-20 flex justify-between gap-16 ${
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
                  pathname === href
                    ? "bg-blue-dark text-white"
                    : "text-gray-700"
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
          className={`${
            navState === "open" ? "hidden" : ""
          } max-[425px]:hidden`}
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
  } else {
    return (
      <aside
        className={`left-0 bg-sky-blue p-8 max-md:px-4 fixed top-0 h-dvh overflow-y-auto text-center z-20 flex justify-center ${
          navState === "closed"
            ? "w-max max-md:hidden"
            : "w-[250px] items-center flex-col"
        }`}
      >
        <span className="loading loading-spinner loading-md bg-blue-dark"></span>
      </aside>
    );
  }
}

export default Sidebar;
