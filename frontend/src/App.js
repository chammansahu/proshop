import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

export class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <main>
          <Route exact path="/" component={HomeScreen} />

          <Route path="/products/:id" component={ProductScreen} />
        </main>
        <Footer/>
      </Router>
    );
  }
}

export default App;
