"use client";
// import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import useAppStore from "@/lib/store";

function Page() {
  const navState = useAppStore((state) => state.navState);

  return (
    <>
      <Sidebar />

      <main
        className={`min-h-dvh relative transition-all duration-300 bg-red-500 overflow-x-hidden ${
          navState === "closed" ? "ml-16" : "ml-[250px]"
        }`}
      >
        <Navbar />

        {/* <div className={`w-[945px] mx-auto my-4`}>kjkl</div> */}
      </main>
    </>
  );
}

export default Page;
