import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

// Helpers
import { useFetch } from "usefetch-caching";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Tracker() {
  let items = useFetch(
    `https://coronavirus-tracker-api.herokuapp.com/all`,
    "items"
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items ? (
        <Grid container spacing={3}>
          <Tooltip title="Confirmed">
            <Grid item xs>
              <Paper className={classes.paper}>
                🤒 {JSON.stringify(items.latest["confirmed"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Deaths">
            <Grid item xs>
              <Paper className={classes.paper}>
                💀 {JSON.stringify(items.latest["deaths"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Recovered">
            <Grid item xs>
              <Paper className={classes.paper}>
                ✅ {JSON.stringify(items.latest["recovered"])}
              </Paper>
            </Grid>
          </Tooltip>
        </Grid>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
