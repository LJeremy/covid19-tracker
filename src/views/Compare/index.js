import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { makeStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";

//colors

import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow";
import green from "@material-ui/core/colors/green";

// Helpers

//components
import Layout from "../../components/Layout";

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

export default function Compare(props) {
  const { data } = props;
  ReactGA.pageview(`/compare`);

  const classes = useStyles();

  return (
    <Layout>
      <Helmet>
        <title>Compare Countries | COVID-19</title>
        <meta name="title" content="Compare Countries| COVID-19" />
      </Helmet>

      <div className={classes.root}>
        <h1>Compare Countries</h1>
        <>
          <h2>JJJJJ</h2>
        </>
      </div>
    </Layout>
  );
}
