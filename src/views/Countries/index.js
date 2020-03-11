import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

//components
import Layout from "../../components/Layout";

const useStyles = makeStyles(theme => ({
  country: {
    color: theme.palette.text.primary
  }
}));

export default function Countries(props) {
  const { data } = props;
  ReactGA.pageview("/countries");
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (data) {
      const results = data.confirmed.locations.filter(item =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      console.log("RESULTS", results);
    }
  }, [searchTerm]);

  return (
    <Layout>
      <h1>Country List</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            style={{ marginBottom: 32 }}
            fullWidth
            label="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </Grid>
        {searchResults &&
          searchResults.map((country, index) => (
            <Grid item xs key={index} style={{ textAlign: "center" }}>
              <Link
                to={`/country/${country.country}`}
                style={{ color: "white", textDecoration: "none" }}
              >
                <span
                  role="img"
                  style={{
                    display: "inline-block",
                    fontSize: "3em",
                    lineHeight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  {country.country_code
                    .toUpperCase()
                    .replace(/./g, char =>
                      String.fromCodePoint(char.charCodeAt(0) + 127397)
                    )}
                </span>
                <h3 className={classes.country}>
                  {country.province ? country.province : country.country}
                </h3>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
}
