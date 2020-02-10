import React from "react";
import database from "../products.json";

class Products extends React.Component {
  showSth = products => {
    return products.map((product, key) => {
      return (
        <div className="card" key={product.title}>
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
        </div>
      );
    });
  };

  render() {
    return this.showSth(database);
  }
}

export default Products;
