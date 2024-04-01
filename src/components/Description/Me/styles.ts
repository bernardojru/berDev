import { styled } from "../../../styles";

export const MeContainer = styled("div", {
  maxHeight: "90vh",
  display: "flex",
  gap: "$10",
  flexDirection: "column",
  alignItems: "start",
  paddingTop: "$10",

  h1: {
    fontSize: "$5xl",
  },

  p: {
    fontSize: "$xl",
    lineHeight: "2",
    textAlign: "justify",
    a: {
      backgroundColor: "$gray700",
      borderRadius: "$lg",
      textDecoration: "none",
      padding: "$2",
      fontWeight: "$bold",
      lineHeight: 2,
      color: "$white",
    },
  },

  "@media(max-width:1119px)": {
    h1: {
      fontSize: "$4xl",
    },

    p: {
      fontSize: "$lg",
      lineHeight: "2",
      textAlign: "justify",
    },
  },

  "@media(max-width:951px)": {
    h1: {
      fontSize: "$2xl",
    },

    p: {
      fontSize: "$lg",
      lineHeight: "2",
      textAlign: "justify",
    },
  },
});

export const AboutMe = styled("section", {
  width: "100%",
  display: "flex",
  gap: "$5",
  lineHeight: "$tall",

  ".me": {
    width: "25rem",
    height: "25rem",
    borderRadius: "$lg",
    border: "1px solid $gray600",
  },

  div: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "$5",
    lineHeight: "$base",

    section: {
      display: "flex",
      alignItems: "center",
      gap: "$3",

      a: {
        textDecoration: "none",
        background: "$gray700",
        display: "flex",
        alignItems: "center",
        gap: "$3",
        padding: "$1 $3",
        color: "$gray200",
        borderRadius: "$lg",
        cursor: "pointer",

        "&:hover": {
          color: "$white",
          transition: "all .2s ease-in-out",
        },
      },
    },
  },

  "@media(max-width:1296px)": {
    flexDirection: "column",
  },
});

export const Tech = styled("section", {
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  width: "100%",

  img: {
    width: "3rem",
    height: "3rem",
    transition: "all .2s ease-in",
    borderRadius: "$lg",
    border: "1px solid $gray600 ",

    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
});

export const ExperienceMe = styled("section", {
  marginTop: "$10",
  display: "flex",
  gap: "$6",
  alignItems: "start",

  ".elementals": {
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    alignItems: "center",

    ".point": {
      height: "1rem",
      width: "1rem",
      borderRadius: "$full",
      background: "gray",
    },

    ".line": {
      height: "50rem",
      width: "1px",
      marginTop: "-1px",
      borderRadius: "$full",
      background: "gray",
    },
  },
});

export const ContentHype = styled("section", {
  display: "flex",
  gap: "$6",
  flexDirection: "column",
  alignItems: "start",
});

export const Company = styled("section", {
  display: "flex",
  gap: "$3",
  justifyContent: "center",
  alignItems: "start",

  img: {
    width: "3rem",
    height: "3rem",
  },
});

export const CompanyDetails = styled("section", {
  display: "flex",
  gap: "$2",
  flexDirection: "column",
  justifyContent: "center",

  span: {
    background: "$gray900",
    border: "1px solid",
    borderColor: "$gray600",
    borderRadius: "$full",
    paddingLeft: "$2",
    paddingRight: "$2",
    fontWeight: "$bold",

    lineHeight: 2,
  },

  "@media(max-width:641px)": {
    span: {
      lineHeight: 1,
      fontSize: "$sm",
      paddingTop: "$2",
      paddingBottom: "$2",
    },
  },
  "@media(max-width:552px)": {
    span: {
      lineHeight: 1,
      fontSize: "$xs",
      paddingTop: "$2",
      paddingBottom: "$2",
    },
  },
  "@media(max-width:501px)": {
    span: {
      lineHeight: 1,
      fontSize: "$xxs",
      paddingTop: "$2",
      paddingBottom: "$2",
    },
  },
});

export const MySetup = styled("section", {
  display: "flex",
  gap: "$6",
  flexDirection: "column",
  justifyContent: "center",
});

export const MacBookDetails = styled("section", {
  display: "flex",
  gap: "$2",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $gray600",
  padding: "$6",
  borderRadius: "$lg",

  img: {
    width: "15rem",
    height: "9rem",
  },
});

export const SpaceBottomContainer = styled("section", {
  minHeight: "20vh",
  opacity: 0,
});
