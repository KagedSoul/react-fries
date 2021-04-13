import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import homepageFries from "../../../static/assets/images/homepage-fries.png";
export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <Header></Header>
        <div
          className="upper-content"
          style={{
            background: "url(" + homepageFries + ")",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="upper-heading">
            <h1>HTML Styled Fries</h1>
          </div>
          <div className="lower-heading">
            <p>Coding Fuel</p>
          </div>
        </div>

        <div className="features-content">
          <div className="column">
            <p>We Deliver</p>
            <p>
              Veniam esse nisi officia laboris irure anim pariatur consectetur
              elit sunt anim reprehenderit sit do.
            </p>
          </div>
          <div className="column">
            <p> You can code from here</p>
            <p>
              Eu do mollit velit ipsum tempor occaecat laborum consectetur
              ullamco aliqua voluptate et amet.
            </p>
          </div>
          <div className="column">
            <p>100+ types of fries!</p>
            <p>
              Mollit excepteur nisi id consectetur voluptate excepteur consequat
              esse culpa veniam anim commodo ipsum minim.
            </p>
          </div>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
