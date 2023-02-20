import { styled } from "../../styles/.";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay, {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  inset: "0",
  background: "$transparent",
});

export const FeedbackContainer = styled(Dialog.Content, {
  minWidth: "27rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$default",
  border: "solid 1px $blue200",
  padding: "$5",
  borderRadius: "$lg",
  background: "$gray900",
  color: "$gray200",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  "@media(max-width:375px)": {
    minWidth: "20rem",
  },

  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
