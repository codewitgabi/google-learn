import { SidebarProps } from "@/types/general.types";
import { IoArrowBackSharp } from "react-icons/io5";

function CloseSidebarBtn({
  navState,
  toggleNav,
}: Omit<SidebarProps, "pathname">) {
  return (
    <button
      className={`absolute top-[10%] right-4 ${
        navState === "closed" ? "hidden" : ""
      }`}
      onClick={toggleNav}
    >
      <IoArrowBackSharp />
    </button>
  );
}

export default CloseSidebarBtn;
