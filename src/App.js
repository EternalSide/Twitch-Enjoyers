import React, { useEffect } from "react";
import "./App.css";
import Menu from "./containers/Menu";
import Container from "./containers/Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="appBody">
          <div className="left-menu">
            <Menu />
          </div>

          <div className="main__container">
            <div class="main-block ">
              <Container />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
