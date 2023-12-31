import React from "react";
import Cartitem from "./Cartitem";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { openmodal } from "../features/modal/modalslice";

export default function Cartcontainer() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1 && cartItems) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Is currently Empty </h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <Cartitem key={item.id} {...item}></Cartitem>;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openmodal())}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
}
