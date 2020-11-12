import React, { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on each heading or use the search box to organize and narrow your results.</p>
      </div>
    )
  }
}
