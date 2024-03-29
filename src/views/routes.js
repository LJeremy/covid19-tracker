import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//views
import Home from "./Home";
import Country from "./Country";
import Countries from "./Countries";
import Worldwide from "./Worldwide";
import News from "./News";
import FAQ from "./FAQ";
import NotFound from "./NotFound";
import Compare from "./Compare";
import CompareDetail from "./Compare/detail";

//components
import Tags from "../components/Tags";

// Helpers
import { useFetch } from "usefetch-caching";
import history from "../helpers/history";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );

  const data = useFetch(
    `https://coronavirus-tracker-api.herokuapp.com/all`,
    "items"
  );

  if (process.env.REACT_APP_STAGE === "PROD") {
    console.log = function no_console() {};
  }

  return (
    <ThemeProvider theme={theme}>
      <Tags />
      <Router basename="/" history={history}>
        <Route component={ScrollToTop} />
        <Switch>
          <Route exact path="/">
            <Home data={data} />
          </Route>
          <Route exact path="/worldwide">
            <Worldwide data={data} />
          </Route>
          <Route exact path="/countries">
            <Countries data={data} />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/country/:country">
            <Country data={data} />
          </Route>
          <Route exact path="/country/:country/:province">
            <Country data={data} />
          </Route>
          <Route exact path="/compare">
            <Compare data={data} />
          </Route>
          <Route exact path="/compare/:countryX/:countryY">
            <CompareDetail data={data} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};
