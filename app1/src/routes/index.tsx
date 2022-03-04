import * as React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Navigation from "../components/Navigation";
import localRoutes from "../config/routes";
import remoteRoutes from "app2/routes";

const routes = [...localRoutes, ...remoteRoutes];

const Routes = () => {
  return (
    <HashRouter>
      <div>
        <h1>App 1</h1>
        <Navigation />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            ))}
          </Switch>
        </React.Suspense>
      </div>
    </HashRouter>
  );
};

export default Routes;
