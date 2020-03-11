import React from "react";
import ReactGA from "react-ga";

//components
import Layout from "../../components/Layout";

import CountryTable from "../../components/Table";

export default function Worldwide(props) {
  const { data } = props;
  ReactGA.pageview("/worldwide");
  return (
    <Layout>
      <h1>Worldwide Cases</h1>
      <CountryTable data={data} />
    </Layout>
  );
}
