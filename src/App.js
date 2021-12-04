import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Route path="/" name="Home" exact component={Home} />
      <Route path="/dashboard" name="Dashboard" component={Dashboard} />
    </Router>
  );
}

class AppCss extends React.Component {
  render() {
    return <div className="App" />;
  }
}

export default App;
