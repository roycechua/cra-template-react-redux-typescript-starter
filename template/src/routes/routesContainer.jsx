import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/NotFound";

// const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
// const Iviewer = React.lazy(() => import("../pages/iviewer/Iviewer"));
// const HireIQ = React.lazy(() => import("../pages/hireiq/hireiq"));
// const TalkPush = React.lazy(() => import("../pages/talkpush/talkpush"));
// const ShowTalkPushApplicant = React.lazy(() =>
//   import("../pages/talkpush/components/ShowTalkPushApplicant")
// );
// const NotFound = React.lazy(() => import("../pages/NotFound"));

const routesContainer = () => {
  return (
    <Switch>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Route path="/dashboard" exact component={Dashboard} />
        {/* <Route path="/iviewer" component={Iviewer} />
        <Route path="/hireiq" component={HireIQ} />
        <Route exact path="/talkpush" component={TalkPush} />
        <Route path="/talkpush/:id" component={ShowTalkPushApplicant} /> */}
        <Route component={NotFound}/>
      {/* </Suspense> */}
    </Switch>
  );
};

export default routesContainer;
