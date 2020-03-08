import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";
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
        <AddItem onButtonSubmit={this.onButtonSubmit} />
        <div className="container">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
