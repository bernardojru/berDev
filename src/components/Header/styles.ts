import Link from "next/link";
import { styled } from "../../styles/.";

export const HeaderContainer = styled("header", {
  width: "100%",
  background: "$gray900",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  button: {
    margin: "1rem",
    height: "2rem",
    width: "2rem",
    border: "none",
    borderRadius: "$xs",
    background: "$gray800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    outline: "none",

    "&:hover": {
      outline: "2px solid $gray600",
      transition: "all .2s ease-in-out",
    },
  },
});

export const NavBarMenu = styled("nav", {
  display: "flex",
  gap: "$5",
  alignItems: "center",
  justifyContent: "center",
});

export const RouteLink = styled(Link, {
  color: "$gray500",
  textDecoration: "none",

  "&:hover": {
    color: "$gray200",
    transition: "all .2s ease-in-out",
  },
});
