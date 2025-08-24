import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

export default function Navbar({ scrollToSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (sectionId) => {
    if (scrollToSection) {
      scrollToSection(sectionId);
    }
  };

  const menuItems = [
    { text: 'Home', sectionId: 'home' },
    { text: 'About', sectionId: 'about' },
    { text: 'Skills', sectionId: 'skills' },
    { text: 'Projects', sectionId: 'projects' },
    { text: 'Contact', sectionId: 'contact' },
  ];

  const drawer = (
    <Box sx={{ width: 250, pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <Button
              fullWidth
              onClick={() => {
                handleDrawerToggle();
                handleNavClick(item.sectionId);
              }}
              sx={{
                justifyContent: 'flex-start',
                px: 3,
                py: 1.5,
                color: 'text.primary',
                textTransform: 'none',
                fontSize: '1.1rem',
              }}
            >
              {item.text}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(15, 1, 52, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => handleNavClick('home')}
              sx={{
                flexGrow: 1,
                color: 'inherit',
                fontWeight: 700,
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              Janidu Peiris
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  onClick={() => handleNavClick(item.sectionId)}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    px: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(187, 134, 252, 0.1)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.paper',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar />
    </>
  );
}
