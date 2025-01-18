import { State, StateAction } from "@/types/store.types";
import { create } from "zustand";

const useAppStore = create<State & StateAction>((set) => ({
  navState: "closed",
  toggleNav: () =>
    set((state) => ({
      navState: state.navState === "closed" ? "open" : "closed",
    })),
}));

export default useAppStore;
