import React from "react";
import { Link } from "react-router-dom";

// Material
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  container: {
    marginTop: 32
  },
  table: {
    minWidth: 650
  }
});

export default function CountryTable(props) {
  const classes = useStyles();

  const { data } = props;

  return data ? (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Province</TableCell>
            <TableCell>Confirmed</TableCell>
            <TableCell>Deaths</TableCell>
            <TableCell>Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.confirmed.locations.map((row, index) => (
            <TableRow key={row.name} key={index}>
              <TableCell component="th" scope="row">
                <Link
                  style={{ color: "white", textDecoration: "inherit" }}
                  to={`/country/${row.country}`}
                >
                  {row.country}
                </Link>
              </TableCell>
              <TableCell>{row.province}</TableCell>
              <TableCell>{row.latest}</TableCell>
              <TableCell>{data.deaths.locations[index].latest}</TableCell>
              <TableCell>{data.recovered.locations[index].latest}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <CircularProgress />
  );
}
