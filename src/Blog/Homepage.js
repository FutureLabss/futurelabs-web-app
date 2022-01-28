import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Nav } from 'react-bootstrap'
import Cardcomponent from './Cardcomponent';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#000000',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app baryggy
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: -drawerWidth,
  },
  hero: {
    backgroundImage: "url('https://res.cloudinary.com/dremo/image/upload/v1634903273/IMG_0107_1_a80rgw.png')",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "beginning",
    alignItems: "center",
    color: "#fff",
    fontSize: "2.5rem",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold"
    
  },
  heros: {
    position: "relative",
    top: "-190px",
    display: "flex",
    justifyContent: "beginning",
    alignItems: "center",
    color: "#fff",
    fontSize: "1.5rem",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold"
  },
  blogContainer: {
     paddingTop: theme.spacing(1)
  },
  blogTitle: {
    fontWeight: "bold",
     paddingBottom: theme.spacing(1),
     position: "relative",
     display: "flex",
     fontFamily: "Raleway",
     fontStyle: "normal",
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
    setOpen(true);
   };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const handleDrawerToggle = () => {
    // setMobileOpen(!mobileOpen);
  // };
  // const [mobileOpen, setMobileOpen] = React.useState(false)
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {/* FutureLabs */}
            <img  className=""src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" alt=""/>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            // onClick={handleDrawerToggle}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Box px={2} className={classes.hero} >
        <Box>Stories From The<br/> Best Curators</Box>
      </Box>
      <Box px={2} className={classes.heros}>
        <Box>Read well-crafted articles from happenings <br/> around the globe</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        Latest Posts
      </Typography>
      <Cardcomponent/>

      </Container>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <Nav.Link href="/"><img src="https://res.cloudinary.com/not-set/image/upload/v1634900477/Futurelabs-logo_1_szyxc8.png" alt=""/></Nav.Link>
      </Drawer>

      

      
    </div>
  );
}

// export default Homepage

