import * as React from "react";
import Button from "@mui/material/Button";
import CommonProviders from "../templates/CommonProviders";
import useStore from "app1/demoContext";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const HomePage = () => {
  const { count, increment } = useStore();

  return (
    <CommonProviders>
      <div style={style}>
        <h1>Home Page</h1>
        <h2>Welcome to the future!</h2>
        <p>
          <em>a page being provided by App 1</em>
          {count}
          <Button color="primary" variant="contained" onClick={increment}>
            Hello World
          </Button>
        </p>
      </div>
    </CommonProviders>
  );
};

export default HomePage;
