import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import CommonProviders from "../templates/CommonProviders";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  padding: 12,
};

const TestWrapper = styled.div`
  background: yellow;
  padding: 10px;
`;

const HomePage = () => (
  <CommonProviders>
    <div style={style}>
      <h1>Home Page</h1>
      <h2>Welcome to the future!</h2>
      <p>
        <em>a page being provided by App 1</em>
        <TestWrapper>
          <Button color="primary" variant="contained">
            Hello World
          </Button>
        </TestWrapper>
      </p>
    </div>
  </CommonProviders>
);

export default HomePage;
