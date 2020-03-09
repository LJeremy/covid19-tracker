import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//views
import Home from "./Home";
import Country from "./Country";
import Countries from "./Countries";
import Worldwide from "./Worldwide";
import News from "./News";
import NotFound from "./NotFound";

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

  return (
    <ThemeProvider theme={theme}>
      <Tags />
      <Router basename="/covid19-tracker" history={history}>
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
          <Route exact path="/country/:country">
            <Country data={data} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
