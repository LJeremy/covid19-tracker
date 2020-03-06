import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//views
import Home from "./Home";
import Country from "./Country";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/country/:country">
          <Country />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
