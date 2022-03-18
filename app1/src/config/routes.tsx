import React from "react";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const EditPage = React.lazy(() => import("../pages/EditPage"));

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/edit",
    component: EditPage,
    exact: true,
  },
];

export default routes;
