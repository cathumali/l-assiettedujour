import React from "react";
import Header from "./components/home/Header.js";
import About from "./components/home/About.js";
import Menu from "./components/home/Menu.js";
import Gallery from "./components/home/Gallery.js";

import logo from "./logo.svg";
import "./css/App.css";
import "./css/Reset.css";
import "./css/Styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Menu />
      <Gallery />
    </div>
  );
}

export default App;
