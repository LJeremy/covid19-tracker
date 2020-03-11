import React from "react";
import ReactGA from "react-ga";

//components
import Layout from "../../components/Layout";

import Tracker from "../../components/Tracker";
import CountryTable from "../../components/Table";
import News from "../../components/News";
import Share from "../../components/Share";
import Map from "../../components/Map";
import Mortality from "../../components/Mortality";

export default function Home(props) {
  const { data } = props;
  ReactGA.pageview("/");
  return (
    <Layout>
      <h1>Worldwide Cases</h1>
      <Mortality data={data} />
      <Tracker data={data} />
      <Map data={data} />
      <Share />
      <h1>Latest Worldwide Data</h1>
      <CountryTable data={data} />
      <h1>Latest Worldwide News</h1>
      <News />
    </Layout>
  );
}
