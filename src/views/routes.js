import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

//views
import Home from "./Home";
import Country from "./Country";
import NotFound from "./NotFound";

// Helpers
import { useFetch } from "usefetch-caching";

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

  ReactGA.initialize("UA-37850527-11");

  return (
    <ThemeProvider theme={theme}>
      <Router basename="/covid19-tracker">
        <Switch>
          <Route exact path="/">
            <Home data={data} />
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
