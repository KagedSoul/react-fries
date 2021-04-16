import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <div className="nav-wrapper">
      {/* <div className="left-side"> */}
      <div className="nav-link-wrapper">
        <NavLink exact to="/" activeClassName="active-nav-link">
          Home
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/about" activeClassName="active-nav-link">
          About
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/contact" activeClassName="active-nav-link">
          Contact
        </NavLink>
      </div>

      <div className="nav-link-wrapper">
        <NavLink to="/menu" activeClassName="active-nav-link">
          Menu
        </NavLink>
      </div>
    </div>
  );
}
