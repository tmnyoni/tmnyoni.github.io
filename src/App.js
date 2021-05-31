import React from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Tools from "./components/Tools";

import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="container">
      <Navbar />
      <Profile />
      <Skills />
      <Tools />
      <Footer />
    </Container>
  );
}

export default App;
