import React from "react";
import "./App.css";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import $ from "jquery";
import Upcoming from "./components/Upcoming";
import Live from "./components/Live";
import Past from "./components/Past";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <a className="logo" href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </header>
      <div className="container">
        <h2 className="main-heading">Manage Campaigns</h2>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="upcoming-tab"
              data-toggle="tab"
              href="#upcoming"
              role="tab"
              aria-controls="upcoming"
              aria-selected="true"
            >
              Upcoming Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="live-tab"
              data-toggle="tab"
              href="#live"
              role="tab"
              aria-controls="live"
              aria-selected="false"
            >
              Live
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#past"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Past Campaigns
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <Upcoming />
          <Live />
          <Past />
        </div>
      </div>
    </div>
  );
}

export default App;
