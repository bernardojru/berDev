import { styled } from "../.";

export const PortfolioContainer = styled("div", {
  background: "$black",
  color: "$gray100",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
});

export const PortfolioContent = styled("div", {
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "$12",
  padding: "4rem",

  "@media(max-width:1119px)": {
    alignItems: "center",
    flexDirection: "column",
    padding: "2rem",
  },
});
