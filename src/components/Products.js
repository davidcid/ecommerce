import React from "react";
import database from "../products.json";
import "./Products.css";

class Products extends React.Component {
  showSth = products => {
    return products.map((product, key) => {
      let imgPath = `/images/${product.filename}`;
      return (
        <div className="card" key={product.title}>
          <p className="type">{product.type}</p>
          <img src={imgPath} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>{product.price}€</h4>
        </div>
      );
    });
  };

  render() {
    return this.showSth(database);
  }
}

export default Products;
