export const infrastuctureStyles = {
  container: {
    backgroundColor: "#fff",
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    columnGap: { xs: 0, md: 8 },
    rowGap: { xs: 2, md: 3 },

    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",

    maxWidth: "1200px",
    margin: "0 auto",
    padding: { xs: "32px 24px 40px", md: "48px 32px 56px" },
    borderBottom: "1px solid #E5E7EB",
  },

  heading: {
    color: "black",
    fontSize: { xs: "1rem", md: "3rem" },
    gridColumn: { xs: "1 / -1", md: "1" },
    mt: { xs: 1 },
  },

  des: {
    gridColumn: { xs: "1 / -1", md: "2" },
    gridRow: { xs: "2", md: "1" },
    marginTop: { xs: 0, md: 0 },
  },

  headingButtonWrap: {
    gridColumn: { xs: "1 / -1", md: "1" },
    gridRow: { xs: "3", md: "2" },
    marginTop: 0,
    width: { xs: "100%" },
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
  overlayButton: {
    backgroundColor: "#635BFF",
    color: "#fff",
    textTransform: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: 600,
    fontSize: "0.95rem",

    width: "fit-content",
    "@media (max-width:430px)": {
      width: "100%",
    },

    "&:hover": {
      backgroundColor: "#5148fc",
    },
  },

  caseStudyList: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    marginTop: { xs: 3, md: 4 },
  },

  caseStudyItem: {
    borderTop: "1px solid #E5E7EB",
    "&:last-of-type": {
      borderBottom: "1px solid #E5E7EB",
    },
  },

  caseStudyRow: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: { xs: 1.5, sm: 2 },
    padding: "20px 0",
    cursor: "pointer",
  },

  caseStudyLeft: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    minWidth: 0,
    width: { xs: "100%", sm: "auto" },
  },

  caseStudyTitle: {
    color: "#0A0A0A",
    fontSize: { xs: "0.95rem", md: "1.05rem" },
    fontWeight: 500,
    minWidth: 0,
    flex: 1,
    "&:hover": {
      color: "#635BFF",
    },
  },

  toggleButton: {
    minWidth: "44px",
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "#F0F0FF",
    color: "#635BFF",
    flexShrink: 0,
    alignSelf: { xs: "flex-end", sm: "center" },

    "&:hover": {
      backgroundColor: "#E4E1FF",
    },
  },

  storyButton: {
    backgroundColor: "#fff",
    color: "#635BFF",
    border: "1px solid #E5E7EB",
    textTransform: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: "0.9rem",
    flexShrink: 0,
    alignSelf: { xs: "flex-end", sm: "center" },

    "&:hover": {
      backgroundColor: "#F7F7FF",
      borderColor: "#635BFF",
    },
  },
  caseStudyLogo: {
    width: 40,
    height: 40,
    borderRadius: "6px",
    objectFit: "cover",
    backgroundColor: "#F5F5F7",
    flexShrink: 0,
  },
  caseStudyStoryButton: {
    backgroundColor: "#fff",
    color: "#635BFF",
    border: "1px solid #E5E7EB",
    textTransform: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: "0.9rem",
    marginTop: { xs: 3, md: 4 },
    alignSelf: "flex-start",

    "&:hover": {
      backgroundColor: "#F7F7FF",
      borderColor: "#635BFF",
    },
  },

  caseStudyContent: {
    paddingBottom: "24px",
  },

  caseImage: {
    width: "100%",
    height: { xs: "220px", md: "420px" },
    objectFit: "cover",
    borderRadius: "12px",
    backgroundColor: "#F5F5F7",
    display: "block",
  },

  statsRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: 3, md: 6 },
    marginTop: "20px",
  },

  statItem: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4px",
  },

  statValue: {
    fontWeight: 700,
    color: "#0A0A0A",
    fontSize: "0.95rem",
  },

  statLabel: {
    color: "#6B7280",
    fontSize: "0.95rem",
  },

  expertsSection: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    borderTop: "1px solid #E5E7EB",
    paddingTop: { xs: 4, md: 5 },
    marginTop: { xs: 2, md: 3 },
  },

  expertsHeading: {
    color: "black",
    fontSize: { xs: "1.4rem", md: "1.8rem" },
    marginBottom: { xs: 3, md: 4 },
  },

  expertsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
    gap: { xs: 4, md: 5 },
  },

  expertColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "12px",
    height: "100%",
  },

  expertIconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  expertIcon: {
    color: "#635BFF",
    fontSize: "1.4rem",
  },

  expertText: {
    color: "#3C3C43",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    flexGrow: 1,
  },

  expertTitle: {
    color: "#0A0A0A",
    fontWeight: 700,
  },

  expertLink: {
    color: "#635BFF",
    textTransform: "none",
    padding: 0,
    minWidth: "unset",
    fontWeight: 600,
    fontSize: "0.9rem",

    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },

  startupSection: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    columnGap: { xs: 0, md: 8 },
    rowGap: { xs: 2, md: 3 },
    borderTop: "1px solid #E5E7EB",
    paddingTop: { xs: 4, md: 5 },
    marginTop: { xs: 2, md: 3 },
  },

  carouselNav: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: { xs: 3, md: 5 },
    marginBottom: "16px",
  },

  carouselNavButton: {
    minWidth: "44px",
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    backgroundColor: "#F0F0FF",
    color: "#635BFF",

    "&:hover": {
      backgroundColor: "#E4E1FF",
    },
  },

  carouselTrack: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    display: "flex",
    gap: "24px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    paddingBottom: "8px",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  carouselCardWrap: {
    flex: "0 0 auto",
    width: { xs: "240px", md: "280px" },
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  carouselCard: {
    width: "100%",
    height: "320px",
    borderRadius: "12px",
    overflow: "hidden",
    display: "block",
    scrollSnapAlign: "start",
    backgroundColor: "#F5F5F7",
  },

  carouselCardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  carouselCaption: {
    color: "#0A0A0A",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    flexGrow: 1,
  },

  carouselLink: {
    color: "#635BFF",
    textTransform: "none",
    padding: 0,
    minWidth: "unset",
    fontWeight: 600,
    fontSize: "0.9rem",
    justifyContent: "flex-start",
    alignSelf: "flex-start",

    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },

  promoGrid: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: { xs: 3, md: 4 },
    marginTop: { xs: 4, md: 5 },

    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  promoCard: {
    position: "relative",
    borderRadius: "12px",
    padding: { xs: "24px", md: "28px" },
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "12px",
    overflow: "hidden",
  },

  promoText: {
    color: "#1A1A2E",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    maxWidth: "300px",
  },

  promoTitle: {
    fontWeight: 700,
  },

  promoLink: {
    color: "#1A1A2E",
    textTransform: "none",
    padding: 0,
    minWidth: "unset",
    fontWeight: 600,
    fontSize: "0.9rem",
    justifyContent: "flex-start",
    alignSelf: "flex-start",

    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },

  platformsSection: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
    columnGap: { xs: 0, md: 8 },
    rowGap: { xs: 2, md: 3 },
    borderTop: "1px solid #E5E7EB",
    paddingTop: { xs: 4, md: 5 },
    marginTop: { xs: 2, md: 3 },
  },
  platformFeaturesWrap: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    marginTop: { xs: 2, md: 3 },
  },

  platformImageWrap: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    marginTop: { xs: 3, md: 4 },
  },

  platformImage: {
    width: "100%",
    height: { xs: "260px", md: "460px" },
    objectFit: "cover",
    borderRadius: "12px",
    backgroundColor: "#F5F5F7",
    display: "block",
  },

  testimonialViewport: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },

  testimonialTrack: {
    display: "flex",
    alignItems: "flex-start",
    transition: "transform 0.4s ease",
  },

  testimonialSlide: {
    flex: {
      xs: "0 0 85%",
      md: "0 0 100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
    boxSizing: "border-box",
    padding: { xs: "0 12px", md: 0 },
  },
  testimonialWrap: {
    gridColumn: { xs: "1 / -1", md: "1 / -1" },
    marginTop: { xs: 5, md: 6 },
    marginBottom: { xs: 4, md: 6 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
  },

  testimonialAvatar: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
    backgroundColor: "#F5F5F7",
  },

  testimonialQuote: {
    color: "#3C3C43",
    fontSize: { xs: "1rem", md: "1.4rem" },
    lineHeight: 1.5,
    maxWidth: "760px",
    width: "100%",
  },

  testimonialByline: {
    color: "#3C3C43",
    fontSize: "0.95rem",
  },

  testimonialName: {
    fontWeight: 700,
    color: "#0A0A0A",
  },

  testimonialLink: {
    color: "#635BFF",
    textTransform: "none",
    fontWeight: 600,
    fontSize: "0.9rem",

    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },

  testimonialTabs: {
    position: "relative",
    display: "flex",
    width: "100%",
    maxWidth: "900px",
    borderTop: "1px solid #E5E7EB",
    marginTop: "24px",
  },

  testimonialTab: {
    flex: "1 1 0",
    minWidth: 0,
    padding: { xs: "20px 2px", md: "20px 0" },
    borderRadius: 0,
    color: "#9CA3AF",
    fontSize: { xs: "0.7rem", md: "1rem" },
    fontWeight: 600,
    textTransform: "none",
    whiteSpace: "nowrap",
  },

  testimonialTabActive: {
    color: "#0A0A0A",
  },

  testimonialIndicator: {
    position: "absolute",
    top: "-1px",
    left: 0,
    height: "2px",
    backgroundColor: "#635BFF",
    transition: "transform 0.3s ease",
  },
};
