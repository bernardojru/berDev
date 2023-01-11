import { keyframes, styled } from "../../../styles";

export const ReposContainer = styled("section", {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ReposConst = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
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
  animation: ` 2s linear   ${Load}  infinite`,
});
