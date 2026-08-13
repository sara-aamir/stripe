import Box from "@mui/material/Box";
import { useApp } from "./hooks/useApp";
import { layoutStyles } from "./Layout.styles";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import GlobalReach from "./components/GlobalReach/GlobalReach";
import GlobalScale from "./components/GlobalScale/GlobalScale";
import InfrastructureSection from "./components/Infrastructure/Infrastructure";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  const { isScrolled, scrollToSection } = useApp();

  return (
    <Box sx={layoutStyles.container}>
      <Navbar isScrolled={isScrolled} scrollToSection={scrollToSection} />
      <HeroSection />
      <GlobalReach />
      <GlobalScale />
      <InfrastructureSection />

      <Footer scrollToSection={scrollToSection} />
    </Box>
  );
};

export default Layout;
