import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
// Styles
import "./styles/tailwind.css";

// Screens
import Main from "./screens/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>{" "}
    </Router>
  );
}

export default App;
