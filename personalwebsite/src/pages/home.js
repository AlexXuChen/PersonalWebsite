import React, { Component } from "react";
import { Link } from "react-scroll";
// import name from "../assets/home/name";

import "./styles.css";

class Home extends Component {
  render() {
    return (
      <div className="bg-dark text-center" id="home">
        <div className="links">
          <a href="https://www.linkedin.com/in/alexander-xu-chen/" target="_blank">
            <i class="fab fa-linkedin text-light"></i>
          </a>
          <a href="https://github.com/AlexXuChen/" target="_blank">
            <i className="fab fa-github text-light"></i>
          </a>
          <a href="https://drive.google.com/file/d/1R49bBVCqB2V_vYC-LH8Xsheh32t1CpRG/view?usp=sharing" target="_blank">
            <i class="far fa-file-alt text-light"></i>
          </a>
          <a href="mailto:alexxu.chen@mail.utoronto.ca" target="_blank">
            <i class="far fa-envelope text-light"></i>
          </a>
          <a href="https://devpost.com/AlexXuChen" target="_blank">
            <i class='fas fa-code text-light'></i>
          </a>
          <a href="https://www.facebook.com/people/Alex-Chen/100005588077292" target="_blank">
            <i class='fab fa-facebook text-light'></i>
          </a>
          {/* <a href="https://instagram.com/alexxuchen/" target="_blank">
            <i class="fab fa-instagram text-light"></i>
          </a> */}
        </div>
      </div>
    );
  }
}

export default Home;