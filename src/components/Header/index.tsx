import * as Tooltip from "@radix-ui/react-tooltip";
import { HeaderContainer, TooltipContent, TooltipArrow } from "./styles";
import { Moon, Sun } from "phosphor-react";
import { useThemes } from "../../hooks/useThemes";
import { dark } from "../../styles/theme/dark";
import { light } from "../../styles/theme/light";

export function Header() {
  const { themes, toggleTheme } = useThemes();
  return (
    <HeaderContainer>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Portal>
            <TooltipContent sideOffset={1}>
              <strong>Toggle theme</strong>
              <TooltipArrow />
            </TooltipContent>
          </Tooltip.Portal>
          <Tooltip.Trigger asChild>
            <button onClick={toggleTheme}>
              {themes === dark && <Sun color="#fff" size={20} weight="bold" />}
              {themes === light && (
                <Moon color="#000" size={20} weight="bold" />
              )}
            </button>
          </Tooltip.Trigger>
        </Tooltip.Root>
      </Tooltip.Provider>
    </HeaderContainer>
  );
}
