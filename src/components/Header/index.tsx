import { HeaderContainer } from "./styles";
import { Moon, Sun } from "phosphor-react";
import { useThemes } from "../../hooks/useThemes";

export function Header() {
  const { themes, toggleTheme } = useThemes();
  return (
    <HeaderContainer>
      <button onClick={toggleTheme}>
        {themes === "dark" && <Sun color="#fff"  size={20} weight='bold'/>}
        {themes === "light" && <Moon color="#fff" size={20} weight='bold'/>}
      </button>
    </HeaderContainer>
  );
}
