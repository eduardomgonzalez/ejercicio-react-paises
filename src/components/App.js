import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./Layout";
import Home from "../pages/Home";
import Paises from "../pages/Paises";
import About from "../pages/About";
import Pais from "../pages/Pais";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/paises" component={Paises} />
          <Route exact path="/paises/:alphaCode" component={Pais} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
