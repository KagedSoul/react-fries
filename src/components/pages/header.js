import React, { Component } from "react";

import NavigationManager from "../navigation/navigation-manager";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="left-column">
          <div className="phone-pin">phonePin</div>
          <div className="phone-number">555 555 5555</div>
          <div className="hours">10 AM - MIDNIGHT</div>
        </div>
        <div className="center-column">
          <div className="logo">LogoImage</div>
          <NavigationManager />
        </div>
        <div className="right-column">
          <div className="address">
            <div>123 Any Street</div>
            <div> Scottsdale, AZ, 85251</div>
          </div>
          <div className="location-pin">locationPin</div>
        </div>
      </div>
    );
  }
}
