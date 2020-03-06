import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Layout = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Link style={{ textDecoration: "inherit", color: "white" }} to="/">
            <Typography variant="h6" className={classes.title}>
              COVID-19
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
