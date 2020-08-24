import React from "react";
import { BrowserRouter as ReactRouter, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import DetailsPage from "./containers/DetailsPage";

const Router = () => (
  <ReactRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/details/:listingId">
        <DetailsPage />
      </Route>
    </Switch>
  </ReactRouter>
);

export default Router;
