import React, { Component } from "react";
import { Link, animateScroll } from "react-scroll";

class NavigationBar extends Component {
  scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 300 });
  };

  render() {
    return (
      <div> 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top py-0">
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" onClick={this.scrollToTop}>
                <p>Home</p>
              </a>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-56}
                duration={300}
              >
                <p>About Me</p>
              </Link>
              <Link
                className="nav-item nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-56}
                duration={300}
              >
                <p>Projects</p>
              </Link>
            
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default NavigationBar;