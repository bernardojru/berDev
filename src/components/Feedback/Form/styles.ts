import { styled } from "../../../styles/.";
import * as Dialog from "@radix-ui/react-dialog";

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$2",
  width: "100%",

  strong: {
    textAlign: "center",
  },

  span: {
    margin: "$5",
    textAlign: "center",
  },

  input: {
    color: "$white",
    height: "1.5rem",
    background: "$gray900",
    borderRadius: "$md",
    border: "1px solid $gray700",
    padding: "$2",

    "&:focus": {
      border: "1px solid $blue200",
      transition: "all .2s ease-in-out",
    },

    "&::placeholder": {
      fontFamily: "$default",
    },
  },

  textarea: {
    color: "$white",
    height: "5rem",
    background: "$gray900",
    resize: "none",
    borderRadius: "$md",
    border: "1px solid $gray700",
    padding: "$2",
    fontWeight: "$bold",

    "&:focus": {
      border: "1px solid $blue200",
      transition: "all .2s ease-in-out",
    },

    "&::placeholder": {
      fontFamily: "$default",
    },
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  borderRadius: "$md",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "$gray200",
  padding: "$1",
  border: "2px solid $gray900",
  right: "$3",

  "&:hover": {
    background: "$gray700",
    transition: "all .2s ease-in-out",
  },
});

export const ButtonForm = styled("button", {
  width: "100%",
  padding: "$2",
  height: "2.5rem",
  background: "$blue200",
  color: "$white",
  fontWeight: "800",
  borderRadius: "$md",
  textTransform: "uppercase",
  cursor: "pointer",

  "&:hover": {
    background: "$blue100",
    transition: "all .2s ease-in-out",
  },

  "&:disabled": {
    cursor: "not-allowed",
    backgroundColor: "#A9A9B2",
  },
});
