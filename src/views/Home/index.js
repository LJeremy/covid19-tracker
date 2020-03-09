import React from "react";
import ReactGA from "react-ga";

//components
import Layout from "../../components/Layout";

import Tracker from "../../components/Tracker";
import CountryTable from "../../components/Table";
import News from "../../components/News";
import Share from "../../components/Share";

export default function Home(props) {
  const { data } = props;
  ReactGA.pageview("/");
  return (
    <Layout>
      <h1>Worldwide Cases</h1>
      <Tracker data={data} />
      <h1>Latest Worldwide News</h1>
      <News />
      <Share />
      <h1>Latest Worldwide Data</h1>
      <CountryTable data={data} />
    </Layout>
  );
}