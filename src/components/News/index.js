import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// Helpers
import { useFetch } from "usefetch-caching";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      transform: "translate(14px, 17px) scale(1.2)"
    }
  }
}));

export default function News(props) {
  const classes = useStyles();
  const { country } = props;

  const data = useFetch(
    `https://newsapi.org/v2/top-headlines?q=corona&country=${
      country ? country.toLowerCase() : "us"
    }&pageSize=10&apiKey=a91facb09c9444c4a2797a5ac993dc57`,
    `news${country ? country.toLowerCase() : ""}`
  );

  console.log("NEWS", data);
  console.log("NEWS COUNTRY CODE", country);
  return (
    <List className={classes.root}>
      {data &&
        data.articles &&
        data.articles.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className={classes.link}
          >
            <article>
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={item.urlToImage} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {item.source.name}, {item.author} {""}
                      </Typography>
                      {item.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </article>
            {index !== 9 && <Divider variant="inset" component="li" />}
          </a>
        ))}
    </List>
  );
}
