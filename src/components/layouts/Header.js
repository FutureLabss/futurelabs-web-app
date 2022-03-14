import React from 'react';
import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { makeStyles} from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../contexts/AuthContext'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: '#FF9000',
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
    // necessary for content to be below app bar
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
  },
  link: {
    textDecoration: 'none',
    paddingLeft: '.8rem',
    color: '#FF9000',
    fontSize: '1rem',
  }
}));

export default function PersistentDrawerRight() {
    // const { currentUser } = useAuth();
    // const [display, setDisplay] = useState(false)
    const classes = useStyles();
    // const theme = useTheme();

    // const [open, setOpen] = React.useState(false);
    // const [display, setDisplay] = useState(true)
  
    //  const handleDrawerOpen = () => {
    //   setOpen(true);
    //  };
  
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };

    // useEffect(() => {
    //   if(currentUser === null){
    //     setDisplay(false)
    //   }else {
    //     setDisplay(true)
    //   }
    // },[currentUser])

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
            // [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
            <Nav.Link href="https://futurelabs-agency1.netlify.app/" style={{textDecoration: 'none', color: 'white'}}>FutureLabs</Nav.Link>  
            </Typography>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              // onClick={handleDrawerToggle}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton> */}
          </Toolbar>
        </AppBar>
       
        {/* <Drawer
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
          <Link to="/" className={classes.link}>Home</Link>
          <Link to="/signin" className={classes.link}>Login</Link>
          <Link to="/signup" className={classes.link}>Signup</Link>
          {display && (<Link to="/user" className={classes.link}>Dashboard</Link>)}
        </Drawer> */}
     </div>
    );
  }