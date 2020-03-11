import React from "react";
import ReactGA from "react-ga";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Help from "@material-ui/icons/Help";

//Components
import Layout from "../../components/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function FAQItem(props) {
  const { title, content } = props;
  ReactGA.pageview("/faq");
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      <List component="nav" className={classes.root}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Help />
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <p>{content}</p>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Layout>
  );
}
