import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
export default class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <Header />
        <h1>MenuPage</h1>
        <Footer />
      </div>
    );
  }
}
