import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";

//colors

import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";

// Helpers
import { FormatNumber } from "../../helpers";

//components
import Layout from "../../components/Layout";
import Chart from "../../components/Chart/compare";

import Share from "../../components/Share";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 32
  },
  paper: {
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

const toPercentage = function(arr) {
  return arr.map(function(d, i) {
    const decreaseValue = arr[i - 1] - arr[i];
    //return (100 * d) / arr.reduce((a, b) => a + b, 0);
    // return arr.reduce((a, b) => a + b);
    return Math.abs(((decreaseValue / arr[i - 1]) * 100).toFixed(0)) || 0;
  })[arr.length - 1];
};

export default function CompareDetail(props) {
  let { countryX, countryY } = useParams();
  const { data } = props;
  ReactGA.pageview(`/compare/${countryX}/${countryY}`);

  //CountryX
  const [confirmedX, setConfirmedX] = useState();
  const [deathsX, setDeathsX] = useState();
  const [recoveredX, setRecoveredX] = useState();

  //CountryY
  const [confirmedY, setConfirmedY] = useState();
  const [deathsY, setDeathsY] = useState();
  const [recoveredY, setRecoveredY] = useState();

  const [lastUpdated, setUpdated] = useState();

  const findArray = () => {
    setConfirmedX(
      data.confirmed.locations.find(location => location.country === countryX)
    );
    setDeathsX(
      data.deaths.locations.find(location => location.country === countryX)
    );
    setRecoveredX(
      data.recovered.locations.find(location => location.country === countryX)
    );
    setConfirmedY(
      data.confirmed.locations.find(location => location.country === countryY)
    );
    setDeathsY(
      data.deaths.locations.find(location => location.country === countryY)
    );
    setRecoveredY(
      data.recovered.locations.find(location => location.country === countryY)
    );
    setUpdated(new Date(Date.parse(data.confirmed.last_updated)).toString());
  };

  useEffect(() => {
    if (data !== undefined) {
      findArray();
      if (countryX) {
        console.log();
      }
    } else {
      console.log("NO DATA");
    }
  });

  const classes = useStyles();

  return (
    <Layout>
      {data && confirmedX && deathsX && recoveredX && (
        <Helmet>
          <title>Compare Countries| COVID-19</title>
          <meta name="title" content="Compare Countries| COVID-19" />
        </Helmet>
      )}
      <div className={classes.root}>
        <h1>Compare Countries</h1>
        {data && confirmedX && deathsX && recoveredX ? (
          <>
            <h3>
              <b>Lastest update:</b> {lastUpdated}
            </h3>
            <h2>{countryX}</h2>
            <h4>
              Increase since yesterday:{" "}
              {toPercentage(
                Object.values(confirmedX.history).sort((a, b) => a - b)
              )}
              %
            </h4>
            <Grid container spacing={3}>
              <Tooltip title="Confirmed">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.cases}>
                      <span role="img"> 🤒</span>{" "}
                      {FormatNumber(confirmedX["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Deaths">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.deaths}>
                      <span role="img"> 💀</span>{" "}
                      {FormatNumber(deathsX["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Recovered">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.recovered}>
                      <span role="img"> ✅</span>{" "}
                      {FormatNumber(recoveredX["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
            </Grid>
            <h2>{countryY}</h2>
            <h4>
              Increase since yesterday:{" "}
              {toPercentage(
                Object.values(confirmedY.history).sort((a, b) => a - b)
              )}
              %
            </h4>
            <Grid container spacing={3}>
              <Tooltip title="Confirmed">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.cases}>
                      <span role="img"> 🤒</span>{" "}
                      {FormatNumber(confirmedY["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Deaths">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.deaths}>
                      <span role="img"> 💀</span>{" "}
                      {FormatNumber(deathsY["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Recovered">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.recovered}>
                      <span role="img"> ✅</span>{" "}
                      {FormatNumber(recoveredY["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
            </Grid>
            <Chart data={data} countryX={countryX} countryY={countryY} />
            <Share />
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </Layout>
  );
}
