import { keyframes, styled } from "../../styles/.";
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
  padding: "$4",
  borderRadius: "$lg",
  background: "$gray900",
  color: "$gray200",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",

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
