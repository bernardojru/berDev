import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../../styles";

export const SuccessFormContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "$10",
  padding: "$1",
  width: "100%",
});

export const CloseButton = styled(Dialog.Close, {
  marginTop: "$2",
  width: "100%",
  padding: "$3",
  borderRadius: "$xs",
  fontWeight: "900",
  background: "$blue200",
  color: "$white",
  border: "2px solid $blue200",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  "&:hover": {
    background: "$blue100",
    transition: "all .4s ease-in-out",
  },
});
