import { SidebarProps } from "@/types/general.types";

function LoadingSidebar({ navState }: Pick<SidebarProps, "navState">) {
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

export default LoadingSidebar;
