import React from "react";
import database from "../products.json";
import "./Products.css";

const Products = () => {
  const showSth = products => {
    return products.map((product, key) => {
      let imgPath = `/images/${product.filename}`;
      return (
        <div className="card" key={product.title}>
          <p className="type">{product.type}</p>
          <img src={imgPath} alt={product.title} />
          <div className="stars">{showStars(product.rating)}</div>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4>{product.price}€</h4>
        </div>
      );
    });
  };

  const showStars = rating => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐️";
    }
    return stars;
  };

  return showSth(database);
};

export default Products;
