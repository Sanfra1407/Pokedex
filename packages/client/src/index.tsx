import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "antd/dist/antd.css";
import "./style.css";
import App from "./App";

/**
 * @const appSelectorID
 * @description CSS selector useful to load the app
 * @returns {string}
 */
const appSelectorID: string = "satispay-assignment";

/**
 * @const client
 * @description Estabilish connection to ApolloServer
 * @returns {undefined}
 */
const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

/*
 * App's entrypoint
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById(appSelectorID)
);
