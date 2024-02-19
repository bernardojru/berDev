import { styled } from "../../../styles";

export const AllCertificateContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  alignItems: "center",
  justifyContent: "center",
  padding: "$10",

  img: {
    width: "60rem",
    height: "100%",
  },

  "@media(max-width:1119px)": {
    img: {
      width: "40rem",
      height: "100%",
    },
  },

  "@media(max-width:951px)": {
    img: {
      width: "30rem",
      height: "100%",
    },
  },

  "@media(max-width:580px)": {
    img: {
      width: "25rem",
      height: "100%",
    },
  },
});
