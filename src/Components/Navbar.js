import { CartIcon } from "../icons";

import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const amount = useSelector((store) => store.cart.amount);
  return (
    <nav>
      <div>
        <div className="nav-center">
          <h3>Mobile Store</h3>
          <div className="nav-container">
            <CartIcon></CartIcon>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
