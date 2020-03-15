import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { Map, TileLayer, Circle } from "react-leaflet";
import { Tooltip as LToolTip } from "react-leaflet";
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
import Chart from "../../components/Chart";
import News from "../../components/News";
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

const calculateRadius = (cases, multiplier, min, max) => {
  // Calculate radius.
  const radius = cases * multiplier; // Check for min and max.

  if (radius < min) return min;
  if (radius > max) return max; // Return radius.

  return radius;
};

export default function Country(props) {
  let { country, province } = useParams();
  const { data } = props;
  ReactGA.pageview(`/country/${country}`);

  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [lastUpdated, setUpdated] = useState();

  const findArray = () => {
    setConfirmed(
      data.confirmed.locations.find(location =>
        province
          ? province && location.province === province
          : location.country === country
      )
    );
    setDeaths(
      data.deaths.locations.find(location =>
        province
          ? province && location.province === province
          : location.country === country
      )
    );
    setRecovered(
      data.recovered.locations.find(location =>
        province
          ? province && location.province === province
          : location.country === country
      )
    );
    setUpdated(new Date(Date.parse(data.confirmed.last_updated)).toString());
  };

  useEffect(() => {
    if (data !== undefined) {
      findArray();
      console.log("Province", province);
    } else {
      console.log("NO DATA");
    }
  });

  const classes = useStyles();

  return (
    <Layout>
      {data && confirmed && deaths && recovered && (
        <Helmet>
          <title>{`${
            province ? `${country} - ${province}` : country
          } | COVID-19`}</title>
          <meta
            name="title"
            content={`${
              province ? `${country} - ${province}` : country
            } | COVID-19`}
          />
          <meta
            name="description"
            content={`${
              province ? `${country} - ${province}` : country
            }: Confirmed ${FormatNumber(
              confirmed["latest"]
            )}, Deaths: ${FormatNumber(
              deaths["latest"]
            )}, Recovered: ${FormatNumber(recovered["latest"])}| COVID-19`}
          />
          <meta
            name="keywords"
            content={`
            corona, coronavirus, coronavirus in ${country}, coronavirus in ${province}, covid19, corona in ${country}, corona in ${province}, covid19 in ${country}, covid19 in ${province}, corona ${country}, corona ${province}, coronavirus ${country}, coronavirus ${province}, coronavirus tracker, coronavirus numbers, corona numbers, corona tracker, corona map, coronavirus map
            `}
          ></meta>
        </Helmet>
      )}
      <div className={classes.root}>
        <h1>{province ? `${country} - ${province}` : country}</h1>
        {data && confirmed && deaths && recovered ? (
          <>
            <h3>
              <b>Lastest update:</b> {lastUpdated}
            </h3>
            <Grid container spacing={3}>
              <Tooltip title="Confirmed">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.cases}>
                      <span role="img"> 🤒</span>{" "}
                      {FormatNumber(confirmed["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Deaths">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.deaths}>
                      <span role="img"> 💀</span>{" "}
                      {FormatNumber(deaths["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Recovered">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    <h3 className={classes.recovered}>
                      <span role="img"> ✅</span>{" "}
                      {FormatNumber(recovered["latest"])}
                    </h3>
                  </Paper>
                </Grid>
              </Tooltip>
            </Grid>
            <Chart data={data} country={country} />

            <Map
              style={{
                height: "600px",
                marginTop: "32px"
              }}
              center={[confirmed.coordinates.lat, confirmed.coordinates.long]}
              zoom={6}
              maxZoom={12}
              minZoom={3}
              attributionControl={false}
              zoomControl={false}
              maxBoundsViscosity={0.7}
              useFlyTo
            >
              <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png" />
              <Circle
                center={[confirmed.coordinates.lat, confirmed.coordinates.long]}
                radius={calculateRadius(confirmed.latest, 25, 15000, 500000)}
                color="red"
                fillColor="#f03"
                fillOpacity={0.5}
              >
                <LToolTip>
                  <h4>
                    <b>{confirmed.province || confirmed.country}</b>
                    <br />
                    <b>Confirmed cases: {confirmed.latest}</b>
                  </h4>
                </LToolTip>
              </Circle>
            </Map>
            <Share />
            <h1>Country Specific News:</h1>
            <News country={confirmed.country_code} />
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </Layout>
  );
}
