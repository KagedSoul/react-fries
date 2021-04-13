import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import contactBackground from "../../../static/assets/images/contact-background.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <Header />
        <h2>ContactPage</h2>
        <Footer />
      </div>
    );
  }
}
