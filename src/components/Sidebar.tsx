"use client";
import useAppStore from "@/lib/store";
import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";

function Sidebar() {
  const { toggleNav, navState } = useAppStore((state) => state);

  return (
    <aside
      className={`left-0 bg-sky-blue p-8 fixed top-0 h-dvh overflow-y-auto text-center z-20 flex justify-center ${
        navState === "closed" ? "w-max max-md:hidden" : "w-[250px] items-center"
      }`}
    >
      <div className={`w-full ${navState === "closed" ? "hidden" : ""}`}>
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

      {/* Collapsed sidebar */}

      <div className={`${navState === "open" ? "hidden" : ""}`}>
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
}

export default Sidebar;
