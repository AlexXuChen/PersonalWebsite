import React, { Component } from "react";
import { Link } from "react-scroll";

import "./styles.css";

class Projects extends Component {
  render() {
    return (
  <div className="container" id="projects">
          <h1 className="text-center">Projects</h1>
          <div className="row">
            <div className="col-md">
              <div className="card">
                <img
                  className="card-img-top"
                  src={require("../assets/projects/bellsmartcity.png")}
                  alt="Bell Smart City"
                />
                <div className="card-body bg-secondary text-white">
                  <div className="card-title">
                    <h5>Bell Smart City</h5>
                  </div>
                  <div className="card-text">
                    <p>
                      filler
                    </p>
                    <a
                      href="https://business.bell.ca/shop/medium-large/internet-of-things/smart-cities"
                      className="btn btn-outline-light btn-sm text-monospace"
                      target="_blank"
                    >
                      Check it out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Projects;

