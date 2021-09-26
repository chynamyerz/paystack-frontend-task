import React from "react";
import Container from "react-bootstrap/Container";
import { AppNavBar } from "./components/common";

import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <Container fluid>
      <AppNavBar />
      <Home />
    </Container>
  );
}

export default App;
