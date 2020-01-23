import React, { Component } from "react";
import { Link } from "react-scroll";

import "./styles.css";

class Projects extends Component {
  render() {
    return (
      <div className="container" id="projects">
        <h1 className="text-center">Projects</h1>
        {/* Row 1 */}
        <div class="card-deck">
          <div class="card">
            <img
              src={require("../assets/projects/bellsmartcity.png")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Bell Smart City</h5>
              <h7 className="title-tag">Markham Smart City Pilot</h7>
              <p class="card-text">
                A city wide solution that integrates IoT to optimize city operations.
              </p>
              <a
                href="https://business.bell.ca/shop/medium-large/internet-of-things/smart-cities"
                class="btn btn-secondary btn-lg active" 
                role="button" 
                aria-pressed="true"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <br></br>
        <div class="card-deck">
          <div class="card">
            <img
              src={require("../assets/projects/arcticminers.jpg")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Arctic Miners</h5>
              <h7 className="title-tag">UoftHacks VII Winner/Best Blockchain Build</h7>
              <p class="card-text">
                An Angular visualizer to simplify and display ERC721 Tokens using Smart Contracts and Web3
              </p>
              <a href="https://devpost.com/software/blockchaingame" 
              class="btn btn-secondary active" 
              role="button" 
              aria-pressed="true">
                  Check it out
              </a>
              <a href="https://github.com/flodesi/Arctic-Miner" 
              class="btn">
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/projects/safebet.jpg")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">SafeBet</h5>
              <h7 className="title-tag">Hack the 6ix 2019</h7>
              <p class="card-text">
                A vanilla HTML, JS web app hosted with a Node.js instance designed to monitor driving
                habits based on an algorithm trained with Amazon SageMaker to report realtime data. 
              </p>
              <a href="https://devpost.com/software/safe_bet" 
              class="btn btn-secondary active" 
              role="button" 
              aria-pressed="true">
                  Check it out
              </a>
              <a href="https://github.com/AlexXuChen/safe_bet" 
              class="btn">
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/projects/robodropper.jpg")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Robo-Dropper</h5>
              <h7 className="title-tag">Pueblo Science Hackathon for Science Education Winner</h7>
              <p class="card-text">
                A custom built Arduino board programmed with C++ to automate an application relevant and
                beneficial to 3rd world education.
              </p>
              <a href="https://www.artsci.utoronto.ca/news/hackathon-science-education-hacking-better-world?fbclid=IwAR0T7zmL5y94kUCAwGm61Thg08iLqUJiyj7BvgP7fm5xFYEy1xx_UfL-Mxo" 
              class="btn btn-secondary active" 
              role="button" 
              aria-pressed="true">
                  Check it out
              </a>
            </div>
          </div>
        </div>
        <br></br>

        {/* Row 3 */}
        <div class="card-deck">
          <div class="card">
            <img
              src={require("../assets/projects/desperado.png")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Desperado</h5>
              <h7 className="title-tag">Android Game</h7>
              <p class="card-text">
                A game made in Java and XML with a SQL backend for user tracking and data. Implements
                fundamental design patterns and model view presenter architecture.
              </p>
              <a href="https://github.com/faarisali/desperado-android" 
              class="btn">
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/projects/twiliochatbot.png")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Twilio CPaaS Solutions</h5>
              <h7 className="title-tag">Twilio Online Developer Program</h7>
              <p class="card-text">
                Prototyped SMS Chatbot and Survey using Twilio provided phone number for direct user
                communication, powered by regular expressions.
              </p>
              <a href="https://www.twilio.com/bots" 
              class="btn btn-secondary active" 
              role="button" 
              aria-pressed="true">
                  Check it out
              </a>
            </div>
          </div>
          <div class="card">
            <img
              src={require("../assets/projects/fpgasimonsays.jpg")}
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">FPGA Simon Says</h5>
              <h7 className="title-tag">Application of FPGA Programming</h7>
              <p class="card-text">
                A Verilog/VHDL game created using processor components such as datapaths and control units.
              </p>
              <a href="https://github.com/ShirleyofHuang/FPGA_SimonSays" 
              class="btn">
                <i class="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
