import { Box, Typography } from "@mui/material";
import { footerStyles } from "./Footer.styles";
import { navLinks, brand } from "../../constant/constantData";

const Footer = ({ scrollToSection }) => {
  return (
    <Box id="footer" component="footer" sx={footerStyles.container}>
      <Box sx={footerStyles.top}>
        <Box sx={footerStyles.logo} onClick={() => scrollToSection("hero")}>
          {brand.logoText}
        </Box>

        <Box sx={footerStyles.linkRow}>
          {navLinks.map((link) => (
            <Box
              key={link.id}
              sx={footerStyles.link}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={footerStyles.divider} />

      <Typography sx={footerStyles.copyright}>
        © {new Date().getFullYear()} Stripe clone. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
