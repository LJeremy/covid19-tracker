import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

// Helpers
import { FormatNumber } from "../../helpers";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: "grid",
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
                <span role="img"> 🤒</span>{" "}
                {FormatNumber(data.latest["confirmed"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Deaths">
            <Grid item xs>
              <Paper className={classes.paper}>
                <span role="img"> 💀</span>{" "}
                {FormatNumber(data.latest["deaths"])}
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Recovered">
            <Grid item xs>
              <Paper className={classes.paper}>
                <span role="img"> ✅</span>{" "}
                {FormatNumber(data.latest["recovered"])}
              </Paper>
            </Grid>
          </Tooltip>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}