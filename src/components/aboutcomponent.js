import React, { Component } from 'react';
import logo from './bookcase.jpg';


export class About extends Component {
  render() {
    return (

      <div className="logo">
           <img src={logo} width="100" height="200" />
           <p>some info about myself </p>
      </div>
    );
  }
}
