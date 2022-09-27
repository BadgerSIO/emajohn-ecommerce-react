import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quan = 0;
  for (const product of cart) {
    quan = quan + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <h4>Selected items: {quan}</h4>
      <h4>Total Price: ${total} </h4>
      <h4>Total Shipping Charge: ${shipping}</h4>
      <h4>Tax: ${tax} </h4>
      <h3>Grand Total</h3>
      <h4 className="text-center">${grandTotal}</h4>
    </div>
  );
};

export default Cart;
