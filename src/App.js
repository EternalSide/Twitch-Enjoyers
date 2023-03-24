import React from "react";
import "./App.css";
import Menu from "./containers/Menu";
import Container from "./containers/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App(page) {
  return (
    <div className="App">
      <Router>
        <div className="left-menu">
          <Menu />
        </div>
        <Container />
      </Router>
    </div>
  );
}

export default App;
