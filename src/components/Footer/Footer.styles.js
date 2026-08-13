export const footerStyles = {
  container: {
    backgroundColor: "#0A2540",
    color: "#B8C4D9",
    padding: { xs: "32px 24px 24px", md: "48px 32px 32px" },
  },

  top: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: { xs: 3, sm: 2 },
  },

  logo: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 700,
    fontFamily: "serif",
    cursor: "pointer",
    width: "fit-content",
  },

  linkRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: 2, sm: 4 },
  },

  link: {
    color: "#B8C4D9",
    fontSize: "0.9rem",
    cursor: "pointer",
    width: "fit-content",

    "&:hover": {
      color: "#fff",
    },
  },

  divider: {
    maxWidth: "1200px",
    margin: { xs: "32px auto 20px", md: "40px auto 20px" },
    borderTop: "1px solid #1F3A5F",
  },

  copyright: {
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#7B8CA6",
    fontSize: "0.85rem",
  },
};
