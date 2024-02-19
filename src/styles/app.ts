import { styled } from ".";

export const Container = styled("div", {
  height: "100vh",
  color: "white",
});

export const Layout = styled("div", {
  color: "white",
  width: "80vw",
  height: "90vh",
  display: "flex",
  alignItems: "end",
  justifyContent: "end",
  position: "fixed",
  right: 0,
  bottom: 0,

  overflowY: "scroll",

  "@media(max-width:1296px)": {
    width: "100%",
  },
});

export const Const = styled("div", {
  width: "80vw",
  height: "100%",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",

  "@media(max-width:1296px)": {
    width: "100%",
  },
});
