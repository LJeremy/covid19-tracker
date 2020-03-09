import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

// Helpers

import { FormatNumber } from "../../helpers";

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

export default function Tracker(props) {
  const { data } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data ? (
        <Grid container spacing={3}>
          <Tooltip title="Confirmed">
            <Grid item xs>
              <Paper className={classes.paper}>
                🤒 {FormatNumber(data.latest["confirmed"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Deaths">
            <Grid item xs>
              <Paper className={classes.paper}>
                💀 {FormatNumber(data.latest["deaths"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Recovered">
            <Grid item xs>
              <Paper className={classes.paper}>
                ✅ {FormatNumber(data.latest["recovered"])}
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
