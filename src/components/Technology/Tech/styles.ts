import { styled } from "../../../styles";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TechContainer = styled("section", {
  display: "grid",
  gap: "$10",
  alignContent: "center",
  justifyItems: "center",
  gridTemplateColumns: "repeat(6, 1fr)",
  fontFamily: "$default",
  paddingTop: "$10",

  button: {
    border: "none",
    background: "transparent",

    img: {
      width: "5rem",
      height: "5rem",
      border: "1px solid $gray600",
      padding: "$6",
      borderRadius: "$lg",
    },
  },

  "@media(max-width:1119px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },

  "@media(max-width:951px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const TooltipContent = styled(Tooltip.Content, {
  padding: "$3 $4",
  background: "$gray600",
  color: "$gray100",
  fontFamily: "$default",
  fontSize: "$sm",
  borderRadius: "$md",
  fontWeight: "$medium",
  filter: "drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))",
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$gray600",
  fontSize: "$4xl",
});
