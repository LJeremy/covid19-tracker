import React from "react";
import ReactGA from "react-ga";
import ReactDOM from "react-dom";
import App from "./views/routes";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("UA-37850527-11");

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
