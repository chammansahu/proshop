import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

export class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <main>
          <Route path="/login" component={LoginScreen} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
