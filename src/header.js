import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>My Awesome First Ever App</h1>
        <nav>
          <ul>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>  <Link to="/todos">To-Do List</Link> </p>
          </ul>
        </nav>
      </header>
    )
  }
}
