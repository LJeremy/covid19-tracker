import React, { useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Helpers
import { useFetch } from "usefetch-caching";

//components
import Layout from "../../components/Layout";

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

export default function Country() {
  let { country } = useParams();

  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [position, setPosition] = useState();

  const data = useFetch(
    `https://coronavirus-tracker-api.herokuapp.com/all`,
    "country"
  );

  const findArray = () => {
    setConfirmed(data.confirmed.locations.find(_ => _.country === country));
    setDeaths(data.deaths.locations.find(_ => _.country === country));
    setRecovered(data.recovered.locations.find(_ => _.country === country));
    console.log("CONFIRMED", confirmed);
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
            <Grid container spacing={3}>
              <Tooltip title="Confirmed">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    🤒 {confirmed["latest"]}
                  </Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Deaths">
                <Grid item xs>
                  <Paper className={classes.paper}>💀 {deaths["latest"]}</Paper>
                </Grid>
              </Tooltip>
              <Tooltip title="Recovered">
                <Grid item xs>
                  <Paper className={classes.paper}>
                    ✅ {recovered["latest"]}
                  </Paper>
                </Grid>
              </Tooltip>
            </Grid>
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
            {/* <TableContainer component={Paper} className={classes.container}>
              <Table
                className={classes.table}
                size="small"
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>Province</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {confirmed.history.map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.key}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Layout>
  );
}
