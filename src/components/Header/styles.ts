import { styled } from "../../styles/.";
import * as Tooltip from "@radix-ui/react-tooltip";

export const HeaderContainer = styled("header", {
  width: "100%",
  background: "$gray900",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  button: {
    margin: "1rem",
    height: "2rem",
    width: "2rem",
    border: "none",
    borderRadius: "$xs",
    background: "$gray800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    outline: 'none',

    "&:hover": {
      outline: "2px solid $gray600",
      transition: "all .2s ease-in-out",
    },
  },
});

export const CV = styled("span", {}); //button do cv

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