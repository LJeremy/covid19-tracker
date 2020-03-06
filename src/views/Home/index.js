import React from "react";

//components
import Layout from "../../components/Layout";
import Tracker from "../../components/Tracker";
import CountryTable from "../../components/Table";

export default function Home() {
  return (
    <Layout>
      <h1>Cases</h1>
      <Tracker />
      <CountryTable />
    </Layout>
  );
}
