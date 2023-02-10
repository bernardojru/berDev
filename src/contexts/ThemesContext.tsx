import { createContext, ReactNode, useState } from "react";
import { dark } from "../styles/theme/dark";
import { light } from "../styles/theme/light";

interface ThemesProps {
  themes: string;
  toggleTheme: () => void;
}

export const ThemesContext = createContext({} as ThemesProps);

interface ThemesContextProviderProps {
  children: ReactNode;
}

export function ThemesContextProvider({
  children,
}: ThemesContextProviderProps) {
  const [themes, setThemes] = useState(dark);

  function toggleTheme() {
    setThemes(themes === dark ? light : dark)
  }
  return (
    <ThemesContext.Provider value={{ themes, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
}
