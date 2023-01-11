import { styled } from "../../../styles/.";
import * as Tooltip from "@radix-ui/react-tooltip";

export const TechContainer = styled("section", {
  display: "grid",
  gap:'$3' ,
  alignContent: "center",
  justifyItems: "center",
  gridTemplateColumns: "repeat(7, 1fr)",
  fontFamily:'$default',

  button: {
    border: "none",
    background: "transparent",

    img: {
      width: "3rem",
      height: "3rem",
      padding: "$2",
      borderRadius: "$md",
      border: "1px solid $gray800",
    },
  },
});

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$gray600',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  borderRadius: '$xs',
  fontWeight: '$medium',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
});

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray600',
}) 