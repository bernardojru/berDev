import { HeaderContainer, NavBarMenu, RouteLink } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavBarMenu>
        <RouteLink href="/">Home</RouteLink>
        <RouteLink href="/cv">CV</RouteLink>
      </NavBarMenu>
    </HeaderContainer>
  );
}
