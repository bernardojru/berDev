import Link from "next/link";
import { styled } from "../../styles/.";

export const SidebarContainer = styled("section", {
  width: "20vw",

  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  borderRight: "1px solid $gray700",
  height: "90vh",
  position: "fixed",
  gap: "$3",
  bottom: 0,

  "@media(max-width:1296px)": {
    opacity: 0,
    visibility: "hidden",
  },
});

export const SecondarySidebar = styled("section", {
  marginTop: "$5",
  width: "100%",
  flex: 1,
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  alignItems: "center",
});

export const SidebarButton = styled(Link, {
  display: "flex",
  width: "80%",
  gap: "$4",
  padding: "$4",
  textDecoration: "none",
  borderRadius: "$lg",
  alignItems: "center",
  backgroundColor: "$black",

  "&:hover": {
    backgroundColor: "$gray600",
    transition: "all .2s ease-in",
  },

  span: {
    fontSize: "$lg",
    color: "$gray200",
  },
});

export const SidebarBottom = styled("footer", {
  marginBottom: "$4",
});

export const SidebarContainerResponsive = styled("section", {
  background: "$black",

  minWidth: "20rem",
  height: "20rem",
  position: "absolute",
  top: 100,
  left: 10,
  zIndex: 9999,
  border: "1px solid $gray700",
  borderRadius: "$lg",

  "@media(min-width:1296px)": {
    opacity: 0,
    visibility: "hidden",
  },
});
