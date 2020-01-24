import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div class="container">
          <p id="nametag">© Copyright - Alexander Chen 2020</p>
          <p class="insta-tag">
            Photo creds: @thethomasbui
            <a href="https://www.instagram.com/thethomasbui/" class="btn">
              <i class="fab fa-instagram text-light"></i>
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
