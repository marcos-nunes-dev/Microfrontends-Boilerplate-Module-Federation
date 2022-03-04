import * as React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
];

export default routes;
