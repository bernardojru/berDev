import { createContext, ReactNode, useEffect, useState } from "react";

interface SidebarOpenContextType {
  showNavBar: boolean;
  handleShowNavBar: () => void;
}

interface SidebarOpenContextProviderProps {
  children: ReactNode;
}

export const SidebarOpenContext = createContext({} as SidebarOpenContextType);

export function SidebarOpenContextProvider({
  children,
}: SidebarOpenContextProviderProps) {
  const [showNavBar, setShowNavBar] = useState<boolean>(false);

  function handleShowNavBar() {
    setShowNavBar((state) => !state);
  }
  return (
    <SidebarOpenContext.Provider value={{ showNavBar, handleShowNavBar }}>
      {children}
    </SidebarOpenContext.Provider>
  );
}
