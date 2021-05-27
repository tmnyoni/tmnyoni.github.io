import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Container className="container">
      <Navbar />
      <Profile />
    </Container>
  );
}

export default App;
