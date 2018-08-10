import React, { Component } from 'react';
import logo from './bayview.jpg';
import './aboutcomponent.css';

export class About extends Component {
  render() {
    return (
  <div> <h1 class="App">ABOUT ME</h1>
      <div className="logo">
           <img src={logo} width="300" />
           <p>some info about myself </p>
</div></div>
    );
  }
}
