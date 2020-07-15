import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/users" component={UsersList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
