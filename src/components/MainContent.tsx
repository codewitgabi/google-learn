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
      className={`${
        navState === "closed" ? "ml-0" : "ml-[250px]"
      } min-h-dvh relative max-[905px]:ml-0`}
    >
      <Navbar />

      <div className="w-[945px] mx-auto max-[1230px]:w-[initial] max-[1230px]:mx-4 my-4">
        {children}
      </div>
    </main>
  );
}

export default MainContent;
