import { useContext } from "react";
import { SidebarOpenContext } from "../contexts/SidebarOpenContext";

export function useSidebarOpen() {
  const context = useContext(SidebarOpenContext);
  return context;
}
