import { styled } from "../../styles/.";

export const ProfileContainer = styled("div", {
  marginTop: "$10",
  marginRight: "$3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$3",
  border: "solid 1px $gray800",
  padding: "$6",
  borderRadius: "$lg",
  background: "$gray900",
  color: "$gray200",
  height: "15rem",
  width: "20rem",
});

export const Tech = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$4",

  img: {
    width: "3rem",
    height: "3rem",
    transition: "all .2s ease-in",
    borderRadius: "$lg",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
});

export const ProfileDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "$gray800",
  borderRadius: "$lg",
  marginTop: "$5",
  width: "100%",

  span: {
    padding: "$2",
    display: "flex",
    alignItems: "center",
    gap: "$1",
    fontSize: "$sm",
  },
});

export const Quantity = styled("small", {
  color: "$white",
  fontWeight: "$bold",
});
