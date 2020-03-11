import React from "react";
import ReactGA from "react-ga";
import { TwitterTimelineEmbed } from "react-twitter-embed";
//components
import Layout from "../../components/Layout";
import News from "../../components/News";

export default function NewsView() {
  ReactGA.pageview("/news");
  return (
    <Layout>
      <h1>Worldwide News</h1>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bnodesk"
        theme="dark"
        options={{ height: 800 }}
      />
      <News />
    </Layout>
  );
}
