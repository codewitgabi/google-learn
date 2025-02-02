"use client";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import useAppStore from "@/lib/store";

interface IMainContentProps {
  children: ReactNode;
}

function MainContent({ children }: IMainContentProps) {
  const navState = useAppStore((state) => state.navState);

  return (
    <main
      className={`min-h-dvh relative transition-all duration-300 ${
        navState === "closed" ? "ml-16 max-md:ml-0" : "ml-[250px] max-md:ml-0"
      }`}
    >
      <Navbar />

      <div
        className={`w-[945px] mx-auto my-4 max-md:w-[initial] max-md:mx-4 overflow-hidden`}
      >
        {children}
      </div>
    </main>
  );
}

export default MainContent;
