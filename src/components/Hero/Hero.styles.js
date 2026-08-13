import { colors } from "../../constant/colors";

import { MARQUEE_LOGO_HEIGHT } from "../../constant/constantData";

export const heroStyles = {
  wrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",

    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    borderLeft: "1px solid #F3F4F6",
    borderRight: "1px solid #F3F4F6",
  },

  container: {
    backgroundColor: "#fff",
    minHeight: "100vh",
    px: {
      xs: 2,
      sm: 3,
      md: 4,
    },
  },

  heroGifPlaceholder: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    background:
      "radial-gradient(circle at 90% 20%, rgba(255,160,0,.75), transparent 22%), radial-gradient(circle at 80% 50%, rgba(181,92,255,.55), transparent 30%), radial-gradient(circle at 100% 100%, rgba(99,91,255,.45), transparent 35%)",
  },

  heroGif: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "right center",
    zIndex: 0,
    pointerEvents: "none",
  },
  googleIcon: {
    width: "22px",
    height: "22px",
    objectFit: "contain",
  },
  content: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1050px",
    width: "100%",
  },

  smallText: {
    color: "#6B7280",
    fontSize: "0.95rem",
    mb: 3,
    display: "none",
    "@media (min-width:426px)": {
      display: "block",
    },
  },

  heading: {
    fontWeight: 400,
    fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
    lineHeight: 1.15,
    color: "#1A1F36",
    letterSpacing: "0px",
    textAlign: "center",
  },
  heading2: {
    fontWeight: 400,
    fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
    lineHeight: 1.15,
    color: "#635BFF",
    letterSpacing: "0px",
  },

  description: {
    mt: 0,
    fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem" },
    color: "#425466",
    letterSpacing: "0px",
    fontWeight: 400,
    lineHeight: 1.15,
    textAlign: "center",
    display: "none",
    "@media (min-width:426px)": {
      display: "block",
    },
  },

  buttonRow: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mt: 5,
    "@media (min-width:376px)": {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },

  primaryButton: {
    backgroundColor: colors.primary,
    textTransform: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    fontWeight: 600,
    width: "100%",
    "@media (min-width:376px) and (max-width:599px)": {
      width: "auto",
      flex: 1,
    },
    "@media (min-width:600px)": {
      width: "auto",
      flex: "none",
    },
    "&:hover": {
      backgroundColor: "#5548ee",
    },
    "& .MuiButton-endIcon": {
      transition: "0.3s",
    },
    "&:hover .MuiButton-endIcon": {
      transform: "translateX(4px)",
    },
  },

  secondaryButton: {
    textTransform: "none",
    borderRadius: "10px",
    padding: "12px 24px",
    color: "#1A1F36",
    borderColor: "#D0D5DD",
    backgroundColor: "#fff",
    width: "100%",
    whiteSpace: "nowrap",
    "@media (min-width:376px) and (max-width:599px)": {
      width: "auto",
      flex: 1,
    },
    "@media (min-width:600px)": {
      width: "auto",
      flex: "none",
    },

    "&:hover": {
      backgroundColor: "#F9FAFB",
      borderColor: "#D0D5DD",
    },
  },

  marqueeCard: {
    position: "relative",
    zIndex: 2,
    mt: { xs: 8, md: 10 },
    width: "100%",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "14px",
    py: 3,
    px: 2,
    boxShadow: "0 1px 3px rgba(16, 24, 40, 0.04)",
  },

  marqueeViewport: {
    width: "100%",
    overflow: "hidden",
    maskImage:
      "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
  },

  marqueeTrack: {
    display: "flex",
    alignItems: "center",
    width: "max-content",
    gap: { xs: 6, md: 9 },
    animation: "marquee-scroll 28s linear infinite",
    "@keyframes marquee-scroll": {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-50%)" },
    },
    "&:hover": {
      animationPlayState: "paused",
    },
  },

  marqueeItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    height: `${MARQUEE_LOGO_HEIGHT + 10}px`,
    minWidth: { xs: "90px", md: "115px" },
    whiteSpace: "nowrap",
    userSelect: "none",
    textDecoration: "none",
    opacity: 1,
    transition: "opacity 0.2s, transform 0.2s",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.7,
      transform: "translateY(-2px)",
    },
  },

  marqueeIconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    "& svg": {
      display: "block",
      height: `${MARQUEE_LOGO_HEIGHT}px`,
      width: "auto",
      maxWidth: "100px",
    },
  },

  marqueeText: {
    fontSize: `${MARQUEE_LOGO_HEIGHT}px`,
    lineHeight: 1,
    fontWeight: 600,
    color: "#1A1F36 !important",
    letterSpacing: "-0.2px",
    whiteSpace: "nowrap",
  },

  marqueeItemDark: {
    filter: "invert(1) brightness(0.2)",
  },
};
