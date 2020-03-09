import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

// Helpers
import { FormatNumber } from "../../helpers";

//components
import Layout from "../../components/Layout";
import Chart from "../../components/Chart";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 32
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Country(props) {
  let { country } = useParams();
  const { data } = props;

  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [lastUpdated, setUpdated] = useState();

  const findArray = () => {
    setConfirmed(data.confirmed.locations.find(_ => _.country === country));
    setDeaths(data.deaths.locations.find(_ => _.country === country));
    setRecovered(data.recovered.locations.find(_ => _.country === country));
    setUpdated(new Date(Date.parse(data.confirmed.last_updated)).toString());
  };

  useEffect(() => {
    if (data !== undefined) {
      findArray();
    } else {
      console.log("NO DATA");
    }
  });

  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <h1>{country}</h1>
        {data && confirmed && deaths && recovered ? (
          <>
            <h3>
              <b>Lastest update:</b> {lastUpdated}
            </h3>
            <Grid container spacing={3}>
              <Tooltip title="Confirmed">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    🤒 {FormatNumber(confirmed["latest"])}
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Deaths">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    💀 {FormatNumber(deaths["latest"])}
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Recovered">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    ✅ {FormatNumber(recovered["latest"])}
                  </Paper>
                </Grid>
              </Tooltip>
            </Grid>
            <Chart data={data} country={country} />
            <Map
              style={{ height: "600px", marginTop: "32px" }}
              center={[confirmed.coordinates.lat, confirmed.coordinates.long]}
              zoom={7}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            </Map>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Layout>
  );
}
