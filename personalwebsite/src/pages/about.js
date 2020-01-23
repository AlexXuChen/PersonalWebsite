import React, { Component } from "react";

import "./styles.css";

class About extends Component {
  render() {
    return (
      <div className="container" id="about">
        <h1 className="text-center">About Me</h1>
        <div class="span4">
          <img id="profile" class="img-left" src={require("../assets/about/profile.jpg")}/>
          <p id="profile_desc">
            My name is Alex Chen, I am a 2nd year Computer Science Student at the University of Toronto 
            St. George campus. As a software and full stack developer, I focus on the Information and 
            Communication Technology industry, specializing in tech related to Internet of Things(IoT), 
            with broad interests in other emerging technologies that are enabling digital transformation. 
            I pride myself in being fast learner and a team player, who will always bring a can-do attitude
            to any team!
          </p>
          <p id="profile_desc">
            Over the 2019 summer term, I worked as a part of the Network IoT Team at Bell Canada developing
            Smart City solutions. Over the course of 4 months, I worked in an agile environment, where I 
            learned the fundamentals and advancements in developing web APIs, hosting web services on a 
            CI/CD pipeline and preserving detailed documentation and endpoint validation.
          </p>
          <p id="profile_desc">
            Feel free to have a look at the number of projects that I have worked on and to check out my 
            to peek at my tech stack and a few of the many technologies I have had the pleasure of working 
            with. Please don't hesitate to get in contact with me, and I look forward to our conversation!
          </p>
        </div>
      </div>
    );
  }
}

export default About;

