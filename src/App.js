
import React from "react";
import "./App.css";

import Nav from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Footer from "./components/footer";
// import Stars from "./components/stars";

function App() {
  return (
    <div className="App text-dark">
      <Home />
      <Nav>
          <About />
          <br></br>
          <Projects />
      </Nav>
      <Footer></Footer>
    </div>
  );
}

export default App;
