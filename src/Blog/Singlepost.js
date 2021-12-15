import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar'; 
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Nav } from 'react-bootstrap'


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor:'#FF9000',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function PersistentDrawer() {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
           FutureLabs
          </Typography>
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' })}}
          >
           
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: "2px",
          borderColor: "#000000",
        }}
      />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        md={{ p: 10 }}
      >
        <Grid item xs={6} sx={{ textAlign: 'center'}} md={2}>
          <h5 >Technology</h5>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'center'}} md={2}>
          <h5 >Investment</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5>Startups</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5 > Health</h5>
        </Grid>
        <Grid item xs={4} sx={{ textAlign: 'center'}} md={2}>
          <h5> Business</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}} md={12} mt={5}>
          <h1>The Coca-Cola Strategy</h1>
        </Grid>
      </Grid>
    <Grid item xs={12} p={1} px={{md:25}}>
    <Stack direction="row" justifyContent="space-between "mb={5}>
        
    <AvatarGroup max={4} >
    <Avatar  sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1638887604/Ellipse_4_bvdgwu.png" />
         
     </AvatarGroup >
     <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </AvatarGroup >
    </Stack>
        </Grid>
      <Grid className="text-center" item xs={12}>
        <img
          className="imgsss"
          src="data:image/png;base64,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"
          alt=""
        />
       
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
       
        <Box sx={{ textAlign: 'left', mx: 20 ,  fontStyle: 'italic', fontSize: 'h6.fontSize'}} >22 hours ago.</Box>
        
       
      </Grid>
      
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Nav.Link href="/"> <img  className="w-50 mt-5  container"src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/> </Nav.Link>
        <Grid item xs={12} sx={{ textAlign: 'center'}}>
          <h5 >Technology</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}} >
          <h5 >Investment</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}} >
          <h5>Startups</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}} >
          <h5 > Health</h5>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center'}}>
          <h5> Business</h5>
        </Grid>
      </Drawer>
    </Box>
  );
}
