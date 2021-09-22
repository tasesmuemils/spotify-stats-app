import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import RedirectPage from "../components/RedirectPage";
import NotFoundPage from "../components/NotFoundPage";

// Creating page routes component
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        {/*Login page*/}
        <Route exact path="/" component={App} />
        {/*Redirect after login page*/}
        <Route path="/redirect" component={RedirectPage} />
        {/*Page not Found*/}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
