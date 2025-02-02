export interface SidebarProps {
  navState: "open" | "closed";
  pathname: string;
  toggleNav: () => void;
}
