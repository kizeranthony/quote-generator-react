import React from "react";
import Home from "./pages/Home";
import Directory from "./pages/Directory";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/directory" component={Directory} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
