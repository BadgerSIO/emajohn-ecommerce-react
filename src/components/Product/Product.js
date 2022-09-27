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
        <img
          src={img}
          alt=""
          onError={(e) => {
            e.currentTarget.src =
              "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page-internet-error-page-issue-found-network-404-error-present-by-man-sleep-display_1150-55450.jpg?w=1380&t=st=1664197948~exp=1664198548~hmac=4c9a4697932e79a9c88a532049b5fb7171f29aaff5579d855e4cef7679b9cd09";
          }}
        />
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
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
