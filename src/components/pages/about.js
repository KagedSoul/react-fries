import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
export default class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <Header />
        <h1>aboutPage</h1>
        <Footer />
      </div>
    );
  }
}
