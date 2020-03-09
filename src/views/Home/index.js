import React from "react";

//components
import Layout from "../../components/Layout";

import Tracker from "../../components/Tracker";
import CountryTable from "../../components/Table";
import News from "../../components/News";
import Share from "../../components/Share";

export default function Home(props) {
  const { data } = props;
  return (
    <Layout>
      <h1>Worldwide Cases</h1>
      <Tracker data={data} />
      <News />
      <Share />
      <CountryTable data={data} />
    </Layout>
  );
}
