import React from "react";
import UserPage from "../Users/UserPage";
import { Switch, Route } from "react-router-dom";
import About from "./About";

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={UserPage} />
          <Route exact path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}

export default Main;
