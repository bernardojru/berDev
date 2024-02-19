import { styled } from "../../../styles";

export const ProjectContainer = styled("div", {
  width: "23rem",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  marginTop: "$6",
  marginRight: "$2",
  marginLeft: "$2",
  padding: "$6",
  borderRadius: "$lg",
  background: "$gray800",
  border: "2px solid $gray800",
  cursor: "default",

  img: {
    width: "23rem",
    height: "10rem",
    borderRadius: "$lg",
    objectFit: "cover",
  },

  "&:hover": {
    border: "2px solid $blue200",
    transition: "all .4s ease-in-out",
  },

  "@media(max-width:951px)": {
    width: "20rem",
    height: "18rem",

    img: {
      width: "20rem",
      height: "10rem",
    },
  },
});

export const Icons = styled("section", {
  display: "flex",
  gap: "$3",
  alignItems: "center",
  justifyContent: "flex-end",

  a: {
    textDecoration: "none",
    borderRadius: "$lg",
    display: "flex",
    gap: "$1",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: "$gray200",
    padding: "$2",
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
  flexDirection: "column",
  alignItems: "start",
  gap: "$2",

  strong: {
    fontSize: "$xl",
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
