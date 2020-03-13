import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(8)
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    color: theme.palette.text.primary,
    textDecoration: "inherit"
  },
  title: {
    color: theme.palette.text.primary,
    textDecoration: "inherit"
  }
}));

function Layout(props) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.drawer}>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link className={classes.link} to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/worldwide">
          <ListItem button>
            <ListItemIcon>
              <PublicIcon />
            </ListItemIcon>
            <ListItemText primary="Worldwide" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/countries">
          <ListItem button>
            <ListItemIcon>
              <FormatListNumberedIcon />
            </ListItemIcon>
            <ListItemText primary="Country List" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/compare">
          <ListItem button>
            <ListItemIcon>
              <CompareArrowsIcon />
            </ListItemIcon>
            <ListItemText primary="Compare" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link className={classes.link} to="/news">
          <ListItem button>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary="News" />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link className={classes.title} to="/">
            <Typography variant="h6">🦠 COVID-19</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.toolbar} />
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any
};

export default Layout;
