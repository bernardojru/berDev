import { keyframes, styled } from "../../styles";

export const ProjectsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ProjectsConst = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(2, 1fr)",

  "@media(max-width:1119px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media(max-width:951px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@media(max-width:830px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

const Load = keyframes({
  to: {
    transform: "rotate(0)",
  },
  from: {
    transform: "rotate(360deg)",
  },
});

export const Loading = styled("span", {
  textAlign: "center",
  animation: ` 2s linear  ${Load}  infinite`,
});
