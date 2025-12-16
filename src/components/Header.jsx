import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MAIN_PATH } from '../constants/constants';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: MAIN_PATH + '/' },
  { label: 'Projects', path: MAIN_PATH + '/projects' },
  { label: 'Contact', path: MAIN_PATH + '/contact' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const title = "Linus M.";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // (Mobile)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#fff', color: '#000', boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            
          {/* --- LOGO --- */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', fontWeight: 700, letterSpacing: '.1rem' }}
          >
            {title}
          </Typography>

          {/* --- DESKTOP MENU --- */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: '#000', fontWeight: 600, mx: 1, '&:hover': { color: 'primary.main' } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* --- MOBILE HAMBURGER --- */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </Container>

      {/* --- MOBILE DRAWER --- */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};