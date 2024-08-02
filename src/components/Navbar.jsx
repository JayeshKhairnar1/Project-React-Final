import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography, 
  styled,
  ListItemButton,
  ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// routes
import { Link, useLocation } from 'react-router-dom';

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// routes
const itemList = [
  {
    text: "Home",
    to: "/" 
  },
  {
    text: "About",
    to: "/about"
  },
  {
    text: "Contact",
    to: "/contact"
  },
  {
    text: "Login",
    to: "/login"
  },
  {
    text: "Register",
    to: "/register"
  }
];

const Navbar = () => {
  const location = useLocation(); // Hook to get the current route

  return (
    <AppBar 
      component="nav" 
      position="sticky"
      sx={{ 
        backgroundColor: 'black', 
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          component="h2"
        >
          V-Config
        </Typography>
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
          <DrawerItem /> 
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text, to } = item;
            const isActive = location.pathname === to; // Check if the current route is active

            return (
              <ListItem key={text}>
                <ListItemButton component={Link} to={to}
                  sx={{
                    color: '#fff',
                    "&:hover": {
                      backgroundColor: '#333', // Change hover background color
                      color: '#f0f0f0', // Change hover text color
                    },
                    ...(isActive && {
                      borderBottom: '2px solid #fff', // Add a white bottom border for the active item
                      color: '#fff', // Ensure text color is white for the active item
                    })
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
