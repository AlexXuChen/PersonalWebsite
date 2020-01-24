import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Stars extends Component {
  render() {
    return (
      <div class="stars" id="stars">
        {/* stars */}
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        {this.props.children}
      </div>
    );
  }
}

export default Stars;
