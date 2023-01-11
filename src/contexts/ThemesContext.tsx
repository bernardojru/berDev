import { createContext, ReactNode, useState } from "react";

interface ThemesProps {
  themes: string;
  toggleTheme: () => void;
}

export const ThemesContext = createContext({} as ThemesProps);

interface ThemesContextProviderProps {
  children: ReactNode;
}

type Themes = "dark" | "light";

export function ThemesContextProvider({
  children,
}: ThemesContextProviderProps) {
  const [themes, setThemes] = useState<Themes>("dark");

  function toggleTheme() {
    if (themes === "dark") {
      setThemes("light");
    } else {
      setThemes("dark");
    }
  }
  return (
    <ThemesContext.Provider value={{ themes, toggleTheme }}>
      {children}
    </ThemesContext.Provider>
  );
}
