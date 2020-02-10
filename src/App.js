import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Test1 from "./components/Test1";
import ShoppingCart from "./components/ShoppingCart";
import Products from "./components/Products";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: 0
    };
  }

  onButtonSubmit = () => {
    this.setState({ cartItems: this.state.cartItems + 1 });
  };

  render() {
    return (
      <div>
        <Navbar />
        <ShoppingCart numItems={this.state.cartItems} />
        <Test1 onButtonSubmit={this.onButtonSubmit} />
        <Products />
      </div>
    );
  }
}

export default App;
