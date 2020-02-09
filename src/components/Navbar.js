import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo">LOGO</div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <div className="shopping-cart">Shopping Cart</div>
        <div className="active-user">Admin</div>
      </nav>
    );
  }
}

export default Navbar;
