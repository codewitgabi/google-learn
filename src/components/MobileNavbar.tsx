"use client";
import useAppStore from "@/lib/store";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function MobileNavbar() {
  const toggleNav = useAppStore((state) => state.toggleNav);

  return (
    <nav className="py-4 px-4 space-y-6 [@media(min-width:906px)]:hidden">
      <div className="flex items-center justify-between ">
        <button onClick={toggleNav}>
          <HiOutlineMenuAlt4 className="text-xl" />
        </button>

        <h4 className="text-blue-dark font-medium text-sm">Live Traffic</h4>

        <div className=""></div>
      </div>

      {/* Search form and user profile */}

      <form action="">
        <div className="flex items-center gap-2 border border-gray-300 py-3 px-4 rounded-full">
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
  );
}

export default MobileNavbar;
