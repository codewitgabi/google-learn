"use client";
import { SidebarProps } from "@/types/general.types";
import { VscMenu } from "react-icons/vsc";

function OpenSidebarBtn({
  navState,
  toggleNav,
}: Omit<SidebarProps, "pathname">) {
  return (
    <div
      className={`${navState === "open" ? "hidden" : ""}`}
    >
      <button onClick={toggleNav}>
        <VscMenu />
      </button>
    </div>
  );
}

export default OpenSidebarBtn;
