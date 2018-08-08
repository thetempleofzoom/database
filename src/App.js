import React from "react";
import './app.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Todolist } from "./components/todocomponent";
import { Header } from "./header";
import { About } from "./components/aboutcomponent";

class App extends React.Component {
  render() {
    return (
  <div className="Center">
  <div className="App-header">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/about" component={About} />
            <Route path="/todos" render={() => <Todolist title="To-Do List" />} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
      </div>
    );
  }

}

export default App;
