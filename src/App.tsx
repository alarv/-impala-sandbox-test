import React from "react";
import "./App.css";
import "fontsource-roboto";
import Content from "./components/Content";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Content />
      </Container>
    </div>
  );
}

export default App;
