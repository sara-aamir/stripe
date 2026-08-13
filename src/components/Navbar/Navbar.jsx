import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { navbarStyles } from "./Navbar.styles";
import { navLinks, navCTA, brand } from "../../constant/constantData";

const Navbar = ({ isScrolled, scrollToSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <AppBar position="fixed" elevation={0} sx={navbarStyles.appBar(isScrolled)}>
      <Toolbar sx={navbarStyles.toolbar}>
        <Box sx={navbarStyles.logo} onClick={() => scrollToSection("hero")}>
          {brand.logoText}
        </Box>

        <Box sx={navbarStyles.navLinksWrapper}>
          {navLinks.map((link) => (
            <Box
              key={link.id}
              sx={navbarStyles.navLink}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Box>
          ))}
        </Box>

        <Box sx={navbarStyles.actions}>
          <Button sx={navbarStyles.signInButton}>{navCTA.secondary}</Button>
          <Button sx={navbarStyles.ctaButton}>{navCTA.primary}</Button>
        </Box>

        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={navbarStyles.mobileMenuIcon}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={navbarStyles.drawerList}>
          {navLinks.map((link) => (
            <ListItemButton
              key={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
          <ListItemButton>
            <ListItemText primary={navCTA.secondary} />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary={navCTA.primary} />
          </ListItemButton>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
