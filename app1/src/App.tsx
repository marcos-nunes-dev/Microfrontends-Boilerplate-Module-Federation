import React from "react";
import Routes from "./routes";
import CommonProviders from "./templates/CommonProviders";

const App = () => (
  <CommonProviders>
    <Routes />
  </CommonProviders>
);

export default App;
