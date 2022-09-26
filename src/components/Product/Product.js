import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { handleAddtoCart, product } = props;
  const { name, img, category, seller, price } = product;
  return (
    <div className="product">
      <div className="product_img">
        <img src={img ? img : "no image found"} alt="" />
      </div>
      <div className="product_info">
        <div>
          <h3 className="product_title">{name}</h3>
          <h4 className="product_price">Price: ${price}</h4>
          <h5 className="product_seller">Manufacturer: {seller}</h5>
          <h4 className="product_category">Category: {category}</h4>
        </div>
        <div>
          <button
            onClick={() => handleAddtoCart(product)}
            className="addToCart"
          >
            <p>Add to Cart</p>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
