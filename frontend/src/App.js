import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


export class App extends Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}

        <Route exact path="/" component={HomeScreen} />

        <Route path="/products/:id" component={ProductScreen} />

        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
