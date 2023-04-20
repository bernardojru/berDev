import { styled } from "../../styles/.";

export const InfoContentContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$2",
  borderRadius: "$xs",
  color: "$gray200",
  width: "100%",
  marginTop: "4rem",
});

export const InfoContentHeader = styled("header", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$3",
  padding: "$3",
  borderRadius: "$xs",
  border: "solid 1px $gray800",
  background: "$gray900",
  overflow: "hidden",

  "@media(max-width:375px)": {
    overflowX: "scroll",
  },
});

export const Button = styled("button", {
  color: "$gray200",
  background: "transparent",
  cursor: "pointer",
  fontSize: "$sm",
  padding: "$2",
  borderRadius: "$lg",
  fontWeight: "$bold",
  border: "1px solid $gray800",

  variants: {
    color: {
      isFocus: {
        background: "$gray800",
      },
    },
  },

  "&:hover": {
    background: "$gray800",
    color: "$gray100",
    padding: "$2",
    transition: "all .2s ease-in-out",
  },
});

export const InfoContentMain = styled("main", {
  width: "100%",
  padding: "$3",
  borderRadius: "$xs",
  border: "solid 1px $gray800",
  background: "$gray900",
});
