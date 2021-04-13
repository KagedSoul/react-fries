import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./pages/footer";
import Header from "./pages/header";
import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./pages/menu";
import Contact from "./pages/contact";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/menu" component={Menu}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
