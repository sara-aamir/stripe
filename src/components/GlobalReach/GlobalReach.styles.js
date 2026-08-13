export const globalReachStyles = {
  wrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    boxSizing: "border-box",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    backgroundColor: "#fff",
    px: { xs: "24px", md: "32px" },
    py: { xs: 4, md: 6 },
    borderBottom: "1px solid #F3F4F6",
  },

  imageWrapper: {
    position: "relative",
    width: "100%",
    height: { xs: 280, sm: 380, md: 480 },
    borderRadius: 3,
    overflow: "hidden",
    border: "1px solid #F3F4F6",
  },

  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    margin: "0 auto",
  },

  overlayContent: {
    position: "absolute",
    top: { xs: 24, md: 48 },
    left: { xs: 24, md: 48 },
    zIndex: 2,
    maxWidth: 420,
  },

  overlayHeading: {
    color: "#fff",
    fontSize: { xs: "1.4rem", md: "2rem" },
    fontWeight: 600,
    lineHeight: 1.25,
    mb: 3,
  },

  overlayButton: {
    backgroundColor: "#fff",
    color: "#635BFF",
    textTransform: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: 600,
    fontSize: "0.95rem",

    "&:hover": {
      backgroundColor: "#F3F4F6",
    },
  },

  iconSwap: {
    position: "relative",
    width: 20,
    height: 20,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },

  chevronIcon: {
    position: "absolute",
    fontSize: "1.2rem",
    opacity: 1,
    transform: "translateX(0)",
    transition: "opacity 0.2s ease, transform 0.25s ease",

    ".MuiButton-root:hover &": {
      opacity: 0,
      transform: "translateX(6px)",
    },
  },

  arrowIcon: {
    position: "absolute",
    fontSize: "1.1rem",
    opacity: 0,
    transform: "translateX(-6px)",
    transition: "opacity 0.2s ease, transform 0.25s ease",

    ".MuiButton-root:hover &": {
      opacity: 1,
      transform: "translateX(4px)",
    },
  },

  cornerLabel: {
    position: "absolute",
    right: { xs: 16, md: 32 },
    bottom: { xs: 16, md: 24 },
    zIndex: 2,
    color: "#fff",
    fontSize: { xs: "0.85rem", md: "1rem" },
  },

  cornerLabelBold: {
    display: "inline",
    fontWeight: 700,
  },

  belowHeading: {
    mt: { xs: 5, md: 8 },
    textAlign: "center",
    color: "#1A1F36",
    fontSize: { xs: "1.75rem", md: "2.75rem" },
    fontWeight: 400,
    lineHeight: 1.25,
  },
};
