import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

//colors
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";

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
  },
  cases: {
    color: yellow["700"]
  },
  death: {
    color: red["700"]
  },
  recovered: {
    color: green["700"]
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
                <h3 className={classes.cases}>
                  <span role="img"> 🤒</span>{" "}
                  {FormatNumber(data.latest["confirmed"])}
                </h3>
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Deaths">
            <Grid item xs>
              <Paper className={classes.paper}>
                <h3 className={classes.death}>
                  <span role="img"> 💀</span>{" "}
                  {FormatNumber(data.latest["deaths"])}
                </h3>
              </Paper>
            </Grid>
          </Tooltip>
          <Tooltip title="Recovered">
            <Grid item xs>
              <Paper className={classes.paper}>
                <h3 className={classes.recovered}>
                  <span role="img"> ✅</span>{" "}
                  {FormatNumber(data.latest["recovered"])}
                </h3>
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
