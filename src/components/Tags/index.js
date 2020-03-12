import React, { Component } from "react";
import { Helmet } from "react-helmet";
import CImage from "../../assets/images/banner.png";

class Tags extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta
            name="description"
            content="Live statistics and coronavirus news tracking the number of confirmed cases, recovered patients, and death toll by country due to the COVID 19 coronavirus from Wuhan, China. Coronavirus counter with new cases, historical data, and info. Daily charts, graphs, news and updates"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://lars.coffee/covid19-tracker/"
          />
          <meta property="og:title" content="Corona Virus Tracker | COVID-19" />
          <meta
            property="og:description"
            content="Worldwide COVID-19 Tracker | Live updates | 24/7"
          />
          <meta property="og:image" content={CImage} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://lars.coffee/covid19-tracker/"
          />
          <meta
            property="twitter:title"
            content="Corona Virus Tracker | COVID-19"
          />
          <meta
            property="twitter:description"
            content="Worldwide COVID-19 Tracker | Live updates | 24/7"
          />
          <meta property="twitter:image" content={CImage} />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default Tags;
