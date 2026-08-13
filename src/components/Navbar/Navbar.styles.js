import { colors } from "../../constant/colors";

export const navbarStyles = {
  appBar: (isScrolled) => ({
    bgcolor: isScrolled ? colors.navbarBgSolid : colors.navbarBgTransparent,
    boxShadow: "none",
    borderBottom: isScrolled
      ? `1px solid ${colors.navbarBorder}`
      : "1px solid transparent",
    fontFamily: "'Inter', sans-serif",
    transition: "background-color 0.03s ease, border-color 0.3s ease",
    ...(isScrolled && {
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    }),
  }),

  toolbar: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    py: 0,
    px: { xs: 2, sm: 4, md: 6 },
    minWidth: 0,
  },

  logo: {
    fontFamily: "'Inter', sans-serif",
    color: colors.textDark,
    fontWeight: 700,
    fontSize: { xs: "1.2rem", md: "1.4rem" },
    letterSpacing: "-0.02em",
    cursor: "pointer",
  },

  navLinksWrapper: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: { sm: 1.5, md: 3, lg: 4 },
    minWidth: 0,
    flexShrink: 1,
  },

  navLink: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,
    fontSize: { sm: "0.82rem", md: "0.9rem", lg: "0.95rem" },
    color: colors.textDark,
    cursor: "pointer",
    transition: "color 0.2s ease",
    "&:hover": { color: colors.primary },
  },

  actions: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 1,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  signInButton: {
    fontFamily: "'Inter', sans-serif",
    textTransform: "none",
    fontWeight: 400,
    fontSize: { sm: "0.75rem", md: "0.82rem", lg: "0.95rem" },
    borderRadius: "6px",
    border: "none",
    color: colors.navLinkMuted,
    px: 2,
    py: 0.8,
    "&:hover": {
      borderColor: colors.textDark,
      bgcolor: "#F6F9FC",
      color: colors.textDark,
    },
  },

  ctaButton: {
    fontFamily: "'Inter', sans-serif",
    textTransform: "none",
    fontWeight: 500,
    fontSize: { sm: "0.75rem", md: "0.82rem", lg: "0.95rem" },
    bgcolor: colors.primary,
    color: "#fff",
    borderRadius: "6px",
    px: 2.5,
    py: 0.8,
    boxShadow: "none",
    "&:hover": {
      bgcolor: colors.primaryDark,
      boxShadow: "none",
    },
  },

  mobileMenuIcon: {
    display: { xs: "flex", md: "none" },
    color: colors.textDark,
  },

  drawerList: {
    width: { xs: "100vw", sm: 280 },
    fontFamily: "'Inter', sans-serif",
  },
};
