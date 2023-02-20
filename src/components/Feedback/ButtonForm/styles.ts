import { styled } from "../../../styles/.";

export const ButtonFormContainer = styled("button", {
  width: "100%",
  padding: "$2",
  height: "2.5rem",
  background: "$blue200",
  color: "$white",
  fontWeight: "800",
  borderRadius: "$xs",
  textTransform: "uppercase",
  cursor: "pointer",

  "&:hover": {
    background: "$blue100",
    transition: "all .2s ease-in-out",
  },
});
