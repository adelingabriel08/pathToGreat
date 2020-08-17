import React from "react";
import "./App.css";
import { TagAccessLogo } from "@tag/tag-components-react-v2";
import { FormComponent } from "./Components/Form";
import { Container } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <TagAccessLogo name height="30px" className="m-3" />
      <FormComponent />
    </React.Fragment>
  );
}

export default App;
