import React from "react";
import { Button, FormControl, InputGroup, Jumbotron } from "react-bootstrap";

function Content() {
  return (
    <Jumbotron className="content mt-5">
      <InputGroup className="mt-3 mb-3">
        <FormControl
          placeholder="Search for hotels..."
          aria-label="Search for hotels..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
}

export default Content;
