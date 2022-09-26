import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb, getCartItems } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCartElem = getCartItems();
    console.log(storedCartElem);
  }, []);
  const handleAddtoCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop">
      <div className="container shop">
        <div className="products">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddtoCart={handleAddtoCart}
            ></Product>
          ))}
        </div>
      </div>
      <div className="order-review">
        <div className="order-review-wrap">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
