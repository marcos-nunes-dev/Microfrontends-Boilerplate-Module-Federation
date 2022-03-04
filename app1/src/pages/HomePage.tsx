import * as React from "react";
import Button from "@mui/material/Button";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <h2>Welcome to the future!</h2>
    <p>
      <em>a page being provided by App 1</em>
      <Button color="primary" variant="contained">Hello World</Button>
    </p>
  </div>
);

export default HomePage;
