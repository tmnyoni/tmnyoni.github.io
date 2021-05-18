import React from "react";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
