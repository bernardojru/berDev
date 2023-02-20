import { styled } from "../../../styles/.";
import * as Dialog from "@radix-ui/react-dialog";

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$2",
  width: "100%",

  input: {
    color: "$white",
    height: "1.5rem",
    background: "$gray900",
    borderRadius: "$xs",
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
    borderRadius: "$xs",
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
  background: "transparent",
  borderRadius: "$xs",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "$gray200",
  padding: "$1",
  border: "2px solid $gray900",

  "&:hover": {
    background: "$gray700",
    transition: "all .2s ease-in-out",
  },
});
