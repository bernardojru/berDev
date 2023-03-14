import { styled } from "../../styles/.";

export const ProfileContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3",
  border: "solid 1px $gray800",
  padding: "$3",
  borderRadius: "$md",
  background: "$gray900",
  color: "$gray200",
  height: "30rem",
  width: "30rem",
  position: "sticky",
  top: "1rem",

  "@media(max-width:1119px)": {
    position: "static",
    width: "100%",
  },
});

export const User = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",

  img: {
    width: "8rem",
    height: "8rem",
    borderRadius: "$full",
  },

  strong: {
    fontWeight: "$bold",
    lineHeight: "$tall",
  },

  span: {
    lineHeight: "$tall",
  },
});

export const Tech = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  img: {
    width: "2rem",
    height: "2rem",
    transition: "all .2s ease-in-out",
    borderRadius: "$md",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
});

export const ProfileDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "$gray800",
  borderRadius: "$md",
  marginTop: "$5",
  width: "100%",

  span: {
    padding: "$2",
    display: "flex",
    alignItems: "center",
    gap: "$1",
    fontSize: "$sm",
  },
});

export const Quantity = styled("small", {
  color: "$white",
  fontWeight: "$bold",
});

export const ButtonContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",
  width: "100%",
});

export const Questions = styled("button", {
  marginTop: "$2",
  width: "100%",
  padding: "$3",
  borderRadius: "$md",
  fontWeight: "800",
  background: "$blue200",
  color: "$white",
  border: "2px solid $blue200",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  "&:hover": {
    background: "transparent",
    transition: "all .4s ease-in-out",
  },
});

export const ButtonToTop = styled("button", {
  marginTop: "$2",
  width: "100%",
  padding: "$3",
  borderRadius: "$md",
  fontWeight: "800",
  background: "$blue200",
  color: "$white",
  border: "2px solid $blue200",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  "&:hover": {
    background: "transparent",
    transition: "all .4s ease-in-out",
  },

  "@media(max-width:1119px)": {
    position: "fixed",
    width: "3rem",
    height: "3rem",
    right: "1.2rem",
    bottom: "1rem",

    "&:hover": {
      border: "none",
      background: "$blue100",
      transition: "all .4s ease-in-out",
    },
  },
});
