import { styled } from "../../../styles/.";

export const DescriptionContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  lineHeight: "$tall",

  p: {
    fontWeight: "$medium",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    gap: "$3",

    a: {
      textDecoration: "none",
      background: "$gray800",
      display: "flex",
      alignItems: "center",
      gap: "$3",
      padding: "$1 $3",
      color: "$gray200",
      borderRadius: "$xs",
      cursor: "pointer",

      "&:hover": {
        color: "$white",
        transition: "all .2s ease-in-out",
      },
    },
  },
});
