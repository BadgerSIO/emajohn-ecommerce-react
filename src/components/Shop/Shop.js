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
    const savedCart = [];
    for (const id in storedCartElem) {
      const addToCart = products.find((product) => product.id === id);
      if (addToCart) {
        const quantity = storedCartElem[id];
        addToCart.quantity = quantity;
        savedCart.push(addToCart);
      }
    }
    setCart(savedCart);
  }, [products]);
  const handleAddtoCart = (selectedProduct) => {
    let newCart = [];
    const exits = cart.find((product) => product.id === selectedProduct.id);
    if (!exits) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exits.quantity = exits.quantity + 1;
      newCart = [...rest, exits];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
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
