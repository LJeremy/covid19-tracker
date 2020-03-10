import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: "grid",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Mortality = props => {
  const classes = useStyles();
  const { data } = props;
  const calculateMortality = () => {
    return data
      ? `${((data.latest.deaths / data.latest.confirmed) * 100).toFixed(2)}`
      : "-";
  };

  const tooltip =
    "How the Mortality rate is calculated: \n (deaths / confirmed) * 100)";

  return (
    <Grid container spacing={0}>
      <Tooltip title={tooltip}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Mortality rate: {calculateMortality()}%</h1>
          </Paper>
        </Grid>
      </Tooltip>
    </Grid>
  );
};
export default Mortality;
