import React, { useEffect, useState } from "react";
import {NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemAvatar, Grid,Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { userRoutes } from "../../../router/UserRoutes";
import Close from "@mui/icons-material/Close";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate, useLocation, useRoutes } from "react-router-dom";


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const history = useNavigate();
  const location = useLocation();
  const { window } = props;
  let element = useRoutes(userRoutes)
    
  console.log("location ===> ", location)
  const { currentUser } = useAuth()

  const [mobileOpen, setMobileOpen] = useState(false)

  const [title, setTitle] = useState('Dashboard')

  useEffect(()=> {
      if(!currentUser){
          history('/signin')
      }
  },[history, currentUser])
  
  useEffect(() => {
    const path = location.pathname.split('/').pop()
    const current = userRoutes.find((item) => item.path === path)
    setTitle(current?.title ?? 'Dashboard')
  }, [location.pathname])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <NavLink to={`/`} exact >
          <Typography variant="h5" sx={{ color: 'rgb(108, 117, 125)', flexGrow: 1, textAlign: 'center', fontWeight: 700 }}>
            FutureLabs <sup>&#8226;</sup>
          </Typography>
        </NavLink>
        

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Close />
        </IconButton>

      </Toolbar>
      {
        userRoutes.map((item, index) => {
          return (
            <NavLink to={`/user/${item.path}`}   exact key={index}>
              <ListItem sx={{ pl: '30px', my: '10px' }} className="hov"  >
                <ListItemAvatar>
                  <img src={item.icon} alt={`${item.title}_icon`} />
                </ListItemAvatar>
                <ListItemText 
                  disableTypography 
                  className="hov"
                  style={{fontWeight:'bold'}}
                  primary={item.title} sx={{ color: 'rgb(108, 117, 125)', fontWeight: 700 }} />
              </ListItem>
              {index % 3 === 0 && index > 1 ? <Divider component="" /> : null}
            </NavLink>
          )
        })
      }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        background: "#fff", color: "black", borderBottom: '1px solid #f5de06'
      }}
        elevation={0} position="fixed" >

        <Toolbar>
          <IconButton color="primary" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }} >
            <MenuIcon />
          </IconButton>

          <Grid alignItems="center" container>
            <Grid item xs={6} sm={6}>
              <Typography variant="h6" > {title} </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography sx={{ textAlign: 'right' }}>{currentUser.username?.split('@', 1)[0]} </Typography>
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders" >

        <Drawer
          container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true, }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}
          children={drawer} />

        <Drawer
          variant="permanent"
          sx={{ display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}
          open children={drawer} />

      </Box>

      <Container maxWidth={false} component="main" sx={{  width: { sm: `calc(100% - ${drawerWidth}px)` } }} >
        <Toolbar />
        {element}
      </Container>
    </Box>
  );
}



export default ResponsiveDrawer;