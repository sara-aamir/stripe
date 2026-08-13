export const globalScaleStyles = {
  container: { backgroundColor: "#fff" },

  statsRow: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
    gap: 0,
    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: "32px 24px 0", md: "48px 32px 0" },
    textAlign: "center",
  },

  statItem: {
    position: "relative",
    cursor: "pointer",
    padding: { xs: "24px 16px", md: "28px 20px" },
    borderTop: "1px solid #E5E7EB",
    borderBottom: "1px solid #E5E7EB",
    transition: "background-color 0.3s ease",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      height: "2px",
      background:
        "linear-gradient(90deg, transparent 0%, #dbeafe 15%, #1e3a8a 50%, #dbeafe 85%, transparent 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },

    "&::before": {
      top: "-1px",
    },

    "&::after": {
      bottom: "-1px",
    },

    "&:hover": {
      backgroundColor: "#FAFBFF",
    },

    "&:hover::before, &:hover::after": {
      opacity: 1,
    },
  },

  statNumber: {
    fontSize: { xs: "1.8rem", md: "2.4rem" },
    fontWeight: 500,
    color: "#1A1F36",
    letterSpacing: "-0.5px",
    mb: 1,
  },

  statLabel: {
    fontSize: "0.95rem",
    color: "#697386",
    lineHeight: 1.4,
  },

  burstSection: {
    position: "relative",
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    height: { xs: 360, md: 520 },
    overflow: "hidden",
    background:
      "radial-gradient(circle at 50% 100%, #6f93e8 0%, #a9c3f2 25%, #d6e3fa 55%, #f3f7fd 80%, #ffffff 100%)",
    "& canvas": {
      position: "absolute",
      inset: 0,
      display: "block",
      width: "100% !important",
      height: "100% !important",
    },
  },
  des: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: "40px 24px 32px", md: "56px 32px 48px" },
    borderBottom: "1px solid #E5E7EB",
  },
  blackLine: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: "black",
  },
  greyLine: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    color: "#717171",
  },
};
