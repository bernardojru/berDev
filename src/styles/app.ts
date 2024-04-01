import { styled } from ".";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

export const Layout = styled("div", {
  color: "white",
  width: "80vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width:1296px)": {
    width: "100%",
  },
});

export const Const = styled("div", {
  width: "80vw",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media(max-width:1296px)": {
    width: "90vw",
  },
});
