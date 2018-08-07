import React from "react";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>My Awesome First Ever App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">To-Do List</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
