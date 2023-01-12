import { styled } from "../../../../styles";

export const ProjectContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  margin: "$3",
  padding: "$3",
  borderRadius: "$xs",
  background: "$gray800",
  border: "2px solid $gray800",

  img: {
    width: "100%",
    height: "5rem",
  },

  "&:hover": {
    border: "2px solid $blue200",
    background: "transparent",
    transition: "all .4s ease-in-out",
  },
});

export const Icons = styled("section", {
  display: "flex",
  gap: "$3",
  alignItems: "center",
  justifyContent: "flex-end",

  a: {
    textDecoration: "none",
    borderRadius: "$xs",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "$gray200",
    padding: "$1",
    background: "$gray600",
    border: "2px solid $gray600",

    "&:hover": {
      border: "2px solid $gray500",
      transition: "all .2s ease-in-out",
    },
  },
});

export const Tags = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  strong: {
    fontWeight: "$bold",
    lineHeight: "$tall",
  },

  span: {
    display: "flex",
    alignItems: "center",
    gap: "$3",
    background: "$gray600",
    padding: "$1 $2",
    borderRadius: "$lg",
  },
});
