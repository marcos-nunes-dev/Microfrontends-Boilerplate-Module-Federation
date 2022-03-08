import * as React from "react";
import useStore from "app1/demoContext";

const style = {
  height: 400,
  backgroundColor: "yellow",
  color: "white",
  padding: 12,
};

const EditPage = () => {
  const { count } = useStore();
  return (
    <div style={style}>
      <h1>Edit Page</h1>
      {count}
    </div>
  );
};

export default EditPage;
