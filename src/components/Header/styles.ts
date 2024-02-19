import { styled } from "../../styles/.";

export const HeaderContainer = styled("header", {
  width: "100%",
  background: "$gray900",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",

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

  "@media(max-width:1296px)": {
    background: "",
  },
});

export const NavBarMenu = styled("nav", {
  width: "80%",
  display: "flex",
  gap: "$5",
  alignItems: "center",
  justifyContent: "space-between",
});

export const NavButton = styled("h1", {
  background: "$gray800",
  padding: "$2",
  borderRadius: "$lg",
  cursor: "pointer",
  position: "fixed",
  left: 30,
  lineHeight: 0,
  opacity: 0,

  "@media(max-width:1296px)": {
    opacity: 1,
  },
});

export const BerDev = styled("h1", {
  marginLeft: "$10",
  color: "$blue200",
  fontSize: "$2xl",
  cursor: "default",
});

export const User = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",
  cursor: "pointer",

  img: {
    width: "3rem",
    height: "3rem",
    borderRadius: "$lg",
    cursor: "pointer",
  },
});
