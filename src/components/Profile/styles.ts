import { styled } from "../../styles/.";

export const ProfileContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3",
  border: "solid 1px $gray800",
  padding: "$3",
  borderRadius: "$xs",
  background: "$gray900",
  color: "$gray200",
  height: '30rem',
  width: '30rem',
  position: 'sticky',
  top: '0',

  '@media(max-width:1119px)': {
    position: 'static',
    width: '100%',
  }
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
  },
});

export const ProfileDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // gap: "$3",
  background: "$gray800",
  borderRadius: "$xs",
  marginTop: "$5",
  width: '100%',
  
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

export const Questions = styled("button", {
  marginTop: "$2",
  width: "100%",
  padding: "$3",
  borderRadius: "$xs",
  fontWeight: "800",
  background: "$blue200",
  color: "$white",
  border: "2px solid $blue200",
  cursor: "pointer",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  "&:hover": {
    background: "transparent",
    transition: "all .4s ease-in-out",
  },
});
