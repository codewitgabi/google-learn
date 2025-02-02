"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import MobileNavbar from "./MobileNavbar";
import { navLinks } from "@/lib/data";
import useAppStore from "@/lib/store";

function Navbar() {
  const currentRoute = usePathname();
  const { navState } = useAppStore((state) => state);

  return (
    <header className="border-b border-gray-300 shadow-sm sticky top-0 right-0 z-10 bg-white">
      <nav
        className={`w-[945px] mx-auto py-4 flex items-center justify-between max-md:hidden ${
          navState === "open"
            ? "max-[1241px]:w-[initial] max-[1241px]:mx-4"
            : "max-[1050px]:w-[initial] max-[1050px]:mx-4"
        }`}
      >
        {/* Navigation links */}

        <ul className="flex items-center gap-4">
          {navLinks.map(({ pathname, displayName }, index) => (
            <Link
              key={index}
              href={pathname}
              className={`text-[0.8rem] ${
                currentRoute === pathname
                  ? "text-blue-dark font-medium underline underline-offset-4"
                  : "opacity-75 hover:opacity-100 hover:text-blue-dark transition-all duration-300"
              }`}
            >
              <li>{displayName}</li>
            </Link>
          ))}
        </ul>

        {/* End Navigation links */}

        {/* Search form and user profile */}

        <form action="">
          <div className="flex items-center gap-2 border border-gray-300 py-1 px-4 rounded-full">
            <CiSearch className="text-xl opacity-50" />

            <input
              type="text"
              className="w-full rounded-md text-sm outline-none placeholder:opacity-50 bg-inherit"
              placeholder="Search Area..."
            />
          </div>
        </form>

        {/* End Search form and user profile */}
      </nav>

      {/* Mobile navbar */}

      <MobileNavbar />
    </header>
  );
}

export default Navbar;
