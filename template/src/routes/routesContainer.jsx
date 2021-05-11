import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Users from '../pages/users/Users';
import NotFound from "../pages/NotFound";

const routesContainer = () => {
  return (
    <Switch>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/users" exact component={Users} />
        <Route component={NotFound}/>
      {/* </Suspense> */}
    </Switch>
  );
};

export default routesContainer;
