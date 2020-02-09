import React from "react";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 0
    };
  }

  render() {
    return <div>Shopping Cart [{this.props.numItems}]</div>;
  }
}

export default ShoppingCart;
