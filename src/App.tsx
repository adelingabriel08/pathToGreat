import React from "react";
import "./App.css";
import { TagAccessLogo } from "@tag/tag-components-react-v2";
import { FormComponent } from "./Components/Form";
import { Container } from "react-bootstrap";
import { ParentComponent } from "./Components/Parent";

function App() {
  return (
    <React.Fragment>
      <Container className="d-flex flex-column">
        <TagAccessLogo name height="30px" className="m-3" />
        <FormComponent />
      </Container>
    </React.Fragment>
  );
}

export default App;
