"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import MobileNavbar from "./MobileNavbar";

const navLinks = [
  {
    pathname: "/",
    displayName: "Live traffic",
  },
  {
    pathname: "/trip",
    displayName: "Trip",
  },
  {
    pathname: "/reports",
    displayName: "Reports",
  },
  {
    pathname: "/community",
    displayName: "Community",
  },
  {
    pathname: "/emergency",
    displayName: "Emergency",
  },
];

function Navbar() {
  const currentRoute = usePathname();

  return (
    <header className="border-b border-gray-300 shadow-sm sticky top-0 right-0 z-10 bg-white">
      <nav className="w-[945px] mx-auto max-[1230px]:w-[initial] max-[1230px]:mx-4 py-4 flex items-center justify-between max-[905px]:hidden">
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
