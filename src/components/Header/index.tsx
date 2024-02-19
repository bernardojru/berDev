import { List } from "phosphor-react";
import { HeaderContainer, NavBarMenu, NavButton, BerDev, User } from "./styles";
import * as Popover from "@radix-ui/react-popover";
import { Profile } from "../Profile";

import { useSidebarOpen } from "../../hooks/useSidebarOpen";

export function Header() {
  const { handleShowNavBar } = useSidebarOpen();
  return (
    <HeaderContainer>
      <NavBarMenu>
        <NavButton onClick={handleShowNavBar}>
          <List size={30} color="#7C7C8A" />
        </NavButton>
        <BerDev>{"<BerDev />"}</BerDev>
        <Popover.Root>
          <Popover.Trigger asChild>
            <User>
              <img src="https://github.com/bernardojru.png" alt="Author" />
            </User>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content>
              <Profile />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </NavBarMenu>
    </HeaderContainer>
  );
}
