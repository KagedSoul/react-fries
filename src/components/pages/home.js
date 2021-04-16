import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";
import homepageFries from "../../../static/assets/images/homepage-fries.png";
import homepageBg from "../../../static/assets/images/fries-multiply-bg.png";
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

        <div
          className="features-content"
          style={{
            background: "url(" + homepageBg + ")",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="column">
            <h3>We Deliver</h3>
            <p>
              Veniam esse nisi officia laboris irure anim pariatur consectetur
              elit sunt anim reprehenderit sit do.
            </p>
          </div>
          <div className="column">
            <h3>You can code from here</h3>
            <p>
              Eu do mollit velit ipsum tempor occaecat laborum consectetur
              ullamco aliqua voluptate et amet.
            </p>
          </div>
          <div className="column">
            <h3>100+ types of fries!</h3>
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
