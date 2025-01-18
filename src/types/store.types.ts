export type State = {
  navState: "open" | "closed";
};

export type StateAction = {
  toggleNav: () => void;
};
