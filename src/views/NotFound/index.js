import React, { useEffect } from "react";
import { createBrowserHistory } from "history";

//components
import Layout from "../../components/Layout";

const history = createBrowserHistory();

export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      history.goBack();
    }, 5000);
  });
  return (
    <Layout>
      <h1>Error: Not found.</h1>
      <h3>Redirecting you back to previous page in 5 sec...</h3>
    </Layout>
  );
}
