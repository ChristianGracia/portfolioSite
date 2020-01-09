import React, { Component } from "react";
import Work from "../pages/Work";
import About from "../pages/About";

export default class PageCombiner extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div style={{ padding: 20 }}></div>

        <About />
        <Work />
      </div>
    );
  }
}
