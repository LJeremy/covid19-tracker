import React from "react";
import ReactGA from "react-ga";

//components
import Layout from "../../components/Layout";

import News from "../../components/News";

export default function NewsView() {
  ReactGA.pageview("/news");
  return (
    <Layout>
      <h1>Worldwide News</h1>
      <News />
    </Layout>
  );
}
