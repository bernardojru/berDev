import { styled } from "../../styles/.";

export const HeaderContainer = styled("header", {
  width: "100%",
  background: "$gray900",
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "sticky",
  top: 0,
  borderBottom: "1px solid $gray700",

  div: {
    width: "90vw",
    minHeight: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media(max-width:640px)": {
      justifyContent: "end",
      width: "100%",
    },
  },
});

export const NavBarMenu = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$2",
  border: "1px solid $gray700",
  borderRadius: "$full",

  a: {
    textDecoration: "none",
    color: "$white",
    padding: "$3",
    borderRadius: "$full",
    backgroundColor: "$gray900",
    border: "1px solid $gray900",

    "&:hover": {
      backgroundColor: "$gray600",
      transition: "all .2s ease-in",
      borderColor: "$gray800",
    },
  },

  "@media(max-width:640px)": {
    opacity: 0,
    visibility: "hidden",
    position: "absolute",
  },
});

export const NavBarMenuResponsive = styled("nav", {
  width: "100%",
  marginTop: "$4",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid $gray700",
  borderTop: "1px solid $gray700",

  a: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    textDecoration: "none",
    color: "$white",
    paddingTop: "$5",
    paddingBottom: "$5",
    paddingLeft: "$5",
    backgroundColor: "$gray900",
    border: "1px solid $gray900",

    span: {
      display: "flex",
      gap: "$2",
      alignItems: "center",
      justifyContent: "center",
    },

    "&:hover": {
      backgroundColor: "$gray600",
      transition: "all .2s ease-in",
      borderColor: "$gray800",
    },
  },

  "@media(min-width:640px)": {
    opacity: 0,
  },
});

export const NavButton = styled("button", {
  display: "flex",
  gap: "$2",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray800",
  border: "1px solid $gray700",
  borderRadius: "$full",
  padding: "$2",
  cursor: "pointer",
  color: "$white",
  position: "absolute",
  marginRight: "$4",

  opacity: 0,

  "@media(max-width:640px)": {
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
