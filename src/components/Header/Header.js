import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="mainHeader flex items-center">
      <div className="container flex items-center content-between">
        <img src={logo} alt="" />
        <ul className="navLinks flex items-center">
          <li>
            <a href="/order">Order</a>
          </li>
          <li>
            <a href="/order-review">Order Review</a>
          </li>
          <li>
            <a href="/manage-inventory">Manage Inventory</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
